/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class GCHeaderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
GCHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'gc-header',
                template: "<div class=\"header\" *ngIf=\"teamId\">\r\n  <img class=\"header-bg\" src=\"assets/gc-structure/images/{{ teamId }}/header/header.png\"/>\r\n  <img class=\"brand\" *ngIf=\"teamId !== 'melbourne-renegades'\" src=\"assets/gc-structure/images/teams/logo/{{ teamId }}.png\" />\r\n  <img class=\"brand\" *ngIf=\"teamId === 'melbourne-renegades'\" src=\"assets/gc-structure/images/teams/logo/{{ teamId }}-white.png\" />\r\n  <img class=\"title\" src=\"assets/gc-structure/images/{{ teamId }}/header/{{ headerTitle }}.png\" />\r\n  <img class=\"logo\" src=\"assets/gc-structure/images/logo.png\" />\r\n</div>",
                styles: [".header{position:absolute;top:0;left:0;width:100vw;height:12vh;z-index:300}.header .brand{position:absolute;top:1.2vh;left:4vw;height:5vh;width:auto;max-width:20vw;-o-object-fit:contain;object-fit:contain}.header .header-bg{width:100%;height:100%;z-index:0}.header .logo{height:5vh;width:auto;position:absolute;right:4vw;top:1.2vh}.header .title{position:absolute;left:calc(50% + 2vw);-webkit-transform:translateX(-50%);transform:translateX(-50%);height:5vh;top:1.8vh}"]
            }] }
];
/** @nocollapse */
GCHeaderComponent.ctorParameters = () => [];
GCHeaderComponent.propDecorators = {
    teamId: [{ type: Input }],
    headerTitle: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GCHeaderComponent.prototype.teamId;
    /** @type {?} */
    GCHeaderComponent.prototype.headerTitle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2MtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2djLXN0cnVjdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9nYy1oZWFkZXIvZ2MtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLGlCQUFpQjtJQU81QixnQkFBZ0IsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixxbUJBQXlDOzthQUUxQzs7Ozs7cUJBRUUsS0FBSzswQkFHTCxLQUFLOzs7O0lBSE4sbUNBQ2M7O0lBRWQsd0NBQ21CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2djLWhlYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2djLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2MtaGVhZGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEdDSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIHRlYW1JZDogc3RyaW5nXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaGVhZGVyVGl0bGU6IHN0cmluZ1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==