/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file
 * @kit ArkUI
 */

/// <reference path="../component/common_ts_ets_api.d.ts"/>
import { AsyncCallback, Callback } from './@ohos.base';
import BaseContext from './application/BaseContext';
import { LocalStorage } from 'StateManagement';
import image from './@ohos.multimedia.image';
import { UIContext } from './@ohos.arkui.UIContext';
/**
 * Window manager.
 *
 * @namespace window
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 */
/**
 * Window manager.
 *
 * @namespace window
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @crossplatform
 * @since 10
 */
/**
 * Window manager.
 *
 * @namespace window
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare namespace window {
    /**
     * The type of a window.
     *
     * @enum { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    enum WindowType {
        /**
         * App.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @FAModelOnly
         * @since 7
         */
        TYPE_APP,
        /**
         * System alert.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 11
         */
        TYPE_SYSTEM_ALERT,
        /**
         * Float.
         *
         * @permission ohos.permission.SYSTEM_FLOAT_WINDOW
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @since 9
         */
        TYPE_FLOAT,
        /**
         * Dialog.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @since 10
         */
        TYPE_DIALOG
    }
    /**
     * Describes the type of avoid area
     *
     * @enum { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Describes the type of avoid area
     *
     * @enum { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    enum AvoidAreaType {
        /**
         * Default area of the system
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        /**
         * Default area of the system
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @atomicservice
         * @since 11
         */
        TYPE_SYSTEM,
        /**
         * Notch
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        /**
         * Notch
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @atomicservice
         * @since 11
         */
        TYPE_CUTOUT,
        /**
         * Area for system gesture
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Area for system gesture
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @atomicservice
         * @since 11
         */
        TYPE_SYSTEM_GESTURE,
        /**
         * Area for keyboard
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Area for keyboard
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @atomicservice
         * @since 11
         */
        TYPE_KEYBOARD,
        /**
         * Area for navigation indicator
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @atomicservice
         * @since 11
         */
        TYPE_NAVIGATION_INDICATOR
    }
    /**
     * Describes the window status of an application
     *
     * @enum { number }
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    enum WindowStatusType {
        /**
         * Undefined status of the window
         *
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        UNDEFINED = 0,
        /**
         * Full screen status of the window
         *
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        FULL_SCREEN,
        /**
         * Maximize status of the window
         *
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        MAXIMIZE,
        /**
         * Minimize status of the window
         *
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        MINIMIZE,
        /**
         * Floating status of the window
         *
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        FLOATING,
        /**
         * Split screen status of the window
         *
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        SPLIT_SCREEN
    }
    /**
     * Properties of status bar and navigation bar, it couldn't update automatically
     *
     * @interface SystemBarProperties
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     */
    interface SystemBarProperties {
        /**
         * The color of the status bar.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 6
         */
        statusBarColor?: string;
        /**
         * The light icon of the status bar.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        isStatusBarLightIcon?: boolean;
        /**
         * The content color of the status bar
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 8
         */
        statusBarContentColor?: string;
        /**
         * The color of the navigation bar.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 6
         */
        navigationBarColor?: string;
        /**
         * The light icon of the navigation bar.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        isNavigationBarLightIcon?: boolean;
        /**
         * The content color of the navigation bar
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 8
         */
        navigationBarContentColor?: string;
    }
    /**
     * Rectangle
     *
     * @interface Rect
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Rectangle
     *
     * @interface Rect
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Rectangle
     *
     * @interface Rect
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    interface Rect {
        /**
         * The left of the Rect.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        /**
         * The left of the Rect.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * The left of the Rect.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        left: number;
        /**
         * The top of the Rect.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        /**
         * The top of the Rect.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * The top of the Rect.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        top: number;
        /**
         * The width of the Rect.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        /**
         * The width of the Rect.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * The width of the Rect.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        width: number;
        /**
         * The height of the Rect.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        /**
         * The height of the Rect.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * The height of the Rect.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        height: number;
    }
    /**
     * Avoid area
     *
     * @interface AvoidArea
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Avoid area
     *
     * @interface AvoidArea
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11
     */
    interface AvoidArea {
        /**
         * Whether avoidArea is visible on screen
         *
         * @type { boolean }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Whether avoidArea is visible on screen
         *
         * @type { boolean }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @atomicservice
         * @since 11
         */
        visible: boolean;
        /**
         * Rectangle on the left of the screen
         *
         * @type { Rect }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        /**
         * Rectangle on the left of the screen
         *
         * @type { Rect }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @atomicservice
         * @since 11
         */
        leftRect: Rect;
        /**
         * Rectangle on the top of the screen
         *
         * @type { Rect }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        /**
         * Rectangle on the top of the screen
         *
         * @type { Rect }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @atomicservice
         * @since 11
         */
        topRect: Rect;
        /**
         * Rectangle on the right of the screen
         *
         * @type { Rect }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        /**
         * Rectangle on the right of the screen
         *
         * @type { Rect }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @atomicservice
         * @since 11
         */
        rightRect: Rect;
        /**
         * Rectangle on the bottom of the screen
         *
         * @type { Rect }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        /**
         * Rectangle on the bottom of the screen
         *
         * @type { Rect }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @atomicservice
         * @since 11
         */
        bottomRect: Rect;
    }
    /**
     * Window size
     *
     * @interface Size
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    /**
     * Window size
     *
     * @interface Size
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Window size
     *
     * @interface Size
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    interface Size {
        /**
         * The width of the window.
         *
         * @type { number }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        /**
         * The width of the window.
         *
         * @type { number }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * The width of the window.
         *
         * @type { number }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        width: number;
        /**
         * The height of the window.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        /**
         * The height of the window.
         *
         * @type { number }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * The height of the window.
         *
         * @type { number }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        height: number;
    }
    /**
     * Properties of window, it couldn't update automatically
     *
     * @interface WindowProperties
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     */
    /**
     * Properties of window, it couldn't update automatically
     *
     * @interface WindowProperties
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Properties of window, it couldn't update automatically
     *
     * @interface WindowProperties
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    interface WindowProperties {
        /**
         * The position and size of the window
         *
         * @type { Rect }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        /**
         * The position and size of the window
         *
         * @type { Rect }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * The position and size of the window
         *
         * @type { Rect }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        windowRect: Rect;
        /**
         * The position relative to the window and size of drawable area
         *
         * @type { Rect }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 11
         */
        drawableRect: Rect;
        /**
         * Window type
         *
         * @type { WindowType }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        type: WindowType;
        /**
         * Whether the window is displayed in full screen mode. The default value is false.
         *
         * @type { boolean }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 6
         */
        isFullScreen: boolean;
        /**
         * Whether the window layout is in full screen mode(whether the window is immersive). The default value is false.
         *
         * @type { boolean }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        isLayoutFullScreen: boolean;
        /**
         * Whether the window can gain focus. The default value is true
         *
         * @type { boolean }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        focusable: boolean;
        /**
         * Whether the window is touchable. The default value is false
         *
         * @type { boolean }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        touchable: boolean;
        /**
         * Brightness value of window.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 6
         */
        /**
         * Brightness value of window.
         *
         * @type { number }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * Brightness value of window.
         *
         * @type { number }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        brightness: number;
        /**
         * The dimbehind value of window.
         *
         * @type { number }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         */
        dimBehindValue: number;
        /**
         * Whether keep screen on.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 6
         */
        /**
         * Whether keep screen on.
         *
         * @type { boolean }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * Whether keep screen on.
         *
         * @type { boolean }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        isKeepScreenOn: boolean;
        /**
         * Whether make window in privacy mode or not.
         *
         * @type { boolean }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        isPrivacyMode: boolean;
        /**
         * Whether is round corner or not.
         *
         * @type { boolean }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         */
        isRoundCorner: boolean;
        /**
         * Whether is transparent or not.
         *
         * @type { boolean }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        isTransparent: boolean;
        /**
         * Window id.
         *
         * @type { number }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        id: number;
    }
    /**
     * Type of allowing the specified of color space.
     *
     * @enum { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8
     */
    /**
     * Type of allowing the specified of color space.
     *
     * @enum { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 11
     */
    enum ColorSpace {
        /**
         * Default color space.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 8
         */
        /**
         * Default color space.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 11
         */
        DEFAULT,
        /**
         * Wide gamut color space. The specific wide color gamut depends on thr screen.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 8
         */
        /**
         * Wide gamut color space. The specific wide color gamut depends on thr screen.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 11
         */
        WIDE_GAMUT
    }
    /**
     * Configuration parameters for window creation.
     *
     * @interface Configuration
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    interface Configuration {
        /**
         * Indicates window id.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        name: string;
        /**
         * Indicates window type
         *
         * @type { WindowType }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        windowType: WindowType;
        /**
         * Indicates window context.
         *
         * @type { ?BaseContext }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        ctx?: BaseContext;
        /**
         * Indicates display ID.
         *
         * @type { ?number }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        displayId?: number;
        /**
         * Indicates Parent window id
         *
         * @type { ?number }
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        parentId?: number;
    }
    /**
     * Limits of window.
     *
     * @interface WindowLimits
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    interface WindowLimits {
        /**
         * The maximum width of the window.
         *
         * @type { ?number }
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        maxWidth?: number;
        /**
         * The maximum height of the window.
         *
         * @type { ?number }
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        maxHeight?: number;
        /**
         * The minimum width of the window.
         *
         * @type { ?number }
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        minWidth?: number;
        /**
         * The minimum height of the window.
         *
         * @type { ?number }
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        minHeight?: number;
    }
    /**
     * Rectangular area of the title buttons relative to the upper right corner of the window.
     *
     * @interface TitleButtonRect
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    interface TitleButtonRect {
        /**
         * The right of the Rect.
         *
         * @type { number }
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        right: number;
        /**
         * The top of the Rect.
         *
         * @type { number }
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        top: number;
        /**
         * The width of the Rect.
         *
         * @type { number }
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        width: number;
        /**
         * The height of the Rect.
         *
         * @type { number }
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        height: number;
    }
    /**
     * Create a window with a specific configuration
     *
     * @param { Configuration } config - Parameters for window creation.
     * @param { AsyncCallback<Window> } callback - Callback used to return the window created.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 1300001 - Repeated operation.
     * @throws { BusinessError } 1300006 - This window context is abnormal.
     * @throws { BusinessError } 1300008 - The operation is on invalid display.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    function createWindow(config: Configuration, callback: AsyncCallback<Window>): void;
    /**
     * Create a window with a specific configuration
     *
     * @param { Configuration } config - Parameters for window creation.
     * @returns { Promise<Window> } Promise used to return the window created.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 1300001 - Repeated operation.
     * @throws { BusinessError } 1300006 - This window context is abnormal.
     * @throws { BusinessError } 1300008 - The operation is on invalid display.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    function createWindow(config: Configuration): Promise<Window>;
    /**
     * Create a sub window with a specific id and type, only support 7.
     *
     * @param { string } id - Indicates window id.
     * @param { WindowType } type - Indicates window type.
     * @param { AsyncCallback<Window> } callback - Callback used to return the subwindow created.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @FAModelOnly
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window#createWindow
     */
    function create(id: string, type: WindowType, callback: AsyncCallback<Window>): void;
    /**
     * Create a sub window with a specific id and type, only support 7.
     *
     * @param { string } id - Indicates window id.
     * @param { WindowType } type - Indicates window type.
     * @returns { Promise<Window> } Promise used to return the subwindow created.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @FAModelOnly
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window#createWindow
     */
    function create(id: string, type: WindowType): Promise<Window>;
    /**
     * Create a system or float window with a specific id and type.
     *
     * @param { BaseContext } ctx - Indicates the context on which the window depends
     * @param { string } id - Indicates window id.
     * @param { WindowType } type - Indicates window type.
     * @returns { Promise<Window> } Promise used to return the window created.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.window#createWindow
     */
    function create(ctx: BaseContext, id: string, type: WindowType): Promise<Window>;
    /**
     * Create a system or float window with a specific id and type.
     *
     * @param { BaseContext } ctx - Indicates the context on which the window depends
     * @param { string } id - Indicates window id.
     * @param { WindowType } type - Indicates window type.
     * @param { AsyncCallback<Window> } callback - Callback used to return the window created.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.window#createWindow
     */
    function create(ctx: BaseContext, id: string, type: WindowType, callback: AsyncCallback<Window>): void;
    /**
     * Find the window by id.
     *
     * @param { string } id - Indicates window id.
     * @param { AsyncCallback<Window> } callback - Callback used to return the window found.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window#findWindow
     */
    function find(id: string, callback: AsyncCallback<Window>): void;
    /**
     * Find the window by id.
     *
     * @param { string } id - Indicates window id.
     * @returns { Promise<Window> } Window found.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.window#findWindow
     */
    function find(id: string): Promise<Window>;
    /**
     * Find the window by name.
     *
     * @param { string } name - Indicates window name.
     * @returns { Window } Window found.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Find the window by name.
     *
     * @param { string } name - Indicates window name.
     * @returns { Window } Window found.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Find the window by name.
     *
     * @param { string } name - Indicates window name.
     * @returns { Window } Window found.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    function findWindow(name: string): Window;
    /**
     * Get the final show window.
     *
     * @param { AsyncCallback<Window> } callback - Callback used to return the top window obtained.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @FAModelOnly
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.window#getLastWindow
     */
    function getTopWindow(callback: AsyncCallback<Window>): void;
    /**
     * Get the final show window.
     *
     * @returns { Promise<Window> } Promise used to return the top window obtained.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @FAModelOnly
     * @since 6
     * @deprecated since 9
     * @useinstead ohos.window#getLastWindow
     */
    function getTopWindow(): Promise<Window>;
    /**
     * Get the final show window.
     *
     * @param { BaseContext } ctx - Indicates the context on which the window depends
     * @returns { Promise<Window> } Promise used to return the top window obtained.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.window#getLastWindow
     */
    function getTopWindow(ctx: BaseContext): Promise<Window>;
    /**
     * Get the final show window.
     *
     * @param { BaseContext } ctx - Indicates the context on which the window depends
     * @param { AsyncCallback<Window> } callback - Callback used to return the top window obtained.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.window#getLastWindow
     */
    function getTopWindow(ctx: BaseContext, callback: AsyncCallback<Window>): void;
    /**
     * Get the final show window.
     *
     * @param { BaseContext } ctx - Current application context.
     * @param { AsyncCallback<Window> } callback - Callback used to return the top window obtained.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300006 - This window context is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Get the final show window.
     *
     * @param { BaseContext } ctx - Current application context.
     * @param { AsyncCallback<Window> } callback - Callback used to return the top window obtained.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300006 - This window context is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    function getLastWindow(ctx: BaseContext, callback: AsyncCallback<Window>): void;
    /**
     * Get the final show window.
     *
     * @param { BaseContext } ctx - Current application context.
     * @returns { Promise<Window> } Promise used to return the top window obtained.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300006 - This window context is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Get the final show window.
     *
     * @param { BaseContext } ctx - Current application context.
     * @returns { Promise<Window> } Promise used to return the top window obtained.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300006 - This window context is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    function getLastWindow(ctx: BaseContext): Promise<Window>;
    /**
     * Shift window focus within the same application. And the window type contains only main window and subwindow.
     *
     * @param { number } sourceWindowId - Window id which the focus shift from.
     * @param { number } targetWindowId - Window id which the focus shift to.
     * @returns { Promise<void> } - Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    function shiftAppWindowFocus(sourceWindowId: number, targetWindowId: number): Promise<void>;
    /**
     * Display orientation
     *
     * @enum { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Display orientation
     *
     * @enum { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Display orientation
     *
     * @enum { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    enum Orientation {
        /**
         * Default value. The direction mode is not clearly defined. It is determined by the system.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Default value. The direction mode is not clearly defined. It is determined by the system.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        UNSPECIFIED = 0,
        /**
         * Display in portrait orientation.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Display in portrait orientation.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * Display in portrait orientation.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        PORTRAIT = 1,
        /**
         * Display in landscape orientation.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Display in landscape orientation.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        LANDSCAPE = 2,
        /**
         * Display in inverted portrait orientation.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Display in inverted portrait orientation.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        PORTRAIT_INVERTED = 3,
        /**
         * Display in inverted landscape orientation.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Display in inverted landscape orientation.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        LANDSCAPE_INVERTED = 4,
        /**
         * Follow the rotation of the sensor, ignore auto rotation lock.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Follow the rotation of the sensor, ignore auto rotation lock.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @atomicservice
         * @since 11
         */
        AUTO_ROTATION = 5,
        /**
         * Follow the rotation of the sensor, only work in the vertical direction, ignore auto rotation lock.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        AUTO_ROTATION_PORTRAIT = 6,
        /**
         * Follow the rotation of the sensor, only work in the horizontal direction, ignore auto rotation lock.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        AUTO_ROTATION_LANDSCAPE = 7,
        /**
         * Follow the rotation of the sensor, controlled by auto rotation lock.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        AUTO_ROTATION_RESTRICTED = 8,
        /**
         * Follow the rotation of the sensor, only work in the vertical direction, controlled by auto rotation lock.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        AUTO_ROTATION_PORTRAIT_RESTRICTED = 9,
        /**
         * Follow the rotation of the sensor, only work in the horizontal direction, controlled by auto rotation lock.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        AUTO_ROTATION_LANDSCAPE_RESTRICTED = 10,
        /**
         * Locked mode, keep the same direction as previous one.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        LOCKED = 11
    }
    /**
     * Enum for window callback event type
     *
     * @enum { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 10
     */
    /**
     * Enum for window callback event type
     *
     * @enum { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    enum WindowEventType {
        /**
         * The value of window event is window show
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 10
         */
        /**
         * The value of window event is window show
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        WINDOW_SHOWN = 1,
        /**
         * The value of window event is window active
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 10
         */
        /**
         * The value of window event is window active
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        WINDOW_ACTIVE = 2,
        /**
         * The value of window event is window inactive
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 10
         */
        /**
         * The value of window event is window inactive
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        WINDOW_INACTIVE = 3,
        /**
         * The value of window event is window hide
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 10
         */
        /**
         * The value of window event is window hide
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        WINDOW_HIDDEN = 4,
        /**
         * The value of window event is window destroy
         *
         * @syscap SystemCapability.Window.SessionManager
         * @atomicservice
         * @since 11
         */
        WINDOW_DESTROYED = 7
    }
    /**
     * Specific system bar type.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 11
     */
    type SpecificSystemBar = 'status' | 'navigation' | 'navigationIndicator';
    /**
     * Window
     *
     * @interface Window
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     */
    /**
     * Window
     *
     * @interface Window
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    interface Window {
        /**
         * Show window.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#showWindow
         */
        show(callback: AsyncCallback<void>): void;
        /**
         * Show window.
         *
         * @returns { Promise<void> } Promise that returns no value.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#showWindow
         */
        show(): Promise<void>;
        /**
         * Show window.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Show window.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * Show window.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        showWindow(callback: AsyncCallback<void>): void;
        /**
         * Show window.
         *
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Show window.
         *
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * Show window.
         *
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        showWindow(): Promise<void>;
        /**
         * Destroy the window.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#destroyWindow
         */
        destroy(callback: AsyncCallback<void>): void;
        /**
         * Destroy the window.
         *
         * @returns { Promise<void> } Promise that returns no value.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#destroyWindow
         */
        destroy(): Promise<void>;
        /**
         * Destroy the window.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Destroy the window.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * Destroy the window.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        destroyWindow(callback: AsyncCallback<void>): void;
        /**
         * Destroy the window.
         *
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Destroy the window.
         *
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * Destroy the window.
         *
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        destroyWindow(): Promise<void>;
        /**
         * Set the position of a window.
         *
         * @param { number } x - Indicate the X-coordinate of the window.
         * @param { number } y - Indicate the Y-coordinate of the window.
         * @returns { Promise<void> } Promise that returns no value.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#moveWindowTo
         */
        moveTo(x: number, y: number): Promise<void>;
        /**
         * Set the position of a window.
         *
         * @param { number } x - Indicate the X-coordinate of the window.
         * @param { number } y - Indicate the Y-coordinate of the window.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#moveWindowTo
         */
        moveTo(x: number, y: number, callback: AsyncCallback<void>): void;
        /**
         * Set the position of a window.
         *
         * @param { number } x - Indicate the X-coordinate of the window.
         * @param { number } y - Indicate the Y-coordinate of the window.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Set the position of a window.
         *
         * @param { number } x - Indicate the X-coordinate of the window.
         * @param { number } y - Indicate the Y-coordinate of the window.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * Set the position of a window.
         *
         * @param { number } x - Indicate the X-coordinate of the window.
         * @param { number } y - Indicate the Y-coordinate of the window.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        moveWindowTo(x: number, y: number): Promise<void>;
        /**
         * Set the position of a window.
         *
         * @param { number } x - Indicate the X-coordinate of the window.
         * @param { number } y - Indicate the Y-coordinate of the window.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Set the position of a window.
         *
         * @param { number } x - Indicate the X-coordinate of the window.
         * @param { number } y - Indicate the Y-coordinate of the window.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * Set the position of a window.
         *
         * @param { number } x - Indicate the X-coordinate of the window.
         * @param { number } y - Indicate the Y-coordinate of the window.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        moveWindowTo(x: number, y: number, callback: AsyncCallback<void>): void;
        /**
         * Set the size of a window .
         *
         * @param { number } width - Indicates the width of the window.
         * @param { number } height - Indicates the height of the window.
         * @returns { Promise<void> } Promise that returns no value.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#resize
         */
        resetSize(width: number, height: number): Promise<void>;
        /**
         * Set the size of a window .
         *
         * @param { number } width - Indicates the width of the window.
         * @param { number } height - Indicates the height of the window.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#resize
         */
        resetSize(width: number, height: number, callback: AsyncCallback<void>): void;
        /**
         * Set the size of a window .
         *
         * @param { number } width - Indicates the width of the window.
         * @param { number } height - Indicates the height of the window.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Set the size of a window .
         *
         * @param { number } width - Indicates the width of the window.
         * @param { number } height - Indicates the height of the window.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * Set the size of a window .
         *
         * @param { number } width - Indicates the width of the window.
         * @param { number } height - Indicates the height of the window.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        resize(width: number, height: number): Promise<void>;
        /**
         * Set the size of a window .
         *
         * @param { number } width - Indicates the width of the window.
         * @param { number } height - Indicates the height of the window.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Set the size of a window .
         *
         * @param { number } width - Indicates the width of the window.
         * @param { number } height - Indicates the height of the window.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * Set the size of a window .
         *
         * @param { number } width - Indicates the width of the window.
         * @param { number } height - Indicates the height of the window.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        resize(width: number, height: number, callback: AsyncCallback<void>): void;
        /**
         * Get the properties of current window
         *
         * @param { AsyncCallback<WindowProperties> } callback - Callback used to return the window properties.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.window.Window#getWindowProperties
         */
        getProperties(callback: AsyncCallback<WindowProperties>): void;
        /**
         * Get the properties of current window
         *
         * @returns { Promise<WindowProperties> } Promise used to return the window properties.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.window.Window#getWindowProperties
         */
        getProperties(): Promise<WindowProperties>;
        /**
         * Get the properties of current window
         *
         * @returns { WindowProperties } Return the window properties.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Get the properties of current window
         *
         * @returns { WindowProperties } Return the window properties.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * Get the properties of current window
         *
         * @returns { WindowProperties } Return the window properties.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        getWindowProperties(): WindowProperties;
        /**
         * Get the avoid area
         *
         * @param { AvoidAreaType } type - Type of the area
         * @param { AsyncCallback<AvoidArea> } callback - Callback used to return the area.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#getWindowAvoidArea
         */
        getAvoidArea(type: AvoidAreaType, callback: AsyncCallback<AvoidArea>): void;
        /**
         * Get the avoid area
         *
         * @param { AvoidAreaType } type - Type of the area
         * @returns { Promise<AvoidArea> } Area where the window cannot be displayed.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#getWindowAvoidArea
         */
        getAvoidArea(type: AvoidAreaType): Promise<AvoidArea>;
        /**
         * Get the avoid area
         *
         * @param { AvoidAreaType } type - Type of the area
         * @returns { AvoidArea } Area where the window cannot be displayed.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Get the avoid area
         *
         * @param { AvoidAreaType } type - Type of the area
         * @returns { AvoidArea } Area where the window cannot be displayed.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @atomicservice
         * @since 11
         */
        getWindowAvoidArea(type: AvoidAreaType): AvoidArea;
        /**
         * Set the flag of the window is shown full screen
         *
         * @param { boolean } isFullScreen - The flag of the window is shown full screen
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.window.Window#setWindowSystemBarEnable
         */
        setFullScreen(isFullScreen: boolean, callback: AsyncCallback<void>): void;
        /**
         * Set the flag of the window is shown full screen
         *
         * @param { boolean } isFullScreen - The flag of the window is shown full screen
         * @returns { Promise<void> } Promise that returns no value.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.window.Window#setWindowSystemBarEnable
         */
        setFullScreen(isFullScreen: boolean): Promise<void>;
        /**
         * Set the property of the window can layout in full screen
         *
         * @param { boolean } isLayoutFullScreen - The window can layout in full screen
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#setWindowLayoutFullScreen
         */
        setLayoutFullScreen(isLayoutFullScreen: boolean, callback: AsyncCallback<void>): void;
        /**
         * Set the property of the window can layout in full screen
         *
         * @param { boolean } isLayoutFullScreen - The window can layout in full screen
         * @returns { Promise<void> } Promise that returns no value.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#setWindowLayoutFullScreen
         */
        setLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>;
        /**
         * Set the property of the window can layout in full screen
         *
         * @param { boolean } isLayoutFullScreen - The window can layout in full screen
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        setWindowLayoutFullScreen(isLayoutFullScreen: boolean, callback: AsyncCallback<void>): void;
        /**
         * Set the property of the window can layout in full screen
         *
         * @param { boolean } isLayoutFullScreen - The window can layout in full screen
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        setWindowLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>;
        /**
         * Set the system bar to have visible.
         *
         * @param { Array<'status' | 'navigation'> } names - The set of system bar
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#setWindowSystemBarEnable
         */
        setSystemBarEnable(names: Array<'status' | 'navigation'>, callback: AsyncCallback<void>): void;
        /**
         * Set the system bar to have visible.
         *
         * @param { Array<'status' | 'navigation'> } names - The set of system bar
         * @returns { Promise<void> } Promise that returns no value.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#setWindowSystemBarEnable
         */
        setSystemBarEnable(names: Array<'status' | 'navigation'>): Promise<void>;
        /**
         * Set the system bar to have visible.
         *
         * @param { Array<'status' | 'navigation'> } names - The set of system bar
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Set the system bar to have visible.
         *
         * @param { Array<'status' | 'navigation'> } names - The set of system bar
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        setWindowSystemBarEnable(names: Array<'status' | 'navigation'>, callback: AsyncCallback<void>): void;
        /**
         * Set the system bar to have visible.
         *
         * @param { Array<'status' | 'navigation'> } names - The set of system bar
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Set the system bar to have visible.
         *
         * @param { Array<'status' | 'navigation'> } names - The set of system bar
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        setWindowSystemBarEnable(names: Array<'status' | 'navigation'>): Promise<void>;
        /**
         * Set specific system bar to have visible.
         *
         * @param {SpecificSystemBar} name - the set of system bar
         * @param {boolean} enable - Show specific system bar if true, or hide specific system bar if false.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws {BusinessError} 401 - Parameter error.
         * @throws {BusinessError} 1300002 - This window state is abnormal.
         * @throws {BusinessError} 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.Window.SessionManager
         * @atomicservice
         * @since 11
         */
        setSpecificSystemBarEnabled(name: SpecificSystemBar, enable: boolean): Promise<void>;
        /**
         * Set the properties of system bar
         *
         * @param { SystemBarProperties } systemBarProperties - The properties of system bar
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.window.Window#setWindowSystemBarProperties
         */
        setSystemBarProperties(systemBarProperties: SystemBarProperties, callback: AsyncCallback<void>): void;
        /**
         * Set the properties of system bar
         *
         * @param { SystemBarProperties } systemBarProperties - The properties of system bar
         * @returns { Promise<void> } Promise that returns no value.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.window.Window#setWindowSystemBarProperties
         */
        setSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>;
        /**
         * Set the properties of system bar
         *
         * @param { SystemBarProperties } systemBarProperties - The properties of system bar
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        setWindowSystemBarProperties(systemBarProperties: SystemBarProperties, callback: AsyncCallback<void>): void;
        /**
         * Set the properties of system bar
         *
         * @param { SystemBarProperties } systemBarProperties - The properties of system bar
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        setWindowSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>;
        /**
         * Set the preferred orientation config of the window
         *
         * @param { Orientation } orientation - The orientation config of the window
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Set the preferred orientation config of the window
         *
         * @param { Orientation } orientation - The orientation config of the window
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * Set the preferred orientation config of the window
         *
         * @param { Orientation } orientation - The orientation config of the window
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        setPreferredOrientation(orientation: Orientation): Promise<void>;
        /**
         * Set the preferred orientation config of the window
         *
         * @param { Orientation } orientation - The orientation config of the window
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Set the preferred orientation config of the window
         *
         * @param { Orientation } orientation - The orientation config of the window
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * Set the preferred orientation config of the window
         *
         * @param { Orientation } orientation - The orientation config of the window
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        setPreferredOrientation(orientation: Orientation, callback: AsyncCallback<void>): void;
        /**
         * Loads content
         *
         * @param { string } path - Path of the page to which the content will be loaded
         * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @since 9
         */
        /**
         * Loads content
         *
         * @param { string } path - Path of the page to which the content will be loaded
         * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @since 10
         */
        /**
         * Loads content
         *
         * @param { string } path - Path of the page to which the content will be loaded
         * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void;
        /**
         * Loads content
         *
         * @param { string } path - Path of the page to which the content will be loaded
         * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @since 9
         */
        /**
         * Loads content
         *
         * @param { string } path - Path of the page to which the content will be loaded
         * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @since 10
         */
        /**
         * Loads content
         *
         * @param { string } path - Path of the page to which the content will be loaded
         * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        loadContent(path: string, storage: LocalStorage): Promise<void>;
        /**
         * Loads content
         *
         * @param { string } path - Path of the page to which the content will be loaded
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#setUIContent
         */
        loadContent(path: string, callback: AsyncCallback<void>): void;
        /**
         * Loads content
         *
         * @param { string } path - Path of the page to which the content will be loaded
         * @returns { Promise<void> } Promise that returns no value.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#setUIContent
         */
        loadContent(path: string): Promise<void>;
        /**
         * Get the UIContext associate with the window content.
         *
         * @returns { UIContext } the object of UIContext.
         * @throws { BusinessError } 401 - If param is invalid
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @stagemodelonly
         * @crossplatform
         * @since 10
         */
        /**
         * Get the UIContext associate with the window content.
         *
         * @returns { UIContext } the object of UIContext.
         * @throws { BusinessError } 401 - If param is invalid
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        getUIContext(): UIContext;
        /**
         * Loads content
         *
         * @param { string } path - Path of the page to which the content will be loaded
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Loads content
         *
         * @param { string } path - Path of the page to which the content will be loaded
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * Loads content
         *
         * @param { string } path - Path of the page to which the content will be loaded
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        setUIContent(path: string, callback: AsyncCallback<void>): void;
        /**
         * Loads content
         *
         * @param { string } path - Path of the page to which the content will be loaded
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Loads content
         *
         * @param { string } path - Path of the page to which the content will be loaded
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * Loads content
         *
         * @param { string } path - Path of the page to which the content will be loaded
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        setUIContent(path: string): Promise<void>;
        /**
         * Loads content by named router
         *
         * @param { string } name - name of the page to which the content will be loaded.
         * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        loadContentByName(name: string, storage: LocalStorage, callback: AsyncCallback<void>): void;
        /**
         * Loads content by named router
         *
         * @param { string } name - name of the page to which the content will be loaded.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        loadContentByName(name: string, callback: AsyncCallback<void>): void;
        /**
         * Loads content by named router
         *
         * @param { string } name - name of the page to which the content will be loaded.
         * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        loadContentByName(name: string, storage?: LocalStorage): Promise<void>;
        /**
         * Checks whether the window is displayed
         *
         * @param { AsyncCallback<boolean> } callback - Callback used to return the result.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#isWindowShowing
         */
        isShowing(callback: AsyncCallback<boolean>): void;
        /**
         * Checks whether the window is displayed
         *
         * @returns { Promise<boolean> } Whether the window is displayed. The value true means that the window is displayed, and false means the opposite.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#isWindowShowing
         */
        isShowing(): Promise<boolean>;
        /**
         * Checks whether the window is displayed
         *
         * @returns { boolean } Whether the window is displayed. The value true means that the window is displayed, and false means the opposite.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Checks whether the window is displayed
         *
         * @returns { boolean } Whether the window is displayed. The value true means that the window is displayed, and false means the opposite.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * Checks whether the window is displayed
         *
         * @returns { boolean } Whether the window is displayed. The value true means that the window is displayed, and false means the opposite.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        isWindowShowing(): boolean;
        /**
         * Register the callback of windowSizeChange
         *
         * @param { 'windowSizeChange' } type - The value is fixed at 'windowSizeChange', indicating the window size change event.
         * @param { Callback<Size> } callback - Callback used to return the window size.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        /**
         * Register the callback of windowSizeChange
         *
         * @param { 'windowSizeChange' } type - The value is fixed at 'windowSizeChange', indicating the window size change event.
         * @param { Callback<Size> } callback - Callback used to return the window size.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @atomicservice
         * @since 11
         */
        on(type: 'windowSizeChange', callback: Callback<Size>): void;
        /**
         * Unregister the callback of windowSizeChange
         *
         * @param { 'windowSizeChange' } type - The value is fixed at 'windowSizeChange', indicating the window size change event.
         * @param { Callback<Size> } callback - Callback used to return the window size.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        /**
         * Unregister the callback of windowSizeChange
         *
         * @param { 'windowSizeChange' } type - The value is fixed at 'windowSizeChange', indicating the window size change event.
         * @param { Callback<Size> } callback - Callback used to return the window size.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @atomicservice
         * @since 11
         */
        off(type: 'windowSizeChange', callback?: Callback<Size>): void;
        /**
         * Register the callback of systemAvoidAreaChange
         *
         * @param { 'systemAvoidAreaChange' } type - The value is fixed at 'systemAvoidAreaChange', indicating the event of changes to the avoid area.
         * @param { Callback<AvoidArea> } callback - Callback used to return the area.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#on_avoidAreaChange
         */
        on(type: 'systemAvoidAreaChange', callback: Callback<AvoidArea>): void;
        /**
         * Unregister the callback of systemAvoidAreaChange
         *
         * @param { 'systemAvoidAreaChange' } type - The value is fixed at 'systemAvoidAreaChange', indicating the event of changes to the avoid area.
         * @param { Callback<AvoidArea> } callback - Callback used to return the area.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#off_avoidAreaChange
         */
        off(type: 'systemAvoidAreaChange', callback?: Callback<AvoidArea>): void;
        /**
         * Register the callback of avoidAreaChange
         *
         * @param { 'avoidAreaChange' } type - The value is fixed at 'avoidAreaChange', indicating the event of changes to the avoid area.
         * @param { Callback<{ type: AvoidAreaType, area: AvoidArea }> } callback - Callback used to return the area.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Register the callback of avoidAreaChange
         *
         * @param { 'avoidAreaChange' } type - The value is fixed at 'avoidAreaChange', indicating the event of changes to the avoid area.
         * @param { Callback<{ type: AvoidAreaType, area: AvoidArea }> } callback - Callback used to return the area.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @atomicservice
         * @since 11
         */
        on(type: 'avoidAreaChange', callback: Callback<{
            type: AvoidAreaType;
            area: AvoidArea;
        }>): void;
        /**
         * Unregister the callback of avoidAreaChange
         *
         * @param { 'avoidAreaChange' } type - The value is fixed at 'avoidAreaChange', indicating the event of changes to the avoid area.
         * @param { Callback<{ type: AvoidAreaType, area: AvoidArea }> } callback - Callback used to return the area.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Unregister the callback of avoidAreaChange
         *
         * @param { 'avoidAreaChange' } type - The value is fixed at 'avoidAreaChange', indicating the event of changes to the avoid area.
         * @param { Callback<{ type: AvoidAreaType, area: AvoidArea }> } callback - Callback used to return the area.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @atomicservice
         * @since 11
         */
        off(type: 'avoidAreaChange', callback?: Callback<{
            type: AvoidAreaType;
            area: AvoidArea;
        }>): void;
        /**
         * Register the callback of keyboardHeightChange
         *
         * @param { 'keyboardHeightChange' } type - The value is fixed at 'keyboardHeightChange', indicating the keyboard height change event.
         * @param { Callback<number> } callback - Callback used to return the current keyboard height.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        on(type: 'keyboardHeightChange', callback: Callback<number>): void;
        /**
         * Unregister the callback of keyboardHeightChange
         *
         * @param { 'keyboardHeightChange' } type - The value is fixed at 'keyboardHeightChange', indicating the keyboard height change event.
         * @param { Callback<number> } callback - Callback used to return the current keyboard height.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         */
        off(type: 'keyboardHeightChange', callback?: Callback<number>): void;
        /**
         * Touch outside callback on.
         *
         * @param { 'touchOutside' } type - The value is fixed at 'touchOutside', indicating the click event outside this window.
         * @param { Callback<void> } callback - Callback used to return the click event outside this window.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @atomicservice
         * @since 11
         */
        on(type: 'touchOutside', callback: Callback<void>): void;
        /**
         * Touch outside callback off.
         *
         * @param { 'touchOutside' } type - The value is fixed at 'touchOutside', indicating the click event outside this window.
         * @param { Callback<void> } callback - Callback used to return the click event outside this window.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @atomicservice
         * @since 11
         */
        off(type: 'touchOutside', callback?: Callback<void>): void;
        /**
         * Window visibility change callback on.
         *
         * @param { 'windowVisibilityChange' } type - The value is fixed at 'windowVisibilityChange', indicating the window visibility change.
         * @param { Callback<boolean> } callback - Callback used to notify the window visibility change.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 801 - Capability not supported on this device.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        on(type: 'windowVisibilityChange', callback: Callback<boolean>): void;
        /**
         * Window visibility change callback off.
         *
         * @param { 'windowVisibilityChange' } type - The value is fixed at 'windowVisibilityChange', indicating the window visibility change.
         * @param { Callback<boolean> } callback - Callback used to notify the window visibility change.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 801 - Capability not supported on this device.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        off(type: 'windowVisibilityChange', callback?: Callback<boolean>): void;
        /**
         * Register the callback of screenshot, only the focused window called back
         *
         * @param { 'screenshot' } type - The value is fixed at 'screenshot', indicating the screenshot event.
         * @param { Callback<void> } callback - Callback invoked when a screenshot event occurs.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        on(type: 'screenshot', callback: Callback<void>): void;
        /**
         * Unregister the callback of screenshot
         *
         * @param { 'screenshot' } type - The value is fixed at 'screenshot', indicating the screenshot event.
         * @param { Callback<void> } callback - Callback invoked when a screenshot event occurs.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        off(type: 'screenshot', callback?: Callback<void>): void;
        /**
         * Register the callback of dialogTargetTouch
         *
         * @param { 'dialogTargetTouch' } type - The value is fixed at 'dialogTargetTouch', indicating the click event of the target window in the modal window mode.
         * @param { Callback<void> } callback - Callback invoked when the click event occurs in the target window of the modal window mode.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 10
         */
        on(type: 'dialogTargetTouch', callback: Callback<void>): void;
        /**
         * Unregister the callback of dialogTargetTouch
         *
         * @param { 'dialogTargetTouch' } type - The value is fixed at 'dialogTargetTouch',
         *  indicating the click event of the target window in the modal window mode.
         * @param { Callback<void> } callback - Callback invoked when the click event occurs in the target window of the modal window mode.
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 10
         */
        off(type: 'dialogTargetTouch', callback?: Callback<void>): void;
        /**
         * Register the callback of windowEvent
         *
         * @param { 'windowEvent' } type - The value is fixed at 'windowEvent', indicating the window lifecycle change event.
         * @param { Callback<WindowEventType> } callback - the callback of window event
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 10
         */
        /**
         * Register the callback of windowEvent
         *
         * @param { 'windowEvent' } type - The value is fixed at 'windowEvent', indicating the window lifecycle change event.
         * @param { Callback<WindowEventType> } callback - the callback of window event
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        on(type: 'windowEvent', callback: Callback<WindowEventType>): void;
        /**
         * Unregister the callback of windowEvent
         *
         * @param { 'windowEvent' } type - The value is fixed at 'windowEvent', indicating the window lifecycle change event.
         * @param { Callback<WindowEventType> } callback - the callback of window event
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 10
         */
        /**
         * Unregister the callback of windowEvent
         *
         * @param { 'windowEvent' } type - The value is fixed at 'windowEvent', indicating the window lifecycle change event.
         * @param { Callback<WindowEventType> } callback - the callback of window event
         * @throws { BusinessError } 401 - Parameter error.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        off(type: 'windowEvent', callback?: Callback<WindowEventType>): void;
        /**
         * Register the callback of windowStatusChange
         *
         * @param { 'windowStatusChange' } type - The value is fixed at 'windowStatusChange', indicating the window status change event.
         * @param { Callback<WindowStatusType> } callback - Callback used to return the window status.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 801 - Capability not supported on this device.
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        on(type: 'windowStatusChange', callback: Callback<WindowStatusType>): void;
        /**
         * Unregister the callback of windowStatusChange
         *
         * @param { 'windowStatusChange' } type - The value is fixed at 'windowStatusChange', indicating the window status change event.
         * @param { Callback<WindowStatusType> } callback - Callback used to return the window status.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 801 - Capability not supported on this device.
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        off(type: 'windowStatusChange', callback?: Callback<WindowStatusType>): void;
        /**
         * Whether the window supports thr wide gamut setting.
         *
         * @returns { Promise<boolean> } Promise used to return the result. The value true means that the wide-gamut color space is supported, and false means the opposite.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.window.Window#isWindowSupportWideGamut
         */
        isSupportWideGamut(): Promise<boolean>;
        /**
         * Whether the window supports thr wide gamut setting.
         *
         * @param { AsyncCallback<boolean> } callback Callback used to return the result.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.window.Window#isWindowSupportWideGamut
         */
        isSupportWideGamut(callback: AsyncCallback<boolean>): void;
        /**
         * Whether the window supports thr wide gamut setting.
         *
         * @returns { Promise<boolean> } Promise used to return the result.
         *  The value true means that the wide-gamut color space is supported, and false means the opposite.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        isWindowSupportWideGamut(): Promise<boolean>;
        /**
         * Whether the window supports thr wide gamut setting.
         *
         * @param { AsyncCallback<boolean> } callback Callback used to return the result.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        isWindowSupportWideGamut(callback: AsyncCallback<boolean>): void;
        /**
         * Sets the specified color space.
         *
         * @param { ColorSpace } colorSpace the specified color space.
         * @returns { Promise<void> } Promise that returns no value.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.window.Window#setWindowColorSpace
         */
        setColorSpace(colorSpace: ColorSpace): Promise<void>;
        /**
         * Sets the specified color space.
         *
         * @param { ColorSpace } colorSpace the specified color space.
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.window.Window#setWindowColorSpace
         */
        setColorSpace(colorSpace: ColorSpace, callback: AsyncCallback<void>): void;
        /**
         * Sets the specified color space.
         *
         * @param { ColorSpace } colorSpace the specified color space.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Sets the specified color space.
         *
         * @param { ColorSpace } colorSpace the specified color space.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 11
         */
        setWindowColorSpace(colorSpace: ColorSpace): Promise<void>;
        /**
         * Sets the specified color space.
         *
         * @param { ColorSpace } colorSpace the specified color space.
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Sets the specified color space.
         *
         * @param { ColorSpace } colorSpace the specified color space.
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 11
         */
        setWindowColorSpace(colorSpace: ColorSpace, callback: AsyncCallback<void>): void;
        /**
         * Obtains the set color space.
         *
         * @returns { Promise<ColorSpace> } Promise used to return the current color space.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.window.Window#getWindowColorSpace
         */
        getColorSpace(): Promise<ColorSpace>;
        /**
         * Obtains the set color space.
         *
         * @param { AsyncCallback<ColorSpace> } callback Callback used to return the result.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.window.Window#getWindowColorSpace
         */
        getColorSpace(callback: AsyncCallback<ColorSpace>): void;
        /**
         * Obtains the set color space.
         *
         * @returns { ColorSpace } Color space obtained.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Obtains the set color space.
         *
         * @returns { ColorSpace } Color space obtained.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 11
         */
        getWindowColorSpace(): ColorSpace;
        /**
         * Sets the background color of window.
         *
         * @param { string } color the specified color.
         * @returns { Promise<void> } Promise that returns no value.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.window.Window#setWindowBackgroundColor
         */
        setBackgroundColor(color: string): Promise<void>;
        /**
         * Sets the background color of window.
         *
         * @param { string } color the specified color.
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.window.Window#setWindowBackgroundColor
         */
        setBackgroundColor(color: string, callback: AsyncCallback<void>): void;
        /**
         * Sets the background color of window.
         *
         * @param { string } color the specified color.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Sets the background color of window.
         *
         * @param { string } color the specified color.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * Sets the background color of window.
         *
         * @param { string } color the specified color.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        setWindowBackgroundColor(color: string): void;
        /**
         * Sets the brightness of window.
         *
         * @param { number } brightness the specified brightness value.
         * @returns { Promise<void> } Promise that returns no value.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.window.Window#setWindowBrightness
         */
        setBrightness(brightness: number): Promise<void>;
        /**
         * Sets the brightness of window.
         *
         * @param { number } brightness the specified brightness value.
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.window.Window#setWindowBrightness
         */
        setBrightness(brightness: number, callback: AsyncCallback<void>): void;
        /**
         * Sets the brightness of window.
         *
         * @param { number } brightness the specified brightness value.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Sets the brightness of window.
         *
         * @param { number } brightness the specified brightness value.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * Sets the brightness of window.
         *
         * @param { number } brightness the specified brightness value.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        setWindowBrightness(brightness: number): Promise<void>;
        /**
         * Sets the brightness of window.
         *
         * @param { number } brightness the specified brightness value.
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Sets the brightness of window.
         *
         * @param { number } brightness the specified brightness value.
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * Sets the brightness of window.
         *
         * @param { number } brightness the specified brightness value.
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        setWindowBrightness(brightness: number, callback: AsyncCallback<void>): void;
        /**
         * Sets the dimBehind of window.
         *
         * @param { number } dimBehindValue - The specified dimBehind.
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         */
        setDimBehind(dimBehindValue: number, callback: AsyncCallback<void>): void;
        /**
         * Sets the dimBehind of window.
         *
         * @param { number } dimBehindValue - The specified dimBehind.
         * @returns { Promise<void> } Promise that returns no value.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         */
        setDimBehind(dimBehindValue: number): Promise<void>;
        /**
         * Sets whether focusable or not.
         *
         * @param { boolean } isFocusable can be focus if true, or can not be focus if false.
         * @returns { Promise<void> } Promise that returns no value.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#setWindowFocusable
         */
        setFocusable(isFocusable: boolean): Promise<void>;
        /**
         * Sets whether focusable or not.
         *
         * @param { boolean } isFocusable can be focus if true, or can not be focus if false.
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#setWindowFocusable
         */
        setFocusable(isFocusable: boolean, callback: AsyncCallback<void>): void;
        /**
         * Sets whether focusable or not.
         *
         * @param { boolean } isFocusable can be focus if true, or can not be focus if false.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        setWindowFocusable(isFocusable: boolean): Promise<void>;
        /**
         * Sets whether focusable or not.
         *
         * @param { boolean } isFocusable can be focus if true, or can not be focus if false.
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>): void;
        /**
         * Sets whether keep screen on or not.
         *
         * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
         * @returns { Promise<void> } that returns no value.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.window.Window#setWindowKeepScreenOn
         */
        setKeepScreenOn(isKeepScreenOn: boolean): Promise<void>;
        /**
         * Sets whether keep screen on or not.
         *
         * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 6
         * @deprecated since 9
         * @useinstead ohos.window.Window#setWindowKeepScreenOn
         */
        setKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>): void;
        /**
         * Sets whether keep screen on or not.
         *
         * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Sets whether keep screen on or not.
         *
         * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * Sets whether keep screen on or not.
         *
         * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        setWindowKeepScreenOn(isKeepScreenOn: boolean): Promise<void>;
        /**
         * Sets whether keep screen on or not.
         *
         * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        /**
         * Sets whether keep screen on or not.
         *
         * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @since 10
         */
        /**
         * Sets whether keep screen on or not.
         *
         * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        setWindowKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>): void;
        /**
         * Sets whether outside can be touch or not.
         *
         * @param { boolean } touchable outside can be touch if true, or not if false.
         * @returns { Promise<void> } Promise that returns no value.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         */
        setOutsideTouchable(touchable: boolean): Promise<void>;
        /**
         * Sets whether outside can be touch or not.
         *
         * @param { boolean } touchable outside can be touch if true, or not if false.
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         */
        setOutsideTouchable(touchable: boolean, callback: AsyncCallback<void>): void;
        /**
         * Sets whether is private mode or not.
         *
         * @param { boolean } isPrivacyMode in private mode if true, or not if false.
         * @returns { Promise<void> } Promise that returns no value.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#setWindowPrivacyMode
         */
        setPrivacyMode(isPrivacyMode: boolean): Promise<void>;
        /**
         * Sets whether is private mode or not.
         *
         * @param { boolean } isPrivacyMode in private mode if true, or not if false.
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#setWindowPrivacyMode
         */
        setPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void;
        /**
         * Sets whether is private mode or not.
         *
         * @permission ohos.permission.PRIVACY_WINDOW
         * @param { boolean } isPrivacyMode in private mode if true, or not if false.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 201 - Permission verification failed.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        setWindowPrivacyMode(isPrivacyMode: boolean): Promise<void>;
        /**
         * Sets whether is private mode or not.
         *
         * @permission ohos.permission.PRIVACY_WINDOW
         * @param { boolean } isPrivacyMode in private mode if true, or not if false.
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @throws { BusinessError } 201 - Permission verification failed.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void;
        /**
         * Sets whether is touchable or not.
         *
         * @param { boolean } isTouchable is touchable if true, or not if false.
         * @returns { Promise<void> } Promise that returns no value.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#setWindowTouchable
         */
        setTouchable(isTouchable: boolean): Promise<void>;
        /**
         * Sets whether is touchable or not.
         *
         * @param { boolean } isTouchable is touchable if true, or not if false.
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.window.Window#setWindowTouchable
         */
        setTouchable(isTouchable: boolean, callback: AsyncCallback<void>): void;
        /**
         * Sets whether is touchable or not.
         *
         * @param { boolean } isTouchable is touchable if true, or not if false.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        setWindowTouchable(isTouchable: boolean): Promise<void>;
        /**
         * Sets whether is touchable or not.
         *
         * @param { boolean } isTouchable is touchable if true, or not if false.
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        setWindowTouchable(isTouchable: boolean, callback: AsyncCallback<void>): void;
        /**
         * Obtains snapshot of window
         *
         * @param { AsyncCallback<image.PixelMap> } callback Callback used to return the result.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        snapshot(callback: AsyncCallback<image.PixelMap>): void;
        /**
         * Obtains snapshot of window
         *
         * @returns { Promise<image.PixelMap> } Promise that returns no value.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 9
         */
        snapshot(): Promise<image.PixelMap>;
        /**
         * Sets the aspect ratio of window
         *
         * @param { number } ratio - The aspect ratio of window except decoration
         * @param { AsyncCallback<void> } callback - The callback of setAspectRatio.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300004 - Unauthorized operation.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 10
         */
        setAspectRatio(ratio: number, callback: AsyncCallback<void>): void;
        /**
         * Sets the aspect ratio of window
         *
         * @param { number } ratio - The aspect ratio of window except decoration
         * @returns { Promise<void> } - The promise returned by the function.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300004 - Unauthorized operation.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 10
         */
        setAspectRatio(ratio: number): Promise<void>;
        /**
         * Resets the aspect ratio of window
         *
         * @param { AsyncCallback<void> } callback - The callback of setAspectRatio.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300004 - Unauthorized operation.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 10
         */
        resetAspectRatio(callback: AsyncCallback<void>): void;
        /**
         * Resets the aspect ratio of window
         *
         * @returns { Promise<void> } - The promise returned by the function.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300004 - Unauthorized operation.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @since 10
         */
        resetAspectRatio(): Promise<void>;
        /**
         * Minimize app main window and hide app subWindow.
         *
         * @param { AsyncCallback<void> } callback - The callback of Minimize.
         * @throws { BusinessError } 801 - Capability not supported on this device.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        minimize(callback: AsyncCallback<void>): void;
        /**
         * Minimize app main window and hide app subWindow.
         *
         * @returns { Promise<void> } - The promise returned by the function.
         * @throws { BusinessError } 801 - Capability not supported on this device.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        minimize(): Promise<void>;
        /**
         * Get the window limits of current window.
         *
         * @returns { WindowLimits } - The limits of window.
         * @throws { BusinessError } 801 - Capability not supported on this device.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        getWindowLimits(): WindowLimits;
        /**
         * Set the window limits of a window.
         *
         * @param { WindowLimits } windowLimits - window limits of the window.
         * @returns { Promise<WindowLimits> } - Promise is used to return the limits of window.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 801 - Capability not supported on this device.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @throws { BusinessError } 1300004 - Unauthorized operation.
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        setWindowLimits(windowLimits: WindowLimits): Promise<WindowLimits>;
        /**
         * When get focused, keep the keyboard created by other windows, support system window and app subwindow.
         *
         * @param { boolean } keepKeyboardFlag - keep the keyboard if true, otherwise means the opposite.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 801 - Capability not supported on this device.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300004 - Unauthorized operation.
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        keepKeyboardOnFocus(keepKeyboardFlag: boolean): void;
        /**
         * Recover app main window.
         *
         * @returns { Promise<void> } - The promise returned by the function.
         * @throws { BusinessError } 801 - Capability not supported on this device.
         * @throws { BusinessError } 1300001 - Repeated operation.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        recover(): Promise<void>;
        /**
         * Set the visibility of the window decor.
         *
         * @param { boolean } - Enable the decor visible if true, otherwise means the opposite.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 801 - Capability not supported on this device.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300004 - Unauthorized operation.
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        setWindowDecorVisible(isVisible: boolean): void;
        /**
         * Set the height of the window decor.
         *
         * @param { number } - The height of window decor.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 801 - Capability not supported on this device.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        setWindowDecorHeight(height: number): void;
        /**
         * Get the height of the window decor.
         *
         * @returns { number } - The height of window decor.
         * @throws { BusinessError } 801 - Capability not supported on this device.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        getWindowDecorHeight(): number;
        /**
         * Get the area of window title buttons.
         *
         * @returns { TitleButtonRect } - The area of window title buttons.
         * @throws { BusinessError } 801 - Capability not supported on this device.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        getTitleButtonRect(): TitleButtonRect;
        /**
         * Register the callback of title buttons area change.
         *
         * @param { 'windowTitleButtonRectChange' } type - The value is fixed at 'windowTitleButtonRectChange', indicating the title buttons area change event.
         * @param { Callback<TitleButtonRect> } callback - Callback used to return the current title buttons area.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 801 - Capability not supported on this device.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        on(type: 'windowTitleButtonRectChange', callback: Callback<TitleButtonRect>): void;
        /**
         * Unregister the callback of title buttons area change.
         *
         * @param { 'windowTitleButtonRectChange' } type - The value is fixed at 'windowTitleButtonRectChange', indicating the title buttons area change event.
         * @param { Callback<TitleButtonRect> } callback - Callback used to return the current title buttons area.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 801 - Capability not supported on this device.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        off(type: 'windowTitleButtonRectChange', callback?: Callback<TitleButtonRect>): void;
    }
    /**
     * Window stage callback event type
     *
     * @enum { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @since 9
     */
    /**
     * Window stage callback event type
     *
     * @enum { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @since 10
     */
    /**
     * Window stage callback event type
     *
     * @enum { number }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    enum WindowStageEventType {
        /**
         * The window stage is running in the foreground.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @since 9
         */
        /**
         * The window stage is running in the foreground.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @since 10
         */
        /**
         * The window stage is running in the foreground.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        SHOWN = 1,
        /**
         * The window stage gains focus.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @since 9
         */
        /**
         * The window stage gains focus.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @since 10
         */
        /**
         * The window stage gains focus.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        ACTIVE,
        /**
         * The window stage loses focus.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @since 9
         */
        /**
         * The window stage loses focus.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @since 10
         */
        /**
         * The window stage loses focus.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        INACTIVE,
        /**
         * The window stage is running in the background.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @since 9
         */
        /**
         * The window stage is running in the background.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @since 10
         */
        /**
         * The window stage is running in the background.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        HIDDEN,
        /**
         * The window stage is interactive in the foreground.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        RESUMED,
        /**
         * The window stage is not interactive in the foreground.
         *
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        PAUSED
    }
    /**
     * Options for subwindow creation
     *
     * @interface SubWindowOptions
     * @syscap SystemCapability.Window.SessionManager
     * @since 11
     */
    interface SubWindowOptions {
        /**
         * Indicates subwindow title
         *
         * @type { string }
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        title: string;
        /**
         * Indicates decor of subwindow
         *
         * @type { boolean }
         * @syscap SystemCapability.Window.SessionManager
         * @since 11
         */
        decorEnabled: boolean;
    }
    /**
     * WindowStage
     *
     * @interface WindowStage
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * WindowStage
     *
     * @interface WindowStage
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 10
     */
    /**
     * WindowStage
     *
     * @interface WindowStage
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    interface WindowStage {
        /**
         * Get main window of the stage.
         *
         * @returns { Promise<Window> } Callback used to return the subwindow.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @since 9
         */
        /**
         * Get main window of the stage.
         *
         * @returns { Promise<Window> } Callback used to return the subwindow.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @since 10
         */
        /**
         * Get main window of the stage.
         *
         * @returns { Promise<Window> } Callback used to return the subwindow.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        getMainWindow(): Promise<Window>;
        /**
         * Get main window of the stage.
         *
         * @param { AsyncCallback<Window> } callback Callback used to return the main window.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @since 9
         */
        /**
         * Get main window of the stage.
         *
         * @param { AsyncCallback<Window> } callback Callback used to return the main window.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @since 10
         */
        /**
         * Get main window of the stage.
         *
         * @param { AsyncCallback<Window> } callback Callback used to return the main window.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        getMainWindow(callback: AsyncCallback<Window>): void;
        /**
         * Get main window of the stage.
         *
         * @returns { Window }
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @since 9
         */
        /**
         * Get main window of the stage.
         *
         * @returns { Window }
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @since 10
         */
        /**
         * Get main window of the stage.
         *
         * @returns { Window }
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        getMainWindowSync(): Window;
        /**
         * Create sub window of the stage.
         *
         * @param { string } name window name of sub window
         * @returns { Promise<Window> } Promise used to return the subwindow.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @since 9
         */
        /**
         * Create sub window of the stage.
         *
         * @param { string } name window name of sub window
         * @returns { Promise<Window> } Promise used to return the subwindow.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @since 10
         */
        /**
         * Create sub window of the stage.
         *
         * @param { string } name window name of sub window
         * @returns { Promise<Window> } Promise used to return the subwindow.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        createSubWindow(name: string): Promise<Window>;
        /**
         * Create sub window of the stage.
         *
         * @param { string } name window name of sub window
         * @param { AsyncCallback<Window> } callback Callback used to return the subwindow.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @since 9
         */
        /**
         * Create sub window of the stage.
         *
         * @param { string } name window name of sub window
         * @param { AsyncCallback<Window> } callback Callback used to return the subwindow.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @since 10
         */
        /**
         * Create sub window of the stage.
         *
         * @param { string } name window name of sub window
         * @param { AsyncCallback<Window> } callback Callback used to return the subwindow.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        createSubWindow(name: string, callback: AsyncCallback<Window>): void;
        /**
         * Create sub window of the stage.
         *
         * @param { string } name - window name of sub window
         * @param { SubWindowOptions } options - options of sub window creation
         * @returns { Promise<Window> } Promise used to return the subwindow.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 801 - Capability not supported on this device.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.Window.SessionManager
         * @StageModelOnly
         * @since 11
         */
        createSubWindowWithOptions(name: string, options: SubWindowOptions): Promise<Window>;
        /**
         * Get sub window of the stage.
         *
         * @returns { Promise<Array<Window>> }
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @since 9
         */
        /**
         * Get sub window of the stage.
         *
         * @returns { Promise<Array<Window>> }
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @since 10
         */
        /**
         * Get sub window of the stage.
         *
         * @returns { Promise<Array<Window>> }
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        getSubWindow(): Promise<Array<Window>>;
        /**
         * Get sub window of the stage.
         *
         * @param { AsyncCallback<Array<Window>> } callback Callback used to return all the subwindows.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @since 9
         */
        /**
         * Get sub window of the stage.
         *
         * @param { AsyncCallback<Array<Window>> } callback Callback used to return all the subwindows.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @since 10
         */
        /**
         * Get sub window of the stage.
         *
         * @param { AsyncCallback<Array<Window>> } callback Callback used to return all the subwindows.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        getSubWindow(callback: AsyncCallback<Array<Window>>): void;
        /**
         * Loads content
         *
         * @param { string } path Path of the page to which the content will be loaded
         * @param { LocalStorage } storage The data object shared within the content instance loaded by the window
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @since 9
         */
        /**
         * Loads content
         *
         * @param { string } path Path of the page to which the content will be loaded
         * @param { LocalStorage } storage The data object shared within the content instance loaded by the window
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @since 10
         */
        /**
         * Loads content
         *
         * @param { string } path Path of the page to which the content will be loaded
         * @param { LocalStorage } storage The data object shared within the content instance loaded by the window
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void;
        /**
         * Loads content
         *
         * @param { string } path of the page to which the content will be loaded
         * @param { LocalStorage } storage The data object shared within the content instance loaded by the window
         * @returns { Promise<void> }
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @since 9
         */
        /**
         * Loads content
         *
         * @param { string } path of the page to which the content will be loaded
         * @param { LocalStorage } storage The data object shared within the content instance loaded by the window
         * @returns { Promise<void> }
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @since 10
         */
        /**
         * Loads content
         *
         * @param { string } path of the page to which the content will be loaded
         * @param { LocalStorage } storage The data object shared within the content instance loaded by the window
         * @returns { Promise<void> }
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        loadContent(path: string, storage?: LocalStorage): Promise<void>;
        /**
         * Loads content
         *
         * @param { string } path of the page to which the content will be loaded
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @since 9
         */
        /**
         * Loads content
         *
         * @param { string } path of the page to which the content will be loaded
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @since 10
         */
        /**
         * Loads content
         *
         * @param { string } path of the page to which the content will be loaded
         * @param { AsyncCallback<void> } callback Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        loadContent(path: string, callback: AsyncCallback<void>): void;
        /**
         * Loads content by named router
         *
         * @param { string } name - name of the page to which the content will be loaded.
         * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        loadContentByName(name: string, storage: LocalStorage, callback: AsyncCallback<void>): void;
        /**
         * Loads content by named router
         *
         * @param { string } name - name of the page to which the content will be loaded.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        loadContentByName(name: string, callback: AsyncCallback<void>): void;
        /**
         * Loads content by named router
         *
         * @param { string } name - name of the page to which the content will be loaded.
         * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window.
         * @returns { Promise<void> } Promise that returns no value.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300003 - This window manager service works abnormally.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        loadContentByName(name: string, storage?: LocalStorage): Promise<void>;
        /**
         * Window stage event callback on.
         *
         * @param { 'windowStageEvent' } eventType The value is fixed at 'windowStageEvent', indicating the window stage lifecycle change event.
         * @param { Callback<WindowStageEventType> } callback Callback used to return the window stage lifecycle state.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @since 9
         */
        /**
         * Window stage event callback on.
         *
         * @param { 'windowStageEvent' } eventType The value is fixed at 'windowStageEvent', indicating the window stage lifecycle change event.
         * @param { Callback<WindowStageEventType> } callback Callback used to return the window stage lifecycle state.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @since 10
         */
        /**
         * Window stage event callback on.
         *
         * @param { 'windowStageEvent' } eventType The value is fixed at 'windowStageEvent', indicating the window stage lifecycle change event.
         * @param { Callback<WindowStageEventType> } callback Callback used to return the window stage lifecycle state.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        on(eventType: 'windowStageEvent', callback: Callback<WindowStageEventType>): void;
        /**
         * Window stage event callback off.
         *
         * @param { 'windowStageEvent' } eventType The value is fixed at 'windowStageEvent', indicating the window stage lifecycle change event.
         * @param { Callback<WindowStageEventType> } callback Callback used to return the window stage lifecycle state.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @since 9
         */
        /**
         * Window stage event callback off.
         *
         * @param { 'windowStageEvent' } eventType The value is fixed at 'windowStageEvent', indicating the window stage lifecycle change event.
         * @param { Callback<WindowStageEventType> } callback Callback used to return the window stage lifecycle state.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @since 10
         */
        /**
         * Window stage event callback off.
         *
         * @param { 'windowStageEvent' } eventType The value is fixed at 'windowStageEvent', indicating the window stage lifecycle change event.
         * @param { Callback<WindowStageEventType> } callback Callback used to return the window stage lifecycle state.
         * @throws { BusinessError } 401 - Parameter error.
         * @throws { BusinessError } 1300002 - This window state is abnormal.
         * @throws { BusinessError } 1300005 - This window stage is abnormal.
         * @syscap SystemCapability.WindowManager.WindowManager.Core
         * @StageModelOnly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        off(eventType: 'windowStageEvent', callback?: Callback<WindowStageEventType>): void;
    }
}
export default window;