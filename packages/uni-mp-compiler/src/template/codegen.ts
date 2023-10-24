import { hyphenate, isFunction, isPlainObject } from '@vue/shared'
import { SLOT_DEFAULT_NAME, dynamicSlotName } from '@dcloudio/uni-shared'
import {
  formatMiniProgramEvent,
  isAttributeNode,
  isElementNode,
  isUserComponent,
  MiniProgramCompilerOptions,
} from '@dcloudio/uni-cli-shared'
import {
  ComponentNode,
  DirectiveNode,
  ElementNode,
  ElementTypes,
  ExpressionNode,
  findProp,
  isSlotOutlet,
  NodeTypes,
  RootNode,
  SimpleExpressionNode,
  SlotOutletNode,
  TemplateChildNode,
  TemplateNode,
  TextNode,
} from '@vue/compiler-core'
import type { TemplateCodegenOptions } from '../options'
import type { NameScopedSlotDirectiveNode } from '../transforms/transformSlot'
import { genExpr } from '../codegen'
import { ForElementNode, isForElementNode } from '../transforms/vFor'
import { IfElementNode, isIfElementNode } from '../transforms/vIf'
import { findSlotName } from '../transforms/vSlot'
import { TransformContext } from '../transform'
import {
  ATTR_VUE_PROPS,
  VIRTUAL_HOST_STYLE,
  VIRTUAL_HOST_CLASS,
} from '../transforms/utils'

export interface TemplateCodegenContext {
  code: string
  directive: string
  scopeId?: string | null
  event: MiniProgramCompilerOptions['event']
  slot: MiniProgramCompilerOptions['slot']
  lazyElement: MiniProgramCompilerOptions['lazyElement']
  component: MiniProgramCompilerOptions['component']
  isBuiltInComponent: TransformContext['isBuiltInComponent']
  isMiniProgramComponent: TransformContext['isMiniProgramComponent']
  push(code: string): void
}

export function generate(
  { children }: RootNode,
  {
    slot,
    event,
    scopeId,
    emitFile,
    filename,
    directive,
    lazyElement,
    isBuiltInComponent,
    isMiniProgramComponent,
    component,
  }: TemplateCodegenOptions
) {
  const context: TemplateCodegenContext = {
    slot,
    event,
    code: '',
    scopeId,
    directive,
    lazyElement,
    component,
    isBuiltInComponent,
    isMiniProgramComponent,
    push(code) {
      context.code += code
    },
  }
  children.forEach((node) => {
    genNode(node, context)
  })
  emitFile!({ type: 'asset', fileName: filename, source: context.code })
}

export function genNode(
  node: TemplateChildNode,
  context: TemplateCodegenContext
) {
  switch (node.type) {
    case NodeTypes.IF:
      return node.branches.forEach((node) => {
        genNode(node as unknown as IfElementNode, context)
      })
    case NodeTypes.TEXT:
      return genText(node, context)
    case NodeTypes.INTERPOLATION:
      return genExpression(node.content, context)
    case NodeTypes.ELEMENT:
      if (node.tagType === ElementTypes.SLOT) {
        return genSlot(node, context)
      } else if (node.tagType === ElementTypes.COMPONENT) {
        return genComponent(node, context)
      } else if (node.tagType === ElementTypes.TEMPLATE) {
        return genTemplate(node, context)
      } else if (isLazyElement(node, context)) {
        return genLazyElement(node, context)
      }
      return genElement(node, context)
  }
}

function genText(node: TextNode, { push }: TemplateCodegenContext) {
  push(node.content)
}

function genExpression(node: ExpressionNode, { push }: TemplateCodegenContext) {
  push(`{{${genExpr(node)}}}`)
}

function genVIf(exp: string, { push, directive }: TemplateCodegenContext) {
  push(` ${directive}if="{{${exp}}}"`)
}
function genVElseIf(exp: string, { push, directive }: TemplateCodegenContext) {
  push(` ${directive}elif="{{${exp}}}"`)
}
function genVElse({ push, directive }: TemplateCodegenContext) {
  push(` ${directive}else`)
}

function genVFor(
  node: ForElementNode,
  { push, directive }: TemplateCodegenContext
) {
  const { sourceCode, valueAlias, indexAlias } = node.vFor
  push(` ${directive}for="${sourceCode}"`)
  if (valueAlias) {
    push(` ${directive}for-item="${valueAlias}"`)
  }
  if (valueAlias === 'index') {
    push(` ${directive}for-index="${indexAlias}"`)
  }
  const keyProp = findProp(node, 'key', true)
  if (keyProp) {
    const key = ((keyProp as DirectiveNode).exp as SimpleExpressionNode).content
    push(` ${directive}key="${key.includes('.') ? key.split('.')[1] : key}"`)
    node.props.splice(node.props.indexOf(keyProp), 1)
  }
}

function genSlot(node: SlotOutletNode, context: TemplateCodegenContext) {
  // 移除掉所有非name属性，即移除作用域插槽的绑定指令
  node.props = node.props.filter((prop) => {
    if (prop.type === NodeTypes.ATTRIBUTE) {
      return prop.name === 'name'
    } else if (prop.arg?.type === NodeTypes.SIMPLE_EXPRESSION) {
      return prop.arg.content === 'name'
    }
  })
  if (!node.children.length || context.slot.fallbackContent) {
    // 无后备内容或支持后备内容
    return genElement(node, context)
  }
  const { push } = context
  const isVIfSlot = isIfElementNode(node)
  if (isVIfSlot) {
    push(`<block`)
    genVIfCode(node, context)
    push(`>`)
    delete (node as any).vIf
  }
  const children = node.children.slice()
  node.children.length = 0

  push(`<block`)
  const nameProp = findProp(node, 'name')
  let name = SLOT_DEFAULT_NAME
  if (nameProp) {
    if (isAttributeNode(nameProp)) {
      if (nameProp.value?.content) {
        name = nameProp.value.content
      }
    } else {
      if ((nameProp as NameScopedSlotDirectiveNode).slotName) {
        name = (nameProp as NameScopedSlotDirectiveNode).slotName
      }
    }
  }
  genVIf(`$slots.${name}`, context)
  push(`>`)
  genElement(node, context)
  push(`</block>`)
  push(`<block`)
  genVElse(context)
  push(`>`)
  children.forEach((node) => {
    genNode(node, context)
  })
  push(`</block>`)
  if (isVIfSlot) {
    push(`</block>`)
  }
}

function genTemplate(node: TemplateNode, context: TemplateCodegenContext) {
  const slotProp = node.props.find(
    (prop) =>
      prop.type === NodeTypes.DIRECTIVE &&
      (prop.name === 'slot' ||
        (prop.name === 'bind' &&
          prop.arg?.type === NodeTypes.SIMPLE_EXPRESSION &&
          prop.arg.content === 'slot'))
  ) as DirectiveNode | undefined

  // 为 bind 时，通常是作用域插槽生成的 vSlot.ts:197 createBindDirectiveNode('slot',...)
  if (slotProp && (slotProp.name === 'bind' || findSlotName(slotProp))) {
    /**
     * 仅百度、字节支持使用 block 作为命名插槽根节点
     * 此处为了统一仅默认替换为view
     * <template v-slot/> => <view slot="">
     */
    node.tag = 'view'
  } else {
    // <template/> => <block/>
    node.tag = 'block'
  }
  // @ts-ignore
  node.tagType = ElementTypes.ELEMENT

  // 仅单个子节点的命名插槽(非作用域)，直接使用子节点作为插槽使用，避免多增加的 view 节点影响 flex 排版
  if (
    slotProp &&
    node.tag === 'view' &&
    !isForElementNode(node) &&
    node.children.length === 1
  ) {
    const child = node.children[0]
    if (
      isElementNode(child) &&
      !isForElementNode(child) &&
      !isSlotOutlet(child)
    ) {
      child.props.push(slotProp)
      return genElement(child, context)
    }
  }

  return genElement(node, context)
}

function genComponent(node: ComponentNode, context: TemplateCodegenContext) {
  if (context.component?.getPropertySync) {
    return genElement(node, context)
  }
  if (isIfElementNode(node) || isForElementNode(node)) {
    return genElement(node, context)
  }
  // 小程序原生组件，补充 if(r0)
  if (context.isMiniProgramComponent(node.tag)) {
    ;(node as IfElementNode).vIf = {
      name: 'if',
      condition: 'r0',
    }
    return genElement(node, context)
  }
  const prop = findProp(node, ATTR_VUE_PROPS) as DirectiveNode
  if (!prop) {
    return genElement(node, context)
  }
  ;(node as IfElementNode).vIf = {
    name: 'if',
    condition: (prop.exp as SimpleExpressionNode).content,
  }
  return genElement(node, context)
}

function isLazyElement(node: ElementNode, context: TemplateCodegenContext) {
  if (!context.lazyElement) {
    return false
  }
  let lazyProps: { name: 'on' | 'bind'; arg: string[] }[] | true | undefined
  if (isFunction(context.lazyElement)) {
    const res = context.lazyElement(node, context)
    if (!isPlainObject(res)) {
      return res
    }
    lazyProps = res[node.tag]
  } else {
    lazyProps = context.lazyElement[node.tag]
  }
  if (lazyProps === true) {
    return true
  }
  if (!lazyProps) {
    return
  }
  return node.props.some(
    (prop) =>
      prop.type === NodeTypes.DIRECTIVE &&
      (lazyProps as { name: 'on' | 'bind'; arg: string[] }[]).find(
        (lazyProp) => {
          return (
            prop.name === lazyProp.name &&
            prop.arg?.type === NodeTypes.SIMPLE_EXPRESSION &&
            lazyProp.arg.includes(prop.arg.content)
          )
        }
      )
  )
}
/**
 * 部分内置组件的部分事件在初始化时会立刻触发，但标准事件需要等首次渲染才能确认事件函数，故增加wx:if="{{r0}}"
 * @param node
 * @param context
 */
function genLazyElement(node: ElementNode, context: TemplateCodegenContext) {
  const { push } = context
  if (!isIfElementNode(node)) {
    push(`<block`)
    // r0 => ready 首次渲染
    genVIf(`r0`, context)
    push(`>`)
    genElement(node, context)
    push(`</block>`)
    return
  }
  // v-if,v-else-if 无需处理
  if (node.vIf.name !== 'else') {
    return genElement(node, context)
  }
  push(`<block`)
  genVElse(context)
  push(`>`)
  node.vIf.name = 'if'
  node.vIf.condition = 'r0'
  genElement(node, context)
  push(`</block>`)
}

function genVIfCode(node: IfElementNode, context: TemplateCodegenContext) {
  const { name, condition } = node.vIf
  if (name === 'if') {
    genVIf(condition!, context)
  } else if (name === 'else-if') {
    genVElseIf(condition!, context)
  } else if (name === 'else') {
    genVElse(context)
  }
}

function genElement(node: ElementNode, context: TemplateCodegenContext) {
  const { children, isSelfClosing, props } = node
  let tag = node.tag
  // <template slot="left"/> => <block slot="left"/>
  if (tag === 'template') {
    if (findProp(node, 'slot')) {
      tag = 'view'
    } else {
      tag = 'block'
    }
  }
  // 无用的 block
  if (
    tag === 'block' &&
    props.length === 0 &&
    !isIfElementNode(node) &&
    !isForElementNode(node)
  ) {
    return children.forEach((node) => {
      genNode(node, context)
    })
  }
  let virtualHost: boolean = false
  if (isUserComponent(node, context)) {
    tag = hyphenate(tag)
    if (context.component?.normalizeName) {
      tag = context.component?.normalizeName(tag)
    }
    if (context.component?.mergeVirtualHostAttributes) {
      virtualHost = true
    }
  }
  const { push } = context

  const hasVIf = isIfElementNode(node)
  const hasVFor = isForElementNode(node)
  const hasVIfAndVFor = hasVIf && hasVFor

  // 小程序中 wx:else wx:elif 不支持与 wx:for 同时使用
  // 故 if 需要补充一层 block
  if (hasVIfAndVFor) {
    push(`<block`)
    genVIfCode(node, context)
    push(`>`)
  }
  push(`<${tag}`)
  if (!hasVIfAndVFor && hasVIf) {
    genVIfCode(node, context)
  }
  if (hasVFor) {
    genVFor(node, context)
  }
  if (props.length) {
    genElementProps(node, virtualHost, context)
  }

  if (isSelfClosing) {
    push(`/>`)
  } else {
    push(`>`)
    children.forEach((node) => {
      genNode(node, context)
    })
    push(`</${tag}>`)
  }
  if (hasVIfAndVFor) {
    push(`</block>`)
  }
}

function checkVirtualHostProps(name: string, virtualHost: boolean): string[] {
  const names: string[] = [name]
  if (virtualHost) {
    const obj: { [key: string]: string } = {
      style: VIRTUAL_HOST_STYLE,
      class: VIRTUAL_HOST_CLASS,
    }
    if (name in obj) {
      // TODO 支付宝平台移除原有属性（支付宝小程序自定义组件外部属性始终无效）
      names.push(obj[name])
    }
    return names
  }
  return names
}

export function genElementProps(
  node: ElementNode,
  virtualHost: boolean,
  context: TemplateCodegenContext
) {
  node.props.forEach((prop) => {
    if (prop.type === NodeTypes.ATTRIBUTE) {
      const { value } = prop
      if (value) {
        checkVirtualHostProps(prop.name, virtualHost).forEach((name) => {
          context.push(` ${name}="${value.content}"`)
        })
      } else {
        context.push(` ${prop.name}`)
      }
    } else {
      const { name } = prop
      if (name === 'on') {
        genOn(prop, node, context)
      } else {
        genDirectiveNode(prop, node, virtualHost, context)
      }
    }
  })
}
function genOn(
  prop: DirectiveNode,
  node: ElementNode,
  { push, event, isBuiltInComponent }: TemplateCodegenContext
) {
  const arg = (prop.arg as SimpleExpressionNode).content
  const exp = prop.exp as SimpleExpressionNode
  const modifiers = prop.modifiers
  const name = (event?.format || formatMiniProgramEvent)(arg, {
    isCatch: modifiers.includes('stop') || modifiers.includes('prevent'),
    isCapture: modifiers.includes('capture'),
    isComponent: isUserComponent(node, { isBuiltInComponent }),
  })
  if (exp.isStatic) {
    push(` ${name}="${exp.content}"`)
  } else {
    push(` ${name}="{{${exp.content}}}"`)
  }
}

function genDirectiveNode(
  prop: DirectiveNode,
  node: ElementNode,
  virtualHost: boolean,
  context: TemplateCodegenContext
) {
  const { push, component } = context
  if (prop.name === 'slot') {
    if (prop.arg) {
      const arg = prop.arg as SimpleExpressionNode
      if (arg.isStatic) {
        const slotName = dynamicSlotName(arg.content)
        // 非作用域默认插槽不生成 slot 属性
        if (slotName !== SLOT_DEFAULT_NAME) {
          push(` slot="${slotName}"`)
        }
      } else {
        push(` slot="{{${arg.content}}}"`)
      }
    }
  } else if (prop.name === 'show') {
    let hiddenPropName = 'hidden'
    if (isUserComponent(node, context) && component && component.vShow) {
      hiddenPropName = component.vShow
    }
    push(
      ` ${hiddenPropName}="{{!${(prop.exp as SimpleExpressionNode).content}}}"`
    )
  } else if (prop.arg && prop.exp) {
    const arg = (prop.arg as SimpleExpressionNode).content
    const exp = (prop.exp as SimpleExpressionNode).content
    checkVirtualHostProps(arg, virtualHost).forEach((arg) => {
      push(` ${arg}="{{${exp}}}"`)
    })
  } else {
    if (prop.name !== 'bind') {
      throw new Error(`unknown directive ` + JSON.stringify(prop))
    }
  }
}