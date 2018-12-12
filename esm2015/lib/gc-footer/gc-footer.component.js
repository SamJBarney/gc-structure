/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class GCFooterComponent {
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
    }
    /**
     * @private
     * @param {?} path
     * @return {?}
     */
    buildBBLRoute(path) {
        if (this.isProdBranch()) {
            return `https://bbl.gamechanger.studio/#/${path}`;
        }
        // Dev branch path
        return `https://develop.gamechanger.studio/big-bash-buddy/#/${path}`;
    }
    /**
     * @private
     * @param {?} path
     * @return {?}
     */
    buildTeamSiteRoute(path) {
        if (this.isProdBranch()) {
            return `https://${this.teamId}.gamechanger.studio/#/`;
        }
        // Dev Branch path
        return `https://develop.gamechanger.studio/${this.teamId}/#/`;
    }
    /**
     * @private
     * @return {?}
     */
    isProdBranch() {
        console.log(typeof this.branch, this.branch);
        return !(this.branch.startsWith('develop') || this.branch === 'debug');
    }
}
GCFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'gc-footer',
                template: "<footer>\r\n  <div (click)=\"onMenuItemClicked('bbl', '/team/' + teamId + '/')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 0 }\" >\r\n    <div>\r\n      <span class=\"fa fa-home\" ></span>\r\n      <span class=\"title\">HOME</span>\r\n    </div>\r\n  </div>\r\n  <div (click)=\"onMenuItemClicked('bbl', '/team/' + teamId + '/video')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 1 }\" >\r\n    <div>\r\n      <span class=\"fa fa-play\" ></span>\r\n      <span class=\"title\">PLAY</span>\r\n    </div>\r\n  </div>\r\n  <div (click)=\"onMenuItemClicked('team-site')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 2 }\" >\r\n    <div>\r\n      <span class=\"fa fa-gamepad\" ></span>\r\n      <span class=\"title\">GAMES</span>\r\n    </div>\r\n  </div>\r\n  <div (click)=\"onMenuItemClicked('bbl', '/team/' + teamId + '/profile')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 3 }\" >\r\n    <div>\r\n      <span class=\"fa fa-user\" ></span>\r\n      <span class=\"title\">PROFILE</span>\r\n    </div>\r\n  </div>\r\n</footer>",
                styles: ["footer{position:absolute;bottom:0;left:0;display:flex;flex-direction:row;justify-content:space-between;width:100vw;height:10vh;border-top:2px solid #fff;z-index:100}footer .item{color:#fff;width:25vw;position:relative}footer .item *{display:block;text-align:center}footer .item div{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}footer .item .fa{font-size:4vh}footer .item .title{font-family:\"City Medium\";padding-top:5px;font-size:1.8vh;font-weight:400}"]
            }] }
];
/** @nocollapse */
GCFooterComponent.ctorParameters = () => [];
GCFooterComponent.propDecorators = {
    teamId: [{ type: Input }],
    branch: [{ type: Input }],
    selectedItem: [{ type: Input }],
    location: [{ type: Input }],
    onRoute: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2MtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2djLXN0cnVjdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9nYy1mb290ZXIvZ2MtZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8saUJBQWlCO0lBZ0I1QjtRQUZBLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQUUvQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxlQUF1QixFQUFFLE9BQWUsRUFBRTs7O1lBRXRELElBQUksR0FBRztZQUNULElBQUksRUFBRSxVQUFVO1lBQ2hCLElBQUksRUFBRSxJQUFJO1NBQ1g7UUFFRCw0RUFBNEU7UUFDNUUsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLGVBQWUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztZQUV2QiwyREFBMkQ7WUFDM0QsUUFBTyxlQUFlLEVBQUU7Z0JBQ3RCLEtBQUssS0FBSztvQkFDUixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUssV0FBVztvQkFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3QztTQUNGO1FBRUQsbURBQW1EO1FBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxJQUFZO1FBQ2hDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ3ZCLE9BQU8sb0NBQW9DLElBQUksRUFBRSxDQUFDO1NBQ25EO1FBRUQsa0JBQWtCO1FBQ2xCLE9BQU8sdURBQXVELElBQUksRUFBRSxDQUFDO0lBQ3ZFLENBQUM7Ozs7OztJQUVPLGtCQUFrQixDQUFDLElBQVk7UUFDckMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDdkIsT0FBTyxXQUFXLElBQUksQ0FBQyxNQUFNLHdCQUF3QixDQUFDO1NBQ3ZEO1FBRUQsa0JBQWtCO1FBQ2xCLE9BQU8sc0NBQXNDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVPLFlBQVk7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLENBQUM7SUFDekUsQ0FBQzs7O1lBdkVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIscWpDQUF5Qzs7YUFFMUM7Ozs7O3FCQUVFLEtBQUs7cUJBR0wsS0FBSzsyQkFHTCxLQUFLO3VCQUdMLEtBQUs7c0JBR0wsTUFBTTs7OztJQVpQLG1DQUNjOztJQUVkLG1DQUNjOztJQUVkLHlDQUNvQjs7SUFFcEIscUNBQ2dCOztJQUVoQixvQ0FDK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2djLWZvb3RlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2djLWZvb3Rlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2MtZm9vdGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEdDRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIHRlYW1JZDogc3RyaW5nXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYnJhbmNoOiBzdHJpbmdcclxuXHJcbiAgQElucHV0KClcclxuICBzZWxlY3RlZEl0ZW06IG51bWJlclxyXG5cclxuICBASW5wdXQoKVxyXG4gIGxvY2F0aW9uOiBzdHJpbmdcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgb25Sb3V0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBvbk1lbnVJdGVtQ2xpY2tlZCh0YXJnZXRfbG9jYXRpb246IHN0cmluZywgcGF0aDogc3RyaW5nID0gJycpIDogdm9pZCB7XHJcbiAgICAvLyBEZWZhdWx0IHNldHRpbmdzXHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgdHlwZTogJ2ludGVybmFsJyxcclxuICAgICAgcGF0aDogcGF0aFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBJZiB0aGUgdGFyZ2V0IGxvY2F0aW9uIGlzIGFub3RoZXIgYXBwLCBidWlsZCBhbiBleHRlcm5hbCB1cmwgdG8gcGFzcyBiYWNrXHJcbiAgICBpZiAodGhpcy5sb2NhdGlvbiAhPT0gdGFyZ2V0X2xvY2F0aW9uKSB7XHJcbiAgICAgIGRhdGEudHlwZSA9ICdleHRlcm5hbCc7XHJcblxyXG4gICAgICAvLyBCdWlsZCBhIGRpZmZlcmVudCB1cmwgZGVwZW5kaW5nIG9uIHdoZXJlIGFwcCBuZWVkcyB0byBnb1xyXG4gICAgICBzd2l0Y2godGFyZ2V0X2xvY2F0aW9uKSB7XHJcbiAgICAgICAgY2FzZSAnYmJsJzpcclxuICAgICAgICAgIGRhdGEucGF0aCA9IHRoaXMuYnVpbGRCQkxSb3V0ZShwYXRoKTtcclxuICAgICAgICBjYXNlICd0ZWFtLXNpdGUnOlxyXG4gICAgICAgICAgZGF0YS5wYXRoID0gdGhpcy5idWlsZFRlYW1TaXRlUm91dGUocGF0aCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTZW5kIHRoZSBwYXRoIGluZm8gb2ZmIHRvIGFueSByZWdpc3RlcmVkIGhhbmRsZXJcclxuICAgIHRoaXMub25Sb3V0ZS5lbWl0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBidWlsZEJCTFJvdXRlKHBhdGg6IHN0cmluZykgOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuaXNQcm9kQnJhbmNoKCkpIHtcclxuICAgICAgcmV0dXJuIGBodHRwczovL2JibC5nYW1lY2hhbmdlci5zdHVkaW8vIy8ke3BhdGh9YDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZXYgYnJhbmNoIHBhdGhcclxuICAgIHJldHVybiBgaHR0cHM6Ly9kZXZlbG9wLmdhbWVjaGFuZ2VyLnN0dWRpby9iaWctYmFzaC1idWRkeS8jLyR7cGF0aH1gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBidWlsZFRlYW1TaXRlUm91dGUocGF0aDogc3RyaW5nKSA6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5pc1Byb2RCcmFuY2goKSkge1xyXG4gICAgICByZXR1cm4gYGh0dHBzOi8vJHt0aGlzLnRlYW1JZH0uZ2FtZWNoYW5nZXIuc3R1ZGlvLyMvYDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZXYgQnJhbmNoIHBhdGhcclxuICAgIHJldHVybiBgaHR0cHM6Ly9kZXZlbG9wLmdhbWVjaGFuZ2VyLnN0dWRpby8ke3RoaXMudGVhbUlkfS8jL2A7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzUHJvZEJyYW5jaCgpIDogYm9vbGVhbiB7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgdGhpcy5icmFuY2gsIHRoaXMuYnJhbmNoKTtcclxuICAgIHJldHVybiAhKHRoaXMuYnJhbmNoLnN0YXJ0c1dpdGgoJ2RldmVsb3AnKSB8fCB0aGlzLmJyYW5jaCA9PT0gJ2RlYnVnJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==