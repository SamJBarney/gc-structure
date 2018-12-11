(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('gc-structure', ['exports', '@angular/core', '@angular/platform-browser'], factory) :
    (factory((global['gc-structure'] = {}),global.ng.core,global.ng.platformBrowser));
}(this, (function (exports,core,platformBrowser) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GCHeaderComponent = /** @class */ (function () {
        function GCHeaderComponent() {
        }
        /**
         * @return {?}
         */
        GCHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        GCHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gc-header',
                        template: "<header *ngIf=\"teamId\">\n  <img class=\"header-bg\" src=\"assets/gc-structure/images/{{ teamId }}/header/header.png\"/>\n  <img class=\"brand\" *ngIf=\"teamId !== 'melbourne-renegades'\" src=\"assets/gc-structure/images/teams/logo/{{ teamId }}.png\" />\n  <img class=\"brand\" *ngIf=\"teamId === 'melbourne-renegades'\" src=\"assets/gc-structure/images/teams/logo/{{ teamId }}-white.png\" />\n  <img class=\"title\" src=\"assets/gc-structure/images/{{ teamId }}/header/{{ headerTitle }}.png\" />\n  <img class=\"logo\" src=\"assets/gc-structure/images/logo.png\" />\n</header>",
                        styles: [".header{position:absolute;top:0;left:0;width:100vw;height:12vh;z-index:300}.header .brand{position:absolute;top:1.2vh;left:4vw;height:5vh;width:auto;max-width:20vw;-o-object-fit:contain;object-fit:contain}.header .header-bg{width:100%;height:100%;z-index:0}.header .logo{height:5vh;width:auto;position:absolute;right:4vw;top:1.2vh}.header .title{position:absolute;left:calc(50% + 2vw);-webkit-transform:translateX(-50%);transform:translateX(-50%);height:5vh;top:1.8vh}"]
                    }] }
        ];
        /** @nocollapse */
        GCHeaderComponent.ctorParameters = function () { return []; };
        GCHeaderComponent.propDecorators = {
            teamId: [{ type: core.Input }],
            headerTitle: [{ type: core.Input }]
        };
        return GCHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GCFooterComponent = /** @class */ (function () {
        function GCFooterComponent() {
            this.onRoute = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        GCFooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} target_location
         * @param {?=} path
         * @return {?}
         */
        GCFooterComponent.prototype.onMenuItemClicked = /**
         * @param {?} target_location
         * @param {?=} path
         * @return {?}
         */
            function (target_location, path) {
                if (path === void 0) {
                    path = '';
                }
                // Default settings
                /** @type {?} */
                var data = {
                    type: 'internal',
                    path: path
                };
                // If the target location is another app, build an external url to pass back
                if (this.location !== target_location) {
                    data.type = 'external';
                    // Build a different url depending on where app needs to go
                    switch (target_location) {
                        case 'bbl':
                            data.path = "https://bbl.gamechanger.studio/#/%{teamId}/" + path;
                        case 'team-site':
                            data.path = "https://" + this.teamId + ".gamechanger.studio/#/";
                    }
                }
                // Send the path info off to any registered handler
                this.onRoute.emit(data);
            };
        GCFooterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gc-footer',
                        template: "<footer>\n  <div (click)=\"onMenuItemClicked('bbl', '/team/' + teamId + '/')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 0 }\" >\n    <span class=\"fa fa-home\" ></span>\n    <span class=\"title\">HOME</span>\n  </div>\n  <div (click)=\"onMenuItemClicked('bbl', '/team/' + teamId + '/video')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 1 }\" >\n    <span class=\"fa fa-play\" ></span>\n    <span class=\"title\">PLAY</span>\n  </div>\n  <div (click)=\"onMenuItemClicked('team-site')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 2 }\" >\n    <span class=\"fa fa-gamepad\" ></span>\n    <span class=\"title\">GAMES</span>\n  </div>\n  <div (click)=\"onMenuItemClicked('bbl', '/team/' + teamId + '/profile')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 3 }\" >\n    <span class=\"fa fa-user\" ></span>\n    <span class=\"title\">PROFILE</span>\n  </div>\n</footer>",
                        styles: ["footer{position:absolute;bottom:0;left:0;display:flex;flex-direction:row;justify-content:space-between;width:100vw;height:10vh;border-top:2px solid #fff;z-index:100}footer .item{color:#fff;width:25vw;position:relative}footer .item *{display:block;text-align:center}footer .item div{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}footer .item .fa{font-size:4vh}footer .item .title{font-family:\"City Medium\";padding-top:5px;font-size:1.8vh;font-weight:400}"]
                    }] }
        ];
        /** @nocollapse */
        GCFooterComponent.ctorParameters = function () { return []; };
        GCFooterComponent.propDecorators = {
            teamId: [{ type: core.Input }],
            selectedItem: [{ type: core.Input }],
            location: [{ type: core.Input }],
            onRoute: [{ type: core.Output }]
        };
        return GCFooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GcStructureModule = /** @class */ (function () {
        function GcStructureModule() {
        }
        GcStructureModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            GCFooterComponent,
                            GCHeaderComponent
                        ],
                        imports: [
                            platformBrowser.BrowserModule
                        ],
                        exports: [
                            GCFooterComponent,
                            GCHeaderComponent
                        ]
                    },] }
        ];
        return GcStructureModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.GCHeaderComponent = GCHeaderComponent;
    exports.GCFooterComponent = GCFooterComponent;
    exports.GcStructureModule = GcStructureModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=gc-structure.umd.js.map