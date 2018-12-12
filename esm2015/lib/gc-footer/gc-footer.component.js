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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2MtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2djLXN0cnVjdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9nYy1mb290ZXIvZ2MtZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8saUJBQWlCO0lBZ0I1QjtRQUZBLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQUUvQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxlQUF1QixFQUFFLE9BQWUsRUFBRTs7O1lBRXRELElBQUksR0FBRztZQUNULElBQUksRUFBRSxVQUFVO1lBQ2hCLElBQUksRUFBRSxJQUFJO1NBQ1g7UUFFRCw0RUFBNEU7UUFDNUUsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLGVBQWUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdCLDJEQUEyRDtZQUMzRCxRQUFPLGVBQWUsRUFBRTtnQkFDdEIsS0FBSyxLQUFLO29CQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkMsS0FBSyxXQUFXO29CQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzdDO1NBQ0Y7UUFFRCxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLElBQVk7UUFDaEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDdkIsT0FBTyxvQ0FBb0MsSUFBSSxFQUFFLENBQUM7U0FDbkQ7UUFFRCxrQkFBa0I7UUFDbEIsT0FBTyx1REFBdUQsSUFBSSxFQUFFLENBQUM7SUFDdkUsQ0FBQzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsSUFBWTtRQUNyQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUN2QixPQUFPLFdBQVcsSUFBSSxDQUFDLE1BQU0sd0JBQXdCLENBQUM7U0FDdkQ7UUFFRCxrQkFBa0I7UUFDbEIsT0FBTyxzQ0FBc0MsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO0lBQ2hFLENBQUM7Ozs7O0lBRU8sWUFBWTtRQUNsQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxDQUFDO0lBQ3pFLENBQUM7OztZQXRFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHFqQ0FBeUM7O2FBRTFDOzs7OztxQkFFRSxLQUFLO3FCQUdMLEtBQUs7MkJBR0wsS0FBSzt1QkFHTCxLQUFLO3NCQUdMLE1BQU07Ozs7SUFaUCxtQ0FDYzs7SUFFZCxtQ0FDYzs7SUFFZCx5Q0FDb0I7O0lBRXBCLHFDQUNnQjs7SUFFaEIsb0NBQytDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnYy1mb290ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nYy1mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2djLWZvb3Rlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHQ0Zvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICB0ZWFtSWQ6IHN0cmluZ1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGJyYW5jaDogc3RyaW5nXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2VsZWN0ZWRJdGVtOiBudW1iZXJcclxuXHJcbiAgQElucHV0KClcclxuICBsb2NhdGlvbjogc3RyaW5nXHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG9uUm91dGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgb25NZW51SXRlbUNsaWNrZWQodGFyZ2V0X2xvY2F0aW9uOiBzdHJpbmcsIHBhdGg6IHN0cmluZyA9ICcnKSA6IHZvaWQge1xyXG4gICAgLy8gRGVmYXVsdCBzZXR0aW5nc1xyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIHR5cGU6ICdpbnRlcm5hbCcsXHJcbiAgICAgIHBhdGg6IHBhdGhcclxuICAgIH07XHJcblxyXG4gICAgLy8gSWYgdGhlIHRhcmdldCBsb2NhdGlvbiBpcyBhbm90aGVyIGFwcCwgYnVpbGQgYW4gZXh0ZXJuYWwgdXJsIHRvIHBhc3MgYmFja1xyXG4gICAgaWYgKHRoaXMubG9jYXRpb24gIT09IHRhcmdldF9sb2NhdGlvbikge1xyXG4gICAgICBkYXRhLnR5cGUgPSAnZXh0ZXJuYWwnO1xyXG4gICAgICBjb25zb2xlLmxvZyh0YXJnZXRfbG9jYXRpb24pO1xyXG4gICAgICAvLyBCdWlsZCBhIGRpZmZlcmVudCB1cmwgZGVwZW5kaW5nIG9uIHdoZXJlIGFwcCBuZWVkcyB0byBnb1xyXG4gICAgICBzd2l0Y2godGFyZ2V0X2xvY2F0aW9uKSB7XHJcbiAgICAgICAgY2FzZSAnYmJsJzpcclxuICAgICAgICAgIGRhdGEucGF0aCA9IHRoaXMuYnVpbGRCQkxSb3V0ZShwYXRoKTtcclxuICAgICAgICBjYXNlICd0ZWFtLXNpdGUnOlxyXG4gICAgICAgICAgZGF0YS5wYXRoID0gdGhpcy5idWlsZFRlYW1TaXRlUm91dGUocGF0aCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTZW5kIHRoZSBwYXRoIGluZm8gb2ZmIHRvIGFueSByZWdpc3RlcmVkIGhhbmRsZXJcclxuICAgIHRoaXMub25Sb3V0ZS5lbWl0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBidWlsZEJCTFJvdXRlKHBhdGg6IHN0cmluZykgOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuaXNQcm9kQnJhbmNoKCkpIHtcclxuICAgICAgcmV0dXJuIGBodHRwczovL2JibC5nYW1lY2hhbmdlci5zdHVkaW8vIy8ke3BhdGh9YDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZXYgYnJhbmNoIHBhdGhcclxuICAgIHJldHVybiBgaHR0cHM6Ly9kZXZlbG9wLmdhbWVjaGFuZ2VyLnN0dWRpby9iaWctYmFzaC1idWRkeS8jLyR7cGF0aH1gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBidWlsZFRlYW1TaXRlUm91dGUocGF0aDogc3RyaW5nKSA6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5pc1Byb2RCcmFuY2goKSkge1xyXG4gICAgICByZXR1cm4gYGh0dHBzOi8vJHt0aGlzLnRlYW1JZH0uZ2FtZWNoYW5nZXIuc3R1ZGlvLyMvYDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZXYgQnJhbmNoIHBhdGhcclxuICAgIHJldHVybiBgaHR0cHM6Ly9kZXZlbG9wLmdhbWVjaGFuZ2VyLnN0dWRpby8ke3RoaXMudGVhbUlkfS8jL2A7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzUHJvZEJyYW5jaCgpIDogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISh0aGlzLmJyYW5jaC5zdGFydHNXaXRoKCdkZXZlbG9wJykgfHwgdGhpcy5icmFuY2ggPT09ICdkZWJ1ZycpO1xyXG4gIH1cclxufVxyXG4iXX0=