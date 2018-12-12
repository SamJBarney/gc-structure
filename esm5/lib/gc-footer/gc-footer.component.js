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
        console.log(typeof this.branch, this.branch);
        return !(this.branch.startsWith('develop') || this.branch === 'debug');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2MtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2djLXN0cnVjdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9nYy1mb290ZXIvZ2MtZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQXFCRTtRQUZBLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQUUvQixDQUFDOzs7O0lBRWpCLG9DQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7OztJQUVELDZDQUFpQjs7Ozs7SUFBakIsVUFBa0IsZUFBdUIsRUFBRSxJQUFpQjtRQUFqQixxQkFBQSxFQUFBLFNBQWlCOzs7WUFFdEQsSUFBSSxHQUFHO1lBQ1QsSUFBSSxFQUFFLFVBQVU7WUFDaEIsSUFBSSxFQUFFLElBQUk7U0FDWDtRQUVELDRFQUE0RTtRQUM1RSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssZUFBZSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1lBRXZCLDJEQUEyRDtZQUMzRCxRQUFPLGVBQWUsRUFBRTtnQkFDdEIsS0FBSyxLQUFLO29CQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkMsS0FBSyxXQUFXO29CQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzdDO1NBQ0Y7UUFFRCxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBRU8seUNBQWE7Ozs7O0lBQXJCLFVBQXNCLElBQVk7UUFDaEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDdkIsT0FBTyxzQ0FBb0MsSUFBTSxDQUFDO1NBQ25EO1FBRUQsa0JBQWtCO1FBQ2xCLE9BQU8seURBQXVELElBQU0sQ0FBQztJQUN2RSxDQUFDOzs7Ozs7SUFFTyw4Q0FBa0I7Ozs7O0lBQTFCLFVBQTJCLElBQVk7UUFDckMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDdkIsT0FBTyxhQUFXLElBQUksQ0FBQyxNQUFNLDJCQUF3QixDQUFDO1NBQ3ZEO1FBRUQsa0JBQWtCO1FBQ2xCLE9BQU8sd0NBQXNDLElBQUksQ0FBQyxNQUFNLFFBQUssQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVPLHdDQUFZOzs7O0lBQXBCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Z0JBdkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIscWpDQUF5Qzs7aUJBRTFDOzs7Ozt5QkFFRSxLQUFLO3lCQUdMLEtBQUs7K0JBR0wsS0FBSzsyQkFHTCxLQUFLOzBCQUdMLE1BQU07O0lBc0RULHdCQUFDO0NBQUEsQUF4RUQsSUF3RUM7U0FuRVksaUJBQWlCOzs7SUFDNUIsbUNBQ2M7O0lBRWQsbUNBQ2M7O0lBRWQseUNBQ29COztJQUVwQixxQ0FDZ0I7O0lBRWhCLG9DQUMrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2MtZm9vdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2MtZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nYy1mb290ZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR0NGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgdGVhbUlkOiBzdHJpbmdcclxuXHJcbiAgQElucHV0KClcclxuICBicmFuY2g6IHN0cmluZ1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNlbGVjdGVkSXRlbTogbnVtYmVyXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbG9jYXRpb246IHN0cmluZ1xyXG5cclxuICBAT3V0cHV0KClcclxuICBvblJvdXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG9uTWVudUl0ZW1DbGlja2VkKHRhcmdldF9sb2NhdGlvbjogc3RyaW5nLCBwYXRoOiBzdHJpbmcgPSAnJykgOiB2b2lkIHtcclxuICAgIC8vIERlZmF1bHQgc2V0dGluZ3NcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICB0eXBlOiAnaW50ZXJuYWwnLFxyXG4gICAgICBwYXRoOiBwYXRoXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIElmIHRoZSB0YXJnZXQgbG9jYXRpb24gaXMgYW5vdGhlciBhcHAsIGJ1aWxkIGFuIGV4dGVybmFsIHVybCB0byBwYXNzIGJhY2tcclxuICAgIGlmICh0aGlzLmxvY2F0aW9uICE9PSB0YXJnZXRfbG9jYXRpb24pIHtcclxuICAgICAgZGF0YS50eXBlID0gJ2V4dGVybmFsJztcclxuXHJcbiAgICAgIC8vIEJ1aWxkIGEgZGlmZmVyZW50IHVybCBkZXBlbmRpbmcgb24gd2hlcmUgYXBwIG5lZWRzIHRvIGdvXHJcbiAgICAgIHN3aXRjaCh0YXJnZXRfbG9jYXRpb24pIHtcclxuICAgICAgICBjYXNlICdiYmwnOlxyXG4gICAgICAgICAgZGF0YS5wYXRoID0gdGhpcy5idWlsZEJCTFJvdXRlKHBhdGgpO1xyXG4gICAgICAgIGNhc2UgJ3RlYW0tc2l0ZSc6XHJcbiAgICAgICAgICBkYXRhLnBhdGggPSB0aGlzLmJ1aWxkVGVhbVNpdGVSb3V0ZShwYXRoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNlbmQgdGhlIHBhdGggaW5mbyBvZmYgdG8gYW55IHJlZ2lzdGVyZWQgaGFuZGxlclxyXG4gICAgdGhpcy5vblJvdXRlLmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJ1aWxkQkJMUm91dGUocGF0aDogc3RyaW5nKSA6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5pc1Byb2RCcmFuY2goKSkge1xyXG4gICAgICByZXR1cm4gYGh0dHBzOi8vYmJsLmdhbWVjaGFuZ2VyLnN0dWRpby8jLyR7cGF0aH1gO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERldiBicmFuY2ggcGF0aFxyXG4gICAgcmV0dXJuIGBodHRwczovL2RldmVsb3AuZ2FtZWNoYW5nZXIuc3R1ZGlvL2JpZy1iYXNoLWJ1ZGR5LyMvJHtwYXRofWA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJ1aWxkVGVhbVNpdGVSb3V0ZShwYXRoOiBzdHJpbmcpIDogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmlzUHJvZEJyYW5jaCgpKSB7XHJcbiAgICAgIHJldHVybiBgaHR0cHM6Ly8ke3RoaXMudGVhbUlkfS5nYW1lY2hhbmdlci5zdHVkaW8vIy9gO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERldiBCcmFuY2ggcGF0aFxyXG4gICAgcmV0dXJuIGBodHRwczovL2RldmVsb3AuZ2FtZWNoYW5nZXIuc3R1ZGlvLyR7dGhpcy50ZWFtSWR9LyMvYDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNQcm9kQnJhbmNoKCkgOiBib29sZWFuIHtcclxuICAgIGNvbnNvbGUubG9nKHR5cGVvZiB0aGlzLmJyYW5jaCwgdGhpcy5icmFuY2gpO1xyXG4gICAgcmV0dXJuICEodGhpcy5icmFuY2guc3RhcnRzV2l0aCgnZGV2ZWxvcCcpIHx8IHRoaXMuYnJhbmNoID09PSAnZGVidWcnKTtcclxuICB9XHJcbn1cclxuIl19