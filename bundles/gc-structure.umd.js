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
                        template: "<div class=\"header\">\r\n  <img class=\"header-bg\" src=\"assets/gc-structure/images/{{ teamId }}/header/header.png\"/>\r\n  <img class=\"brand\" *ngIf=\"teamId !== 'melbourne-renegades'\" src=\"assets/gc-structure/images/teams/logo/{{ teamId }}.png\" />\r\n  <img class=\"brand\" *ngIf=\"teamId === 'melbourne-renegades'\" src=\"assets/gc-structure/images/teams/logo/{{ teamId }}-white.png\" />\r\n  <img class=\"title\" src=\"assets/gc-structure/images/{{ teamId }}/header/{{ headerTitle }}.png\" />\r\n  <img class=\"logo\" src=\"assets/gc-structure/images/logo.png\" />\r\n</div>",
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
                    console.log(target_location);
                    // Build a different url depending on where app needs to go
                    switch (target_location) {
                        case 'bbl':
                            data.path = this.buildBBLRoute(path);
                        case 'team-site':
                            data.path = this.buildTeamSiteRoute(path);
                    }
                }
                // Send the path info off to any registered handler
                this.onRoute.emit(data);
            };
        /**
         * @private
         * @param {?} path
         * @return {?}
         */
        GCFooterComponent.prototype.buildBBLRoute = /**
         * @private
         * @param {?} path
         * @return {?}
         */
            function (path) {
                if (this.isProdBranch()) {
                    return "https://bbl.gamechanger.studio/#/" + path;
                }
                // Dev branch path
                return "https://develop.gamechanger.studio/big-bash-buddy/#/" + path;
            };
        /**
         * @private
         * @param {?} path
         * @return {?}
         */
        GCFooterComponent.prototype.buildTeamSiteRoute = /**
         * @private
         * @param {?} path
         * @return {?}
         */
            function (path) {
                if (this.isProdBranch()) {
                    return "https://" + this.teamId + ".gamechanger.studio/#/";
                }
                // Dev Branch path
                return "https://develop.gamechanger.studio/" + this.teamId + "/#/";
            };
        /**
         * @private
         * @return {?}
         */
        GCFooterComponent.prototype.isProdBranch = /**
         * @private
         * @return {?}
         */
            function () {
                return !(this.branch.startsWith('develop') || this.branch === 'debug');
            };
        GCFooterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'gc-footer',
                        template: "<footer>\r\n  <div (click)=\"onMenuItemClicked('bbl', '/team/' + teamId + '/')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 0 }\" >\r\n    <div>\r\n      <span class=\"fa fa-home\" ></span>\r\n      <span class=\"title\">HOME</span>\r\n    </div>\r\n  </div>\r\n  <div (click)=\"onMenuItemClicked('bbl', '/team/' + teamId + '/video')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 1 }\" >\r\n    <div>\r\n      <span class=\"fa fa-play\" ></span>\r\n      <span class=\"title\">PLAY</span>\r\n    </div>\r\n  </div>\r\n  <div (click)=\"onMenuItemClicked('team-site')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 2 }\" >\r\n    <div>\r\n      <span class=\"fa fa-gamepad\" ></span>\r\n      <span class=\"title\">GAMES</span>\r\n    </div>\r\n  </div>\r\n  <div (click)=\"onMenuItemClicked('bbl', '/team/' + teamId + '/profile')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 3 }\" >\r\n    <div>\r\n      <span class=\"fa fa-user\" ></span>\r\n      <span class=\"title\">PROFILE</span>\r\n    </div>\r\n  </div>\r\n</footer>",
                        styles: ["footer{position:absolute;bottom:0;left:0;display:flex;flex-direction:row;justify-content:space-between;width:100vw;height:10vh;border-top:2px solid #fff;z-index:100}footer .item{color:#fff;width:25vw;position:relative}footer .item *{display:block;text-align:center}footer .item div{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}footer .item .fa{font-size:4vh}footer .item .title{font-family:\"City Medium\";padding-top:5px;font-size:1.8vh;font-weight:400}"]
                    }] }
        ];
        /** @nocollapse */
        GCFooterComponent.ctorParameters = function () { return []; };
        GCFooterComponent.propDecorators = {
            teamId: [{ type: core.Input }],
            branch: [{ type: core.Input }],
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