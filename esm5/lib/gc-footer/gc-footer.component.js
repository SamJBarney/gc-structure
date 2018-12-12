/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var GCFooterComponent = /** @class */ (function () {
    function GCFooterComponent() {
        this.onRoute = new EventEmitter();
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
        if (path === void 0) { path = ''; }
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
        return !(this.branch.startsWith('develop') || this.branch == 'debug');
    };
    GCFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gc-footer',
                    template: "<footer>\r\n  <div (click)=\"onMenuItemClicked('bbl', '/team/' + teamId + '/')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 0 }\" >\r\n    <div>\r\n      <span class=\"fa fa-home\" ></span>\r\n      <span class=\"title\">HOME</span>\r\n    </div>\r\n  </div>\r\n  <div (click)=\"onMenuItemClicked('bbl', '/team/' + teamId + '/video')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 1 }\" >\r\n    <div>\r\n      <span class=\"fa fa-play\" ></span>\r\n      <span class=\"title\">PLAY</span>\r\n    </div>\r\n  </div>\r\n  <div (click)=\"onMenuItemClicked('team-site')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 2 }\" >\r\n    <div>\r\n      <span class=\"fa fa-gamepad\" ></span>\r\n      <span class=\"title\">GAMES</span>\r\n    </div>\r\n  </div>\r\n  <div (click)=\"onMenuItemClicked('bbl', '/team/' + teamId + '/profile')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 3 }\" >\r\n    <div>\r\n      <span class=\"fa fa-user\" ></span>\r\n      <span class=\"title\">PROFILE</span>\r\n    </div>\r\n  </div>\r\n</footer>",
                    styles: ["footer{position:absolute;bottom:0;left:0;display:flex;flex-direction:row;justify-content:space-between;width:100vw;height:10vh;border-top:2px solid #fff;z-index:100}footer .item{color:#fff;width:25vw;position:relative}footer .item *{display:block;text-align:center}footer .item div{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}footer .item .fa{font-size:4vh}footer .item .title{font-family:\"City Medium\";padding-top:5px;font-size:1.8vh;font-weight:400}"]
                }] }
    ];
    /** @nocollapse */
    GCFooterComponent.ctorParameters = function () { return []; };
    GCFooterComponent.propDecorators = {
        teamId: [{ type: Input }],
        branch: [{ type: Input }],
        selectedItem: [{ type: Input }],
        location: [{ type: Input }],
        onRoute: [{ type: Output }]
    };
    return GCFooterComponent;
}());
export { GCFooterComponent };
if (false) {
    /** @type {?} */
    GCFooterComponent.prototype.teamId;
    /** @type {?} */
    GCFooterComponent.prototype.branch;
    /** @type {?} */
    GCFooterComponent.prototype.selectedItem;
    /** @type {?} */
    GCFooterComponent.prototype.location;
    /** @type {?} */
    GCFooterComponent.prototype.onRoute;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2MtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2djLXN0cnVjdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9nYy1mb290ZXIvZ2MtZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQXFCRTtRQUZBLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQUUvQixDQUFDOzs7O0lBRWpCLG9DQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7OztJQUVELDZDQUFpQjs7Ozs7SUFBakIsVUFBa0IsZUFBdUIsRUFBRSxJQUFpQjtRQUFqQixxQkFBQSxFQUFBLFNBQWlCOzs7WUFFdEQsSUFBSSxHQUFHO1lBQ1QsSUFBSSxFQUFFLFVBQVU7WUFDaEIsSUFBSSxFQUFFLElBQUk7U0FDWDtRQUVELDRFQUE0RTtRQUM1RSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssZUFBZSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1lBRXZCLDJEQUEyRDtZQUMzRCxRQUFPLGVBQWUsRUFBRTtnQkFDdEIsS0FBSyxLQUFLO29CQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkMsS0FBSyxXQUFXO29CQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzdDO1NBQ0Y7UUFFRCxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBRU8seUNBQWE7Ozs7O0lBQXJCLFVBQXNCLElBQVk7UUFDaEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDdkIsT0FBTyxzQ0FBb0MsSUFBTSxDQUFDO1NBQ25EO1FBRUQsa0JBQWtCO1FBQ2xCLE9BQU8seURBQXVELElBQU0sQ0FBQztJQUN2RSxDQUFDOzs7Ozs7SUFFTyw4Q0FBa0I7Ozs7O0lBQTFCLFVBQTJCLElBQVk7UUFDckMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDdkIsT0FBTyxhQUFXLElBQUksQ0FBQyxNQUFNLDJCQUF3QixDQUFDO1NBQ3ZEO1FBRUQsa0JBQWtCO1FBQ2xCLE9BQU8sd0NBQXNDLElBQUksQ0FBQyxNQUFNLFFBQUssQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVPLHdDQUFZOzs7O0lBQXBCO1FBQ0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQztJQUN4RSxDQUFDOztnQkF0RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixxakNBQXlDOztpQkFFMUM7Ozs7O3lCQUVFLEtBQUs7eUJBR0wsS0FBSzsrQkFHTCxLQUFLOzJCQUdMLEtBQUs7MEJBR0wsTUFBTTs7SUFxRFQsd0JBQUM7Q0FBQSxBQXZFRCxJQXVFQztTQWxFWSxpQkFBaUI7OztJQUM1QixtQ0FDYzs7SUFFZCxtQ0FDYzs7SUFFZCx5Q0FDb0I7O0lBRXBCLHFDQUNnQjs7SUFFaEIsb0NBQytDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnYy1mb290ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nYy1mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2djLWZvb3Rlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHQ0Zvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICB0ZWFtSWQ6IHN0cmluZ1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGJyYW5jaDogc3RyaW5nXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2VsZWN0ZWRJdGVtOiBudW1iZXJcclxuXHJcbiAgQElucHV0KClcclxuICBsb2NhdGlvbjogc3RyaW5nXHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG9uUm91dGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgb25NZW51SXRlbUNsaWNrZWQodGFyZ2V0X2xvY2F0aW9uOiBzdHJpbmcsIHBhdGg6IHN0cmluZyA9ICcnKSA6IHZvaWQge1xyXG4gICAgLy8gRGVmYXVsdCBzZXR0aW5nc1xyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIHR5cGU6ICdpbnRlcm5hbCcsXHJcbiAgICAgIHBhdGg6IHBhdGhcclxuICAgIH07XHJcblxyXG4gICAgLy8gSWYgdGhlIHRhcmdldCBsb2NhdGlvbiBpcyBhbm90aGVyIGFwcCwgYnVpbGQgYW4gZXh0ZXJuYWwgdXJsIHRvIHBhc3MgYmFja1xyXG4gICAgaWYgKHRoaXMubG9jYXRpb24gIT09IHRhcmdldF9sb2NhdGlvbikge1xyXG4gICAgICBkYXRhLnR5cGUgPSAnZXh0ZXJuYWwnO1xyXG5cclxuICAgICAgLy8gQnVpbGQgYSBkaWZmZXJlbnQgdXJsIGRlcGVuZGluZyBvbiB3aGVyZSBhcHAgbmVlZHMgdG8gZ29cclxuICAgICAgc3dpdGNoKHRhcmdldF9sb2NhdGlvbikge1xyXG4gICAgICAgIGNhc2UgJ2JibCc6XHJcbiAgICAgICAgICBkYXRhLnBhdGggPSB0aGlzLmJ1aWxkQkJMUm91dGUocGF0aCk7XHJcbiAgICAgICAgY2FzZSAndGVhbS1zaXRlJzpcclxuICAgICAgICAgIGRhdGEucGF0aCA9IHRoaXMuYnVpbGRUZWFtU2l0ZVJvdXRlKHBhdGgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2VuZCB0aGUgcGF0aCBpbmZvIG9mZiB0byBhbnkgcmVnaXN0ZXJlZCBoYW5kbGVyXHJcbiAgICB0aGlzLm9uUm91dGUuZW1pdChkYXRhKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYnVpbGRCQkxSb3V0ZShwYXRoOiBzdHJpbmcpIDogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmlzUHJvZEJyYW5jaCgpKSB7XHJcbiAgICAgIHJldHVybiBgaHR0cHM6Ly9iYmwuZ2FtZWNoYW5nZXIuc3R1ZGlvLyMvJHtwYXRofWA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGV2IGJyYW5jaCBwYXRoXHJcbiAgICByZXR1cm4gYGh0dHBzOi8vZGV2ZWxvcC5nYW1lY2hhbmdlci5zdHVkaW8vYmlnLWJhc2gtYnVkZHkvIy8ke3BhdGh9YDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYnVpbGRUZWFtU2l0ZVJvdXRlKHBhdGg6IHN0cmluZykgOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuaXNQcm9kQnJhbmNoKCkpIHtcclxuICAgICAgcmV0dXJuIGBodHRwczovLyR7dGhpcy50ZWFtSWR9LmdhbWVjaGFuZ2VyLnN0dWRpby8jL2A7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGV2IEJyYW5jaCBwYXRoXHJcbiAgICByZXR1cm4gYGh0dHBzOi8vZGV2ZWxvcC5nYW1lY2hhbmdlci5zdHVkaW8vJHt0aGlzLnRlYW1JZH0vIy9gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1Byb2RCcmFuY2goKSA6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEodGhpcy5icmFuY2guc3RhcnRzV2l0aCgnZGV2ZWxvcCcpIHx8IHRoaXMuYnJhbmNoID09ICdkZWJ1ZycpO1xyXG4gIH1cclxufVxyXG4iXX0=