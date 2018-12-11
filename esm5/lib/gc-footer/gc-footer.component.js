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
            /** @type {?} */
            var url = window.location.href
            // Build a different url depending on where app needs to go
            // This block of code is horrible
            ;
            // Build a different url depending on where app needs to go
            // This block of code is horrible
            if (!url.startsWith('https://develop.gamechanger.studio')) {
                switch (target_location) {
                    case 'bbl':
                        data.path = "https://bbl.gamechanger.studio/#/" + path;
                    case 'team-site':
                        data.path = "https://" + this.teamId + ".gamechanger.studio/#/";
                }
            }
            else {
                switch (target_location) {
                    case 'bbl':
                        data.path = "https://develop.gamechanger.studio/big-bash-buddy/#/" + path;
                    case 'team-site':
                        data.path = "https://develop.gamechanger.studio/" + this.teamId + "/#/";
                }
            }
        }
        // Send the path info off to any registered handler
        this.onRoute.emit(data);
    };
    GCFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gc-footer',
                    template: "<footer>\r\n  <div (click)=\"onMenuItemClicked('bbl', '/team/' + teamId + '/')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 0 }\" >\r\n    <span class=\"fa fa-home\" ></span>\r\n    <span class=\"title\">HOME</span>\r\n  </div>\r\n  <div (click)=\"onMenuItemClicked('bbl', '/team/' + teamId + '/video')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 1 }\" >\r\n    <span class=\"fa fa-play\" ></span>\r\n    <span class=\"title\">PLAY</span>\r\n  </div>\r\n  <div (click)=\"onMenuItemClicked('team-site')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 2 }\" >\r\n    <span class=\"fa fa-gamepad\" ></span>\r\n    <span class=\"title\">GAMES</span>\r\n  </div>\r\n  <div (click)=\"onMenuItemClicked('bbl', '/team/' + teamId + '/profile')\" [ngClass]=\"{ 'item': true, 'active': selectedItem == 3 }\" >\r\n    <span class=\"fa fa-user\" ></span>\r\n    <span class=\"title\">PROFILE</span>\r\n  </div>\r\n</footer>",
                    styles: ["footer{position:absolute;bottom:0;left:0;display:flex;flex-direction:row;justify-content:space-between;width:100vw;height:10vh;border-top:2px solid #fff;z-index:100}footer .item{color:#fff;width:25vw;position:relative}footer .item *{display:block;text-align:center}footer .item div{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}footer .item .fa{font-size:4vh}footer .item .title{font-family:\"City Medium\";padding-top:5px;font-size:1.8vh;font-weight:400}"]
                }] }
    ];
    /** @nocollapse */
    GCFooterComponent.ctorParameters = function () { return []; };
    GCFooterComponent.propDecorators = {
        teamId: [{ type: Input }],
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
    GCFooterComponent.prototype.selectedItem;
    /** @type {?} */
    GCFooterComponent.prototype.location;
    /** @type {?} */
    GCFooterComponent.prototype.onRoute;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2MtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2djLXN0cnVjdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9nYy1mb290ZXIvZ2MtZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQWtCRTtRQUZBLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQUUvQixDQUFDOzs7O0lBRWpCLG9DQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7OztJQUVELDZDQUFpQjs7Ozs7SUFBakIsVUFBa0IsZUFBdUIsRUFBRSxJQUFpQjtRQUFqQixxQkFBQSxFQUFBLFNBQWlCOzs7WUFFdEQsSUFBSSxHQUFHO1lBQ1QsSUFBSSxFQUFFLFVBQVU7WUFDaEIsSUFBSSxFQUFFLElBQUk7U0FDWDtRQUVELDRFQUE0RTtRQUM1RSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssZUFBZSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDOztnQkFFbkIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSTtZQUU5QiwyREFBMkQ7WUFDM0QsaUNBQWlDOztZQURqQywyREFBMkQ7WUFDM0QsaUNBQWlDO1lBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLG9DQUFvQyxDQUFDLEVBQUU7Z0JBQ3pELFFBQU8sZUFBZSxFQUFFO29CQUN0QixLQUFLLEtBQUs7d0JBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyxzQ0FBb0MsSUFBTSxDQUFDO29CQUN6RCxLQUFLLFdBQVc7d0JBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFXLElBQUksQ0FBQyxNQUFNLDJCQUF3QixDQUFDO2lCQUM5RDthQUNGO2lCQUFNO2dCQUNMLFFBQU8sZUFBZSxFQUFFO29CQUN0QixLQUFLLEtBQUs7d0JBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyx5REFBdUQsSUFBTSxDQUFDO29CQUM1RSxLQUFLLFdBQVc7d0JBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyx3Q0FBc0MsSUFBSSxDQUFDLE1BQU0sUUFBSyxDQUFDO2lCQUN0RTthQUNGO1NBR0Y7UUFFRCxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Z0JBM0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIseTdCQUF5Qzs7aUJBRTFDOzs7Ozt5QkFFRSxLQUFLOytCQUdMLEtBQUs7MkJBR0wsS0FBSzswQkFHTCxNQUFNOztJQThDVCx3QkFBQztDQUFBLEFBN0RELElBNkRDO1NBeERZLGlCQUFpQjs7O0lBQzVCLG1DQUNjOztJQUVkLHlDQUNvQjs7SUFFcEIscUNBQ2dCOztJQUVoQixvQ0FDK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2djLWZvb3RlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2djLWZvb3Rlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2MtZm9vdGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEdDRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIHRlYW1JZDogc3RyaW5nXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2VsZWN0ZWRJdGVtOiBudW1iZXJcclxuXHJcbiAgQElucHV0KClcclxuICBsb2NhdGlvbjogc3RyaW5nXHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG9uUm91dGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgb25NZW51SXRlbUNsaWNrZWQodGFyZ2V0X2xvY2F0aW9uOiBzdHJpbmcsIHBhdGg6IHN0cmluZyA9ICcnKSA6IHZvaWQge1xyXG4gICAgLy8gRGVmYXVsdCBzZXR0aW5nc1xyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIHR5cGU6ICdpbnRlcm5hbCcsXHJcbiAgICAgIHBhdGg6IHBhdGhcclxuICAgIH07XHJcblxyXG4gICAgLy8gSWYgdGhlIHRhcmdldCBsb2NhdGlvbiBpcyBhbm90aGVyIGFwcCwgYnVpbGQgYW4gZXh0ZXJuYWwgdXJsIHRvIHBhc3MgYmFja1xyXG4gICAgaWYgKHRoaXMubG9jYXRpb24gIT09IHRhcmdldF9sb2NhdGlvbikge1xyXG4gICAgICBkYXRhLnR5cGUgPSAnZXh0ZXJuYWwnO1xyXG5cclxuICAgICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXHJcblxyXG4gICAgICAvLyBCdWlsZCBhIGRpZmZlcmVudCB1cmwgZGVwZW5kaW5nIG9uIHdoZXJlIGFwcCBuZWVkcyB0byBnb1xyXG4gICAgICAvLyBUaGlzIGJsb2NrIG9mIGNvZGUgaXMgaG9ycmlibGVcclxuICAgICAgaWYgKCF1cmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly9kZXZlbG9wLmdhbWVjaGFuZ2VyLnN0dWRpbycpKSB7XHJcbiAgICAgICAgc3dpdGNoKHRhcmdldF9sb2NhdGlvbikge1xyXG4gICAgICAgICAgY2FzZSAnYmJsJzpcclxuICAgICAgICAgICAgZGF0YS5wYXRoID0gYGh0dHBzOi8vYmJsLmdhbWVjaGFuZ2VyLnN0dWRpby8jLyR7cGF0aH1gO1xyXG4gICAgICAgICAgY2FzZSAndGVhbS1zaXRlJzpcclxuICAgICAgICAgICAgZGF0YS5wYXRoID0gYGh0dHBzOi8vJHt0aGlzLnRlYW1JZH0uZ2FtZWNoYW5nZXIuc3R1ZGlvLyMvYDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3dpdGNoKHRhcmdldF9sb2NhdGlvbikge1xyXG4gICAgICAgICAgY2FzZSAnYmJsJzpcclxuICAgICAgICAgICAgZGF0YS5wYXRoID0gYGh0dHBzOi8vZGV2ZWxvcC5nYW1lY2hhbmdlci5zdHVkaW8vYmlnLWJhc2gtYnVkZHkvIy8ke3BhdGh9YDtcclxuICAgICAgICAgIGNhc2UgJ3RlYW0tc2l0ZSc6XHJcbiAgICAgICAgICAgIGRhdGEucGF0aCA9IGBodHRwczovL2RldmVsb3AuZ2FtZWNoYW5nZXIuc3R1ZGlvLyR7dGhpcy50ZWFtSWR9LyMvYDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNlbmQgdGhlIHBhdGggaW5mbyBvZmYgdG8gYW55IHJlZ2lzdGVyZWQgaGFuZGxlclxyXG4gICAgdGhpcy5vblJvdXRlLmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=