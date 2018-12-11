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
                    data.path = `https://bbl.gamechanger.studio/#/%{teamId}/${path}`;
                case 'team-site':
                    data.path = `https://${this.teamId}.gamechanger.studio/#/`;
            }
        }
        // Send the path info off to any registered handler
        this.onRoute.emit(data);
    }
}
GCFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'gc-footer',
                template: "<footer>\n  <div (click)=\"onMenuItemClicked('bbl', '/team/' + teamId + '/')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 0 }\" >\n    <span class=\"fa fa-home\" ></span>\n    <span class=\"title\">HOME</span>\n  </div>\n  <div (click)=\"onMenuItemClicked('bbl', '/team/' + teamId + '/video')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 1 }\" >\n    <span class=\"fa fa-play\" ></span>\n    <span class=\"title\">PLAY</span>\n  </div>\n  <div (click)=\"onMenuItemClicked('team-site')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 2 }\" >\n    <span class=\"fa fa-gamepad\" ></span>\n    <span class=\"title\">GAMES</span>\n  </div>\n  <div (click)=\"onMenuItemClicked('bbl', '/team/' + teamId + '/profile')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 3 }\" >\n    <span class=\"fa fa-user\" ></span>\n    <span class=\"title\">PROFILE</span>\n  </div>\n</footer>",
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
if (false) {
    /** @type {?} */
    GCFooterComponent.prototype.teamId;
    /** @type {?} */
    GCFooterComponent.prototype.selectedItem;
    /** @type {?} */
    GCFooterComponent.prototype.location;
    /** @type {?} */
    GCFooterComponent.prototype.onRoute;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2MtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2djLXN0cnVjdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9nYy1mb290ZXIvZ2MtZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8saUJBQWlCO0lBYTVCO1FBRkEsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFBO0lBRS9CLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLGVBQXVCLEVBQUUsT0FBZSxFQUFFOzs7WUFFdEQsSUFBSSxHQUFHO1lBQ1QsSUFBSSxFQUFFLFVBQVU7WUFDaEIsSUFBSSxFQUFFLElBQUk7U0FDWDtRQUVELDRFQUE0RTtRQUM1RSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssZUFBZSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1lBRXZCLDJEQUEyRDtZQUMzRCxRQUFPLGVBQWUsRUFBRTtnQkFDdEIsS0FBSyxLQUFLO29CQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsOENBQThDLElBQUksRUFBRSxDQUFDO2dCQUNuRSxLQUFLLFdBQVc7b0JBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLElBQUksQ0FBQyxNQUFNLHdCQUF3QixDQUFDO2FBQzlEO1NBQ0Y7UUFFRCxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7O1lBN0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsdTVCQUF5Qzs7YUFFMUM7Ozs7O3FCQUVFLEtBQUs7MkJBR0wsS0FBSzt1QkFHTCxLQUFLO3NCQUdMLE1BQU07Ozs7SUFUUCxtQ0FDYzs7SUFFZCx5Q0FDb0I7O0lBRXBCLHFDQUNnQjs7SUFFaEIsb0NBQytDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnYy1mb290ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2MtZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2MtZm9vdGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHQ0Zvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHRlYW1JZDogc3RyaW5nXG5cbiAgQElucHV0KClcbiAgc2VsZWN0ZWRJdGVtOiBudW1iZXJcblxuICBASW5wdXQoKVxuICBsb2NhdGlvbjogc3RyaW5nXG5cbiAgQE91dHB1dCgpXG4gIG9uUm91dGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uTWVudUl0ZW1DbGlja2VkKHRhcmdldF9sb2NhdGlvbjogc3RyaW5nLCBwYXRoOiBzdHJpbmcgPSAnJykgOiB2b2lkIHtcbiAgICAvLyBEZWZhdWx0IHNldHRpbmdzXG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICB0eXBlOiAnaW50ZXJuYWwnLFxuICAgICAgcGF0aDogcGF0aFxuICAgIH07XG5cbiAgICAvLyBJZiB0aGUgdGFyZ2V0IGxvY2F0aW9uIGlzIGFub3RoZXIgYXBwLCBidWlsZCBhbiBleHRlcm5hbCB1cmwgdG8gcGFzcyBiYWNrXG4gICAgaWYgKHRoaXMubG9jYXRpb24gIT09IHRhcmdldF9sb2NhdGlvbikge1xuICAgICAgZGF0YS50eXBlID0gJ2V4dGVybmFsJztcblxuICAgICAgLy8gQnVpbGQgYSBkaWZmZXJlbnQgdXJsIGRlcGVuZGluZyBvbiB3aGVyZSBhcHAgbmVlZHMgdG8gZ29cbiAgICAgIHN3aXRjaCh0YXJnZXRfbG9jYXRpb24pIHtcbiAgICAgICAgY2FzZSAnYmJsJzpcbiAgICAgICAgICBkYXRhLnBhdGggPSBgaHR0cHM6Ly9iYmwuZ2FtZWNoYW5nZXIuc3R1ZGlvLyMvJXt0ZWFtSWR9LyR7cGF0aH1gO1xuICAgICAgICBjYXNlICd0ZWFtLXNpdGUnOlxuICAgICAgICAgIGRhdGEucGF0aCA9IGBodHRwczovLyR7dGhpcy50ZWFtSWR9LmdhbWVjaGFuZ2VyLnN0dWRpby8jL2A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcGF0aCBpbmZvIG9mZiB0byBhbnkgcmVnaXN0ZXJlZCBoYW5kbGVyXG4gICAgdGhpcy5vblJvdXRlLmVtaXQoZGF0YSk7XG4gIH1cblxufVxuIl19