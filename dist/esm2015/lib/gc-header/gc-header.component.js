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
                template: "<div class=\"header\" *ngIf=\"teamId\">\n  <img class=\"header-bg\" src=\"assets/images/{{ teamId }}/header/header.png\"/>\n  <img class=\"brand\" *ngIf=\"teamId !== 'melbourne-renegades'\" src=\"assets/images/teams/logo/{{ teamId }}.png\" />\n  <img class=\"brand\" *ngIf=\"teamId === 'melbourne-renegades'\" src=\"assets/images/teams/logo/{{ teamId }}-white.png\" />\n  <img class=\"title\" src=\"assets/images/{{ teamId }}/header/{{ headerTitle }}.png\" />\n  <img class=\"logo\" src=\"assets/images/logo.png\" />\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2MtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2djLXN0cnVjdHVyZS8iLCJzb3VyY2VzIjpbImxpYi9nYy1oZWFkZXIvZ2MtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLGlCQUFpQjtJQU81QixnQkFBZ0IsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQix3aEJBQXlDOzthQUUxQzs7Ozs7cUJBRUUsS0FBSzswQkFHTCxLQUFLOzs7O0lBSE4sbUNBQ2M7O0lBRWQsd0NBQ21CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2djLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9nYy1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nYy1oZWFkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHQ0hlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHRlYW1JZDogc3RyaW5nXG5cbiAgQElucHV0KClcbiAgaGVhZGVyVGl0bGU6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19