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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2MtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2djLXN0cnVjdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9nYy1mb290ZXIvZ2MtZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQXFCRTtRQUZBLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQUUvQixDQUFDOzs7O0lBRWpCLG9DQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7OztJQUVELDZDQUFpQjs7Ozs7SUFBakIsVUFBa0IsZUFBdUIsRUFBRSxJQUFpQjtRQUFqQixxQkFBQSxFQUFBLFNBQWlCOzs7WUFFdEQsSUFBSSxHQUFHO1lBQ1QsSUFBSSxFQUFFLFVBQVU7WUFDaEIsSUFBSSxFQUFFLElBQUk7U0FDWDtRQUVELDRFQUE0RTtRQUM1RSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssZUFBZSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0IsMkRBQTJEO1lBQzNELFFBQU8sZUFBZSxFQUFFO2dCQUN0QixLQUFLLEtBQUs7b0JBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QyxLQUFLLFdBQVc7b0JBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDN0M7U0FDRjtRQUVELG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7Ozs7SUFFTyx5Q0FBYTs7Ozs7SUFBckIsVUFBc0IsSUFBWTtRQUNoQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUN2QixPQUFPLHNDQUFvQyxJQUFNLENBQUM7U0FDbkQ7UUFFRCxrQkFBa0I7UUFDbEIsT0FBTyx5REFBdUQsSUFBTSxDQUFDO0lBQ3ZFLENBQUM7Ozs7OztJQUVPLDhDQUFrQjs7Ozs7SUFBMUIsVUFBMkIsSUFBWTtRQUNyQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUN2QixPQUFPLGFBQVcsSUFBSSxDQUFDLE1BQU0sMkJBQXdCLENBQUM7U0FDdkQ7UUFFRCxrQkFBa0I7UUFDbEIsT0FBTyx3Q0FBc0MsSUFBSSxDQUFDLE1BQU0sUUFBSyxDQUFDO0lBQ2hFLENBQUM7Ozs7O0lBRU8sd0NBQVk7Ozs7SUFBcEI7UUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxDQUFDO0lBQ3pFLENBQUM7O2dCQXRFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLHFqQ0FBeUM7O2lCQUUxQzs7Ozs7eUJBRUUsS0FBSzt5QkFHTCxLQUFLOytCQUdMLEtBQUs7MkJBR0wsS0FBSzswQkFHTCxNQUFNOztJQXFEVCx3QkFBQztDQUFBLEFBdkVELElBdUVDO1NBbEVZLGlCQUFpQjs7O0lBQzVCLG1DQUNjOztJQUVkLG1DQUNjOztJQUVkLHlDQUNvQjs7SUFFcEIscUNBQ2dCOztJQUVoQixvQ0FDK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2djLWZvb3RlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2djLWZvb3Rlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2MtZm9vdGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEdDRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIHRlYW1JZDogc3RyaW5nXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYnJhbmNoOiBzdHJpbmdcclxuXHJcbiAgQElucHV0KClcclxuICBzZWxlY3RlZEl0ZW06IG51bWJlclxyXG5cclxuICBASW5wdXQoKVxyXG4gIGxvY2F0aW9uOiBzdHJpbmdcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgb25Sb3V0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBvbk1lbnVJdGVtQ2xpY2tlZCh0YXJnZXRfbG9jYXRpb246IHN0cmluZywgcGF0aDogc3RyaW5nID0gJycpIDogdm9pZCB7XHJcbiAgICAvLyBEZWZhdWx0IHNldHRpbmdzXHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgdHlwZTogJ2ludGVybmFsJyxcclxuICAgICAgcGF0aDogcGF0aFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBJZiB0aGUgdGFyZ2V0IGxvY2F0aW9uIGlzIGFub3RoZXIgYXBwLCBidWlsZCBhbiBleHRlcm5hbCB1cmwgdG8gcGFzcyBiYWNrXHJcbiAgICBpZiAodGhpcy5sb2NhdGlvbiAhPT0gdGFyZ2V0X2xvY2F0aW9uKSB7XHJcbiAgICAgIGRhdGEudHlwZSA9ICdleHRlcm5hbCc7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRhcmdldF9sb2NhdGlvbik7XHJcbiAgICAgIC8vIEJ1aWxkIGEgZGlmZmVyZW50IHVybCBkZXBlbmRpbmcgb24gd2hlcmUgYXBwIG5lZWRzIHRvIGdvXHJcbiAgICAgIHN3aXRjaCh0YXJnZXRfbG9jYXRpb24pIHtcclxuICAgICAgICBjYXNlICdiYmwnOlxyXG4gICAgICAgICAgZGF0YS5wYXRoID0gdGhpcy5idWlsZEJCTFJvdXRlKHBhdGgpO1xyXG4gICAgICAgIGNhc2UgJ3RlYW0tc2l0ZSc6XHJcbiAgICAgICAgICBkYXRhLnBhdGggPSB0aGlzLmJ1aWxkVGVhbVNpdGVSb3V0ZShwYXRoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNlbmQgdGhlIHBhdGggaW5mbyBvZmYgdG8gYW55IHJlZ2lzdGVyZWQgaGFuZGxlclxyXG4gICAgdGhpcy5vblJvdXRlLmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJ1aWxkQkJMUm91dGUocGF0aDogc3RyaW5nKSA6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5pc1Byb2RCcmFuY2goKSkge1xyXG4gICAgICByZXR1cm4gYGh0dHBzOi8vYmJsLmdhbWVjaGFuZ2VyLnN0dWRpby8jLyR7cGF0aH1gO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERldiBicmFuY2ggcGF0aFxyXG4gICAgcmV0dXJuIGBodHRwczovL2RldmVsb3AuZ2FtZWNoYW5nZXIuc3R1ZGlvL2JpZy1iYXNoLWJ1ZGR5LyMvJHtwYXRofWA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJ1aWxkVGVhbVNpdGVSb3V0ZShwYXRoOiBzdHJpbmcpIDogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmlzUHJvZEJyYW5jaCgpKSB7XHJcbiAgICAgIHJldHVybiBgaHR0cHM6Ly8ke3RoaXMudGVhbUlkfS5nYW1lY2hhbmdlci5zdHVkaW8vIy9gO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERldiBCcmFuY2ggcGF0aFxyXG4gICAgcmV0dXJuIGBodHRwczovL2RldmVsb3AuZ2FtZWNoYW5nZXIuc3R1ZGlvLyR7dGhpcy50ZWFtSWR9LyMvYDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNQcm9kQnJhbmNoKCkgOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhKHRoaXMuYnJhbmNoLnN0YXJ0c1dpdGgoJ2RldmVsb3AnKSB8fCB0aGlzLmJyYW5jaCA9PT0gJ2RlYnVnJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==