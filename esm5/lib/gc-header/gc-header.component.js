/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var GCHeaderComponent = /** @class */ (function () {
    function GCHeaderComponent() {
    }
    /**
     * @return {?}
     */
    GCHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    GCHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gc-header',
                    template: "<div class=\"header\" *ngIf=\"teamId\">\r\n  <img class=\"header-bg\" src=\"assets/gc-structure/images/{{ teamId }}/header/header.png\"/>\r\n  <img class=\"brand\" *ngIf=\"teamId !== 'melbourne-renegades'\" src=\"assets/gc-structure/images/teams/logo/{{ teamId }}.png\" />\r\n  <img class=\"brand\" *ngIf=\"teamId === 'melbourne-renegades'\" src=\"assets/gc-structure/images/teams/logo/{{ teamId }}-white.png\" />\r\n  <img class=\"title\" src=\"assets/gc-structure/images/{{ teamId }}/header/{{ headerTitle }}.png\" />\r\n  <img class=\"logo\" src=\"assets/gc-structure/images/logo.png\" />\r\n</div>",
                    styles: [".header{position:absolute;top:0;left:0;width:100vw;height:12vh;z-index:300}.header .brand{position:absolute;top:1.2vh;left:4vw;height:5vh;width:auto;max-width:20vw;-o-object-fit:contain;object-fit:contain}.header .header-bg{width:100%;height:100%;z-index:0}.header .logo{height:5vh;width:auto;position:absolute;right:4vw;top:1.2vh}.header .title{position:absolute;left:calc(50% + 2vw);-webkit-transform:translateX(-50%);transform:translateX(-50%);height:5vh;top:1.8vh}"]
                }] }
    ];
    /** @nocollapse */
    GCHeaderComponent.ctorParameters = function () { return []; };
    GCHeaderComponent.propDecorators = {
        teamId: [{ type: Input }],
        headerTitle: [{ type: Input }]
    };
    return GCHeaderComponent;
}());
export { GCHeaderComponent };
if (false) {
    /** @type {?} */
    GCHeaderComponent.prototype.teamId;
    /** @type {?} */
    GCHeaderComponent.prototype.headerTitle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2MtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2djLXN0cnVjdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9nYy1oZWFkZXIvZ2MtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFZRTtJQUFnQixDQUFDOzs7O0lBRWpCLG9DQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQWZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIscW1CQUF5Qzs7aUJBRTFDOzs7Ozt5QkFFRSxLQUFLOzhCQUdMLEtBQUs7O0lBUVIsd0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVpZLGlCQUFpQjs7O0lBQzVCLG1DQUNjOztJQUVkLHdDQUNtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnYy1oZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nYy1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2djLWhlYWRlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHQ0hlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICB0ZWFtSWQ6IHN0cmluZ1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGhlYWRlclRpdGxlOiBzdHJpbmdcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=