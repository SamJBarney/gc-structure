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
                    template: "<div class=\"header\" *ngIf=\"teamId\">\n  <img class=\"header-bg\" src=\"assets/images/{{ teamId }}/header/header.png\"/>\n  <img class=\"brand\" *ngIf=\"teamId !== 'melbourne-renegades'\" src=\"assets/images/teams/logo/{{ teamId }}.png\" />\n  <img class=\"brand\" *ngIf=\"teamId === 'melbourne-renegades'\" src=\"assets/images/teams/logo/{{ teamId }}-white.png\" />\n  <img class=\"title\" src=\"assets/images/{{ teamId }}/header/{{ headerTitle }}.png\" />\n  <img class=\"logo\" src=\"assets/images/logo.png\" />\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2MtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2djLXN0cnVjdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9nYy1oZWFkZXIvZ2MtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFZRTtJQUFnQixDQUFDOzs7O0lBRWpCLG9DQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQWZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsd2hCQUF5Qzs7aUJBRTFDOzs7Ozt5QkFFRSxLQUFLOzhCQUdMLEtBQUs7O0lBUVIsd0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVpZLGlCQUFpQjs7O0lBQzVCLG1DQUNjOztJQUVkLHdDQUNtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnYy1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2MtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2MtaGVhZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR0NIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICB0ZWFtSWQ6IHN0cmluZ1xuXG4gIEBJbnB1dCgpXG4gIGhlYWRlclRpdGxlOiBzdHJpbmdcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==