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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2MtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2djLXN0cnVjdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9nYy1mb290ZXIvZ2MtZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8saUJBQWlCO0lBYTVCO1FBRkEsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFBO0lBRS9CLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLGVBQXVCLEVBQUUsT0FBZSxFQUFFOzs7WUFFdEQsSUFBSSxHQUFHO1lBQ1QsSUFBSSxFQUFFLFVBQVU7WUFDaEIsSUFBSSxFQUFFLElBQUk7U0FDWDtRQUVELDRFQUE0RTtRQUM1RSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssZUFBZSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDOztnQkFFbkIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSTtZQUU5QiwyREFBMkQ7WUFDM0QsaUNBQWlDOztZQURqQywyREFBMkQ7WUFDM0QsaUNBQWlDO1lBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLG9DQUFvQyxDQUFDLEVBQUU7Z0JBQ3pELFFBQU8sZUFBZSxFQUFFO29CQUN0QixLQUFLLEtBQUs7d0JBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyxvQ0FBb0MsSUFBSSxFQUFFLENBQUM7b0JBQ3pELEtBQUssV0FBVzt3QkFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsSUFBSSxDQUFDLE1BQU0sd0JBQXdCLENBQUM7aUJBQzlEO2FBQ0Y7aUJBQU07Z0JBQ0wsUUFBTyxlQUFlLEVBQUU7b0JBQ3RCLEtBQUssS0FBSzt3QkFDUixJQUFJLENBQUMsSUFBSSxHQUFHLHVEQUF1RCxJQUFJLEVBQUUsQ0FBQztvQkFDNUUsS0FBSyxXQUFXO3dCQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsc0NBQXNDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztpQkFDdEU7YUFDRjtTQUdGO1FBRUQsbURBQW1EO1FBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7OztZQTNERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHk3QkFBeUM7O2FBRTFDOzs7OztxQkFFRSxLQUFLOzJCQUdMLEtBQUs7dUJBR0wsS0FBSztzQkFHTCxNQUFNOzs7O0lBVFAsbUNBQ2M7O0lBRWQseUNBQ29COztJQUVwQixxQ0FDZ0I7O0lBRWhCLG9DQUMrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2MtZm9vdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2MtZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nYy1mb290ZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR0NGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgdGVhbUlkOiBzdHJpbmdcclxuXHJcbiAgQElucHV0KClcclxuICBzZWxlY3RlZEl0ZW06IG51bWJlclxyXG5cclxuICBASW5wdXQoKVxyXG4gIGxvY2F0aW9uOiBzdHJpbmdcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgb25Sb3V0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBvbk1lbnVJdGVtQ2xpY2tlZCh0YXJnZXRfbG9jYXRpb246IHN0cmluZywgcGF0aDogc3RyaW5nID0gJycpIDogdm9pZCB7XHJcbiAgICAvLyBEZWZhdWx0IHNldHRpbmdzXHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgdHlwZTogJ2ludGVybmFsJyxcclxuICAgICAgcGF0aDogcGF0aFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBJZiB0aGUgdGFyZ2V0IGxvY2F0aW9uIGlzIGFub3RoZXIgYXBwLCBidWlsZCBhbiBleHRlcm5hbCB1cmwgdG8gcGFzcyBiYWNrXHJcbiAgICBpZiAodGhpcy5sb2NhdGlvbiAhPT0gdGFyZ2V0X2xvY2F0aW9uKSB7XHJcbiAgICAgIGRhdGEudHlwZSA9ICdleHRlcm5hbCc7XHJcblxyXG4gICAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWZcclxuXHJcbiAgICAgIC8vIEJ1aWxkIGEgZGlmZmVyZW50IHVybCBkZXBlbmRpbmcgb24gd2hlcmUgYXBwIG5lZWRzIHRvIGdvXHJcbiAgICAgIC8vIFRoaXMgYmxvY2sgb2YgY29kZSBpcyBob3JyaWJsZVxyXG4gICAgICBpZiAoIXVybC5zdGFydHNXaXRoKCdodHRwczovL2RldmVsb3AuZ2FtZWNoYW5nZXIuc3R1ZGlvJykpIHtcclxuICAgICAgICBzd2l0Y2godGFyZ2V0X2xvY2F0aW9uKSB7XHJcbiAgICAgICAgICBjYXNlICdiYmwnOlxyXG4gICAgICAgICAgICBkYXRhLnBhdGggPSBgaHR0cHM6Ly9iYmwuZ2FtZWNoYW5nZXIuc3R1ZGlvLyMvJHtwYXRofWA7XHJcbiAgICAgICAgICBjYXNlICd0ZWFtLXNpdGUnOlxyXG4gICAgICAgICAgICBkYXRhLnBhdGggPSBgaHR0cHM6Ly8ke3RoaXMudGVhbUlkfS5nYW1lY2hhbmdlci5zdHVkaW8vIy9gO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzd2l0Y2godGFyZ2V0X2xvY2F0aW9uKSB7XHJcbiAgICAgICAgICBjYXNlICdiYmwnOlxyXG4gICAgICAgICAgICBkYXRhLnBhdGggPSBgaHR0cHM6Ly9kZXZlbG9wLmdhbWVjaGFuZ2VyLnN0dWRpby9iaWctYmFzaC1idWRkeS8jLyR7cGF0aH1gO1xyXG4gICAgICAgICAgY2FzZSAndGVhbS1zaXRlJzpcclxuICAgICAgICAgICAgZGF0YS5wYXRoID0gYGh0dHBzOi8vZGV2ZWxvcC5nYW1lY2hhbmdlci5zdHVkaW8vJHt0aGlzLnRlYW1JZH0vIy9gO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2VuZCB0aGUgcGF0aCBpbmZvIG9mZiB0byBhbnkgcmVnaXN0ZXJlZCBoYW5kbGVyXHJcbiAgICB0aGlzLm9uUm91dGUuZW1pdChkYXRhKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==