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
                    break;
                case 'team-site':
                    data.path = this.buildTeamSiteRoute(path);
                    break;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2MtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2djLXN0cnVjdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9nYy1mb290ZXIvZ2MtZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8saUJBQWlCO0lBZ0I1QjtRQUZBLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQUUvQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxlQUF1QixFQUFFLE9BQWUsRUFBRTs7O1lBRXRELElBQUksR0FBRztZQUNULElBQUksRUFBRSxVQUFVO1lBQ2hCLElBQUksRUFBRSxJQUFJO1NBQ1g7UUFFRCw0RUFBNEU7UUFDNUUsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLGVBQWUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztZQUV2QiwyREFBMkQ7WUFDM0QsUUFBTyxlQUFlLEVBQUU7Z0JBQ3RCLEtBQUssS0FBSztvQkFDUixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3JDLE1BQU07Z0JBQ1IsS0FBSyxXQUFXO29CQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMxQyxNQUFNO2FBQ1Q7U0FDRjtRQUVELG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsSUFBWTtRQUNoQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUN2QixPQUFPLG9DQUFvQyxJQUFJLEVBQUUsQ0FBQztTQUNuRDtRQUVELGtCQUFrQjtRQUNsQixPQUFPLHVEQUF1RCxJQUFJLEVBQUUsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxJQUFZO1FBQ3JDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ3ZCLE9BQU8sV0FBVyxJQUFJLENBQUMsTUFBTSx3QkFBd0IsQ0FBQztTQUN2RDtRQUVELGtCQUFrQjtRQUNsQixPQUFPLHNDQUFzQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7SUFDaEUsQ0FBQzs7Ozs7SUFFTyxZQUFZO1FBQ2xCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLENBQUM7SUFDekUsQ0FBQzs7O1lBeEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIscWpDQUF5Qzs7YUFFMUM7Ozs7O3FCQUVFLEtBQUs7cUJBR0wsS0FBSzsyQkFHTCxLQUFLO3VCQUdMLEtBQUs7c0JBR0wsTUFBTTs7OztJQVpQLG1DQUNjOztJQUVkLG1DQUNjOztJQUVkLHlDQUNvQjs7SUFFcEIscUNBQ2dCOztJQUVoQixvQ0FDK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2djLWZvb3RlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2djLWZvb3Rlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2MtZm9vdGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEdDRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIHRlYW1JZDogc3RyaW5nXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYnJhbmNoOiBzdHJpbmdcclxuXHJcbiAgQElucHV0KClcclxuICBzZWxlY3RlZEl0ZW06IG51bWJlclxyXG5cclxuICBASW5wdXQoKVxyXG4gIGxvY2F0aW9uOiBzdHJpbmdcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgb25Sb3V0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBvbk1lbnVJdGVtQ2xpY2tlZCh0YXJnZXRfbG9jYXRpb246IHN0cmluZywgcGF0aDogc3RyaW5nID0gJycpIDogdm9pZCB7XHJcbiAgICAvLyBEZWZhdWx0IHNldHRpbmdzXHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgdHlwZTogJ2ludGVybmFsJyxcclxuICAgICAgcGF0aDogcGF0aFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBJZiB0aGUgdGFyZ2V0IGxvY2F0aW9uIGlzIGFub3RoZXIgYXBwLCBidWlsZCBhbiBleHRlcm5hbCB1cmwgdG8gcGFzcyBiYWNrXHJcbiAgICBpZiAodGhpcy5sb2NhdGlvbiAhPT0gdGFyZ2V0X2xvY2F0aW9uKSB7XHJcbiAgICAgIGRhdGEudHlwZSA9ICdleHRlcm5hbCc7XHJcbiAgICAgIFxyXG4gICAgICAvLyBCdWlsZCBhIGRpZmZlcmVudCB1cmwgZGVwZW5kaW5nIG9uIHdoZXJlIGFwcCBuZWVkcyB0byBnb1xyXG4gICAgICBzd2l0Y2godGFyZ2V0X2xvY2F0aW9uKSB7XHJcbiAgICAgICAgY2FzZSAnYmJsJzpcclxuICAgICAgICAgIGRhdGEucGF0aCA9IHRoaXMuYnVpbGRCQkxSb3V0ZShwYXRoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3RlYW0tc2l0ZSc6XHJcbiAgICAgICAgICBkYXRhLnBhdGggPSB0aGlzLmJ1aWxkVGVhbVNpdGVSb3V0ZShwYXRoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2VuZCB0aGUgcGF0aCBpbmZvIG9mZiB0byBhbnkgcmVnaXN0ZXJlZCBoYW5kbGVyXHJcbiAgICB0aGlzLm9uUm91dGUuZW1pdChkYXRhKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYnVpbGRCQkxSb3V0ZShwYXRoOiBzdHJpbmcpIDogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmlzUHJvZEJyYW5jaCgpKSB7XHJcbiAgICAgIHJldHVybiBgaHR0cHM6Ly9iYmwuZ2FtZWNoYW5nZXIuc3R1ZGlvLyMvJHtwYXRofWA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGV2IGJyYW5jaCBwYXRoXHJcbiAgICByZXR1cm4gYGh0dHBzOi8vZGV2ZWxvcC5nYW1lY2hhbmdlci5zdHVkaW8vYmlnLWJhc2gtYnVkZHkvIy8ke3BhdGh9YDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYnVpbGRUZWFtU2l0ZVJvdXRlKHBhdGg6IHN0cmluZykgOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuaXNQcm9kQnJhbmNoKCkpIHtcclxuICAgICAgcmV0dXJuIGBodHRwczovLyR7dGhpcy50ZWFtSWR9LmdhbWVjaGFuZ2VyLnN0dWRpby8jL2A7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGV2IEJyYW5jaCBwYXRoXHJcbiAgICByZXR1cm4gYGh0dHBzOi8vZGV2ZWxvcC5nYW1lY2hhbmdlci5zdHVkaW8vJHt0aGlzLnRlYW1JZH0vIy9gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1Byb2RCcmFuY2goKSA6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEodGhpcy5icmFuY2guc3RhcnRzV2l0aCgnZGV2ZWxvcCcpIHx8IHRoaXMuYnJhbmNoID09PSAnZGVidWcnKTtcclxuICB9XHJcbn1cclxuIl19