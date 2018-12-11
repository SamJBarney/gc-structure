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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2MtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2djLXN0cnVjdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9nYy1mb290ZXIvZ2MtZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8saUJBQWlCO0lBYTVCO1FBRkEsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFBO0lBRS9CLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLGVBQXVCLEVBQUUsT0FBZSxFQUFFOzs7WUFFdEQsSUFBSSxHQUFHO1lBQ1QsSUFBSSxFQUFFLFVBQVU7WUFDaEIsSUFBSSxFQUFFLElBQUk7U0FDWDtRQUVELDRFQUE0RTtRQUM1RSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssZUFBZSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1lBRXZCLDJEQUEyRDtZQUMzRCxRQUFPLGVBQWUsRUFBRTtnQkFDdEIsS0FBSyxLQUFLO29CQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsOENBQThDLElBQUksRUFBRSxDQUFDO2dCQUNuRSxLQUFLLFdBQVc7b0JBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLElBQUksQ0FBQyxNQUFNLHdCQUF3QixDQUFDO2FBQzlEO1NBQ0Y7UUFFRCxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7O1lBN0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIseTdCQUF5Qzs7YUFFMUM7Ozs7O3FCQUVFLEtBQUs7MkJBR0wsS0FBSzt1QkFHTCxLQUFLO3NCQUdMLE1BQU07Ozs7SUFUUCxtQ0FDYzs7SUFFZCx5Q0FDb0I7O0lBRXBCLHFDQUNnQjs7SUFFaEIsb0NBQytDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnYy1mb290ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nYy1mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2djLWZvb3Rlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHQ0Zvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICB0ZWFtSWQ6IHN0cmluZ1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNlbGVjdGVkSXRlbTogbnVtYmVyXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbG9jYXRpb246IHN0cmluZ1xyXG5cclxuICBAT3V0cHV0KClcclxuICBvblJvdXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG9uTWVudUl0ZW1DbGlja2VkKHRhcmdldF9sb2NhdGlvbjogc3RyaW5nLCBwYXRoOiBzdHJpbmcgPSAnJykgOiB2b2lkIHtcclxuICAgIC8vIERlZmF1bHQgc2V0dGluZ3NcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICB0eXBlOiAnaW50ZXJuYWwnLFxyXG4gICAgICBwYXRoOiBwYXRoXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIElmIHRoZSB0YXJnZXQgbG9jYXRpb24gaXMgYW5vdGhlciBhcHAsIGJ1aWxkIGFuIGV4dGVybmFsIHVybCB0byBwYXNzIGJhY2tcclxuICAgIGlmICh0aGlzLmxvY2F0aW9uICE9PSB0YXJnZXRfbG9jYXRpb24pIHtcclxuICAgICAgZGF0YS50eXBlID0gJ2V4dGVybmFsJztcclxuXHJcbiAgICAgIC8vIEJ1aWxkIGEgZGlmZmVyZW50IHVybCBkZXBlbmRpbmcgb24gd2hlcmUgYXBwIG5lZWRzIHRvIGdvXHJcbiAgICAgIHN3aXRjaCh0YXJnZXRfbG9jYXRpb24pIHtcclxuICAgICAgICBjYXNlICdiYmwnOlxyXG4gICAgICAgICAgZGF0YS5wYXRoID0gYGh0dHBzOi8vYmJsLmdhbWVjaGFuZ2VyLnN0dWRpby8jLyV7dGVhbUlkfS8ke3BhdGh9YDtcclxuICAgICAgICBjYXNlICd0ZWFtLXNpdGUnOlxyXG4gICAgICAgICAgZGF0YS5wYXRoID0gYGh0dHBzOi8vJHt0aGlzLnRlYW1JZH0uZ2FtZWNoYW5nZXIuc3R1ZGlvLyMvYDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNlbmQgdGhlIHBhdGggaW5mbyBvZmYgdG8gYW55IHJlZ2lzdGVyZWQgaGFuZGxlclxyXG4gICAgdGhpcy5vblJvdXRlLmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=