import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GCHeaderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
GCHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'gc-header',
                template: "<div class=\"header\">\r\n  <img class=\"header-bg\" src=\"assets/gc-structure/images/{{ teamId }}/header/header.png\"/>\r\n  <img class=\"brand\" *ngIf=\"teamId !== 'melbourne-renegades'\" src=\"assets/gc-structure/images/teams/logo/{{ teamId }}.png\" />\r\n  <img class=\"brand\" *ngIf=\"teamId === 'melbourne-renegades'\" src=\"assets/gc-structure/images/teams/logo/{{ teamId }}-white.png\" />\r\n  <img class=\"title\" src=\"assets/gc-structure/images/{{ teamId }}/header/{{ headerTitle }}.png\" />\r\n  <img class=\"logo\" src=\"assets/gc-structure/images/logo.png\" />\r\n</div>",
                styles: [".header{position:absolute;top:0;left:0;width:100vw;height:12vh;z-index:300}.header .brand{position:absolute;top:1.2vh;left:4vw;height:5vh;width:auto;max-width:20vw;-o-object-fit:contain;object-fit:contain}.header .header-bg{width:100%;height:100%;z-index:0}.header .logo{height:5vh;width:auto;position:absolute;right:4vw;top:1.2vh}.header .title{position:absolute;left:calc(50% + 2vw);-webkit-transform:translateX(-50%);transform:translateX(-50%);height:5vh;top:1.8vh}"]
            }] }
];
/** @nocollapse */
GCHeaderComponent.ctorParameters = () => [];
GCHeaderComponent.propDecorators = {
    teamId: [{ type: Input }],
    headerTitle: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GCFooterComponent {
    constructor() {
        this.onRoute = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} target_location
     * @param {?=} path
     * @return {?}
     */
    onMenuItemClicked(target_location, path = '') {
        // Default settings
        /** @type {?} */
        let data = {
            type: 'internal',
            path: path
        };
        // If the target location is another app, build an external url to pass back
        if (this.location !== target_location) {
            data.type = 'external';
            /** @type {?} */
            let url = window.location.href
            // Build a different url depending on where app needs to go
            // This block of code is horrible
            ;
            // Build a different url depending on where app needs to go
            // This block of code is horrible
            if (!url.startsWith('https://develop.gamechanger.studio')) {
                switch (target_location) {
                    case 'bbl':
                        data.path = `https://bbl.gamechanger.studio/#/${path}`;
                    case 'team-site':
                        data.path = `https://${this.teamId}.gamechanger.studio/#/`;
                }
            }
            else {
                switch (target_location) {
                    case 'bbl':
                        data.path = `https://develop.gamechanger.studio/big-bash-buddy/#/${path}`;
                    case 'team-site':
                        data.path = `https://develop.gamechanger.studio/${this.teamId}/#/`;
                }
            }
        }
        // Send the path info off to any registered handler
        this.onRoute.emit(data);
    }
}
GCFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'gc-footer',
                template: "<footer>\r\n  <div (click)=\"onMenuItemClicked('bbl', '/team/' + teamId + '/')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 0 }\" >\r\n    <span class=\"fa fa-home\" ></span>\r\n    <span class=\"title\">HOME</span>\r\n  </div>\r\n  <div (click)=\"onMenuItemClicked('bbl', '/team/' + teamId + '/video')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 1 }\" >\r\n    <span class=\"fa fa-play\" ></span>\r\n    <span class=\"title\">PLAY</span>\r\n  </div>\r\n  <div (click)=\"onMenuItemClicked('team-site')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 2 }\" >\r\n    <span class=\"fa fa-gamepad\" ></span>\r\n    <span class=\"title\">GAMES</span>\r\n  </div>\r\n  <div (click)=\"onMenuItemClicked('bbl', '/team/' + teamId + '/profile')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 3 }\" >\r\n    <span class=\"fa fa-user\" ></span>\r\n    <span class=\"title\">PROFILE</span>\r\n  </div>\r\n</footer>",
                styles: ["footer{position:absolute;bottom:0;left:0;display:flex;flex-direction:row;justify-content:space-between;width:100vw;height:10vh;border-top:2px solid #fff;z-index:100}footer .item{color:#fff;width:25vw;position:relative}footer .item *{display:block;text-align:center}footer .item div{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}footer .item .fa{font-size:4vh}footer .item .title{font-family:\"City Medium\";padding-top:5px;font-size:1.8vh;font-weight:400}"]
            }] }
];
/** @nocollapse */
GCFooterComponent.ctorParameters = () => [];
GCFooterComponent.propDecorators = {
    teamId: [{ type: Input }],
    selectedItem: [{ type: Input }],
    location: [{ type: Input }],
    onRoute: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GcStructureModule {
}
GcStructureModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    GCFooterComponent,
                    GCHeaderComponent
                ],
                imports: [
                    BrowserModule
                ],
                exports: [
                    GCFooterComponent,
                    GCHeaderComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { GCHeaderComponent, GCFooterComponent, GcStructureModule };

//# sourceMappingURL=gc-structure.js.map