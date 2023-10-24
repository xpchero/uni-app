export * from './cssScoped'
export * from './copy'
export * from './inject'
export * from './mainJs'
export * from './jsonJs'
export * from './console'
export * from './dynamicImportPolyfill'
export * from './uts/app'
export * from './uts/h5'

export { assetPlugin, parseAssets, getAssetHash } from './vitejs/plugins/asset'
export {
  isCSSRequest,
  cssPlugin,
  cssPostPlugin,
  minifyCSS,
  cssLangRE,
  commonjsProxyRE,
} from './vitejs/plugins/css'

export { generateCodeFrame, locToStartAndEnd } from './vitejs/utils'