import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RatingElement } from './rating-element.model';
import * as i0 from "@angular/core";
export class RatingComponent {
    constructor() {
        this.activeValue = null;
        this.ratingCount = 5;
        this.isStatic = false;
        this.changedValue = new EventEmitter();
    }
    ngOnInit() {
        this.ratingElements = this.initRatingControl();
        this.updateActualValueControl();
    }
    changeHoverValue(currentIndex) {
        if (currentIndex === null) {
            return;
        }
        this.ratingElements.forEach((element, index) => {
            if (index <= currentIndex) {
                element.setHoverValue(true);
            }
        });
    }
    changeActiveElementsState(currentIndex) {
        if (currentIndex === null) {
            return;
        }
        const getRatingElement = this.ratingElements[currentIndex];
        const isNextRatingActiveAndExist = currentIndex + 1 < this.ratingElements.length
            ? this.ratingElements[currentIndex + 1].getActiveValue()
            : false;
        if (getRatingElement.getActiveValue() && !isNextRatingActiveAndExist) {
            this.clearActiveElements();
            this.clearHoverElements();
            this.changedValue.emit(0);
        }
        else {
            this.setActiveElements(currentIndex);
            this.changedValue.emit(currentIndex + 1);
        }
    }
    clearHoverElements() {
        this.ratingElements.forEach((element) => element.setHoverValue(false));
    }
    setActiveElements(currentIndex) {
        this.ratingElements.forEach((element, index) => {
            if (index <= currentIndex) {
                element.setActiveValue(true);
            }
            else {
                element.setActiveValue(false);
            }
        });
    }
    setPartuallyActiveElement(currentIndex) {
        this.ratingElements[currentIndex].setPartuallyActiveValue(true);
    }
    clearActiveElements() {
        this.ratingElements.forEach((element) => element.setActiveValue(false));
    }
    initRatingControl() {
        return Array(...Array(this.ratingCount)).map((_, index) => new RatingElement());
    }
    updateActualValueControl() {
        if (this.activeValue) {
            const intActiveValue = parseInt('' + this.activeValue, 10);
            const resultingIndexFromRatingValue = this.ratingElements
                ? intActiveValue - 1
                : null;
            this.changeActiveElementsState(resultingIndexFromRatingValue);
            if (this.isStatic &&
                parseInt('' + this.activeValue, 10) !== this.activeValue) {
                this.partuallyActiveWidth =
                    this.activeValue * 100 - intActiveValue * 100;
                this.partuallyInactiveWidth = 100 - this.partuallyActiveWidth;
                this.setPartuallyActiveElement(intActiveValue);
            }
        }
    }
}
RatingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: RatingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
RatingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: RatingComponent, selector: "rs-rating", inputs: { activeValue: "activeValue", ratingCount: "ratingCount", isStatic: "isStatic", large: "large", medium: "medium", small: "small" }, outputs: { changedValue: "changedValue" }, ngImport: i0, template: "", styles: [".rs-rating-block{display:flex;align-items:center;justify-content:space-around}.rs-rating-block__element{height:100%;width:100%;cursor:pointer}.rs-rating-block__element-partually-active,.rs-rating-block__element-active{background-image:url(../../../assets/images/round-spoons/spoon-round-red-icon.svg),none;background-size:cover;background-position:left;display:inline-block}.rs-rating-block__element-inactive,.rs-rating-block__element-partually-inactive{background-image:url(../../../assets/images/round-spoons/spoon-round-grey-icon.svg),none;background-size:cover;background-position:right;display:inline-block}.rs-rating-block .rs-element-wrapper-large{height:3rem;width:3rem;padding:.1em}.rs-rating-block .rs-element-wrapper-medium{height:2rem;width:2rem;padding:.1em}.rs-rating-block .rs-element-wrapper-small{height:1rem;width:1rem;padding:.1em}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: RatingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rs-rating', template: "", styles: [".rs-rating-block{display:flex;align-items:center;justify-content:space-around}.rs-rating-block__element{height:100%;width:100%;cursor:pointer}.rs-rating-block__element-partually-active,.rs-rating-block__element-active{background-image:url(../../../assets/images/round-spoons/spoon-round-red-icon.svg),none;background-size:cover;background-position:left;display:inline-block}.rs-rating-block__element-inactive,.rs-rating-block__element-partually-inactive{background-image:url(../../../assets/images/round-spoons/spoon-round-grey-icon.svg),none;background-size:cover;background-position:right;display:inline-block}.rs-rating-block .rs-element-wrapper-large{height:3rem;width:3rem;padding:.1em}.rs-rating-block .rs-element-wrapper-medium{height:2rem;width:2rem;padding:.1em}.rs-rating-block .rs-element-wrapper-small{height:1rem;width:1rem;padding:.1em}\n"] }]
        }], propDecorators: { activeValue: [{
                type: Input
            }], ratingCount: [{
                type: Input
            }], isStatic: [{
                type: Input
            }], large: [{
                type: Input
            }], medium: [{
                type: Input
            }], small: [{
                type: Input
            }], changedValue: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3JhdGluZy9zcmMvbGliL3JhdGluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9yYXRpbmcvc3JjL2xpYi9yYXRpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBT3ZELE1BQU0sT0FBTyxlQUFlO0lBTDVCO1FBT1MsZ0JBQVcsR0FBa0IsSUFBSSxDQUFDO1FBRWxDLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRWhCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFZZCxpQkFBWSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO0tBMkYzRTtJQXpGQyxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsWUFBb0I7UUFDMUMsSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQ3pCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBc0IsRUFBRSxLQUFhLEVBQUUsRUFBRTtZQUNwRSxJQUFJLEtBQUssSUFBSSxZQUFZLEVBQUU7Z0JBQ3pCLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDN0I7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSx5QkFBeUIsQ0FBQyxZQUEyQjtRQUMxRCxJQUFJLFlBQVksS0FBSyxJQUFJLEVBQUU7WUFDekIsT0FBTztTQUNSO1FB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QUM5RCxJQUFJLENBQUMseUJBQXlCLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDaEQ7U0FDRjtJQUNILENBQUM7OzRHQTVHVSxlQUFlO2dHQUFmLGVBQWUsd09DUjVCLEVBQUE7MkZEUWEsZUFBZTtrQkFMM0IsU0FBUzsrQkFDRSxXQUFXOzhCQU1kLFdBQVc7c0JBRGpCLEtBQUs7Z0JBR0MsV0FBVztzQkFEakIsS0FBSztnQkFHQyxRQUFRO3NCQURkLEtBQUs7Z0JBR0MsS0FBSztzQkFEWCxLQUFLO2dCQUdDLE1BQU07c0JBRFosS0FBSztnQkFHQyxLQUFLO3NCQURYLEtBQUs7Z0JBT0ksWUFBWTtzQkFBckIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJhdGluZ0VsZW1lbnQgfSBmcm9tICcuL3JhdGluZy1lbGVtZW50Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncnMtcmF0aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICdyYXRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsncmF0aW5nLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFJhdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBhY3RpdmVWYWx1ZTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByYXRpbmdDb3VudCA9IDU7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpc1N0YXRpYyA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgbGFyZ2UhOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBwdWJsaWMgbWVkaXVtITogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcHVibGljIHNtYWxsITogYm9vbGVhbjtcblxuICBwdWJsaWMgcmF0aW5nRWxlbWVudHMhOiBSYXRpbmdFbGVtZW50W107XG4gIHB1YmxpYyBwYXJ0dWFsbHlBY3RpdmVXaWR0aCE6IG51bWJlcjtcbiAgcHVibGljIHBhcnR1YWxseUluYWN0aXZlV2lkdGghOiBudW1iZXI7XG5cbiAgQE91dHB1dCgpIGNoYW5nZWRWYWx1ZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJhdGluZ0VsZW1lbnRzID0gdGhpcy5pbml0UmF0aW5nQ29udHJvbCgpO1xuICAgIHRoaXMudXBkYXRlQWN0dWFsVmFsdWVDb250cm9sKCk7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlSG92ZXJWYWx1ZShjdXJyZW50SW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChjdXJyZW50SW5kZXggPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnJhdGluZ0VsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQ6IFJhdGluZ0VsZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChpbmRleCA8PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgZWxlbWVudC5zZXRIb3ZlclZhbHVlKHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZUFjdGl2ZUVsZW1lbnRzU3RhdGUoY3VycmVudEluZGV4OiBudW1iZXIgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFJhdGluZ0VsZW1lbnQ6IFJhdGluZ0VsZW1lbnQgPSB0aGlzLnJhdGluZ0VsZW1lbnRzW2N1cnJlbnRJbmRleF07XG4gICAgY29uc3QgaXNOZXh0UmF0aW5nQWN0aXZlQW5kRXhpc3QgPVxuICAgICAgY3VycmVudEluZGV4ICsgMSA8IHRoaXMucmF0aW5nRWxlbWVudHMubGVuZ3RoXG4gICAgICAgID8gdGhpcy5yYXRpbmdFbGVtZW50c1tjdXJyZW50SW5kZXggKyAxXS5nZXRBY3RpdmVWYWx1ZSgpXG4gICAgICAgIDogZmFsc2U7XG5cbiAgICBpZiAoZ2V0UmF0aW5nRWxlbWVudC5nZXRBY3RpdmVWYWx1ZSgpICYmICFpc05leHRSYXRpbmdBY3RpdmVBbmRFeGlzdCkge1xuICAgICAgdGhpcy5jbGVhckFjdGl2ZUVsZW1lbnRzKCk7XG4gICAgICB0aGlzLmNsZWFySG92ZXJFbGVtZW50cygpO1xuXG4gICAgICB0aGlzLmNoYW5nZWRWYWx1ZS5lbWl0KDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldEFjdGl2ZUVsZW1lbnRzKGN1cnJlbnRJbmRleCk7XG5cbiAgICAgIHRoaXMuY2hhbmdlZFZhbHVlLmVtaXQoY3VycmVudEluZGV4ICsgMSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsZWFySG92ZXJFbGVtZW50cygpOiB2b2lkIHtcbiAgICB0aGlzLnJhdGluZ0VsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQ6IFJhdGluZ0VsZW1lbnQpID0+XG4gICAgICBlbGVtZW50LnNldEhvdmVyVmFsdWUoZmFsc2UpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0QWN0aXZlRWxlbWVudHMoY3VycmVudEluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnJhdGluZ0VsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQ6IFJhdGluZ0VsZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChpbmRleCA8PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBY3RpdmVWYWx1ZSh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QWN0aXZlVmFsdWUoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHByaXZhdGUgc2V0UGFydHVhbGx5QWN0aXZlRWxlbWVudChjdXJyZW50SW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucmF0aW5nRWxlbWVudHNbY3VycmVudEluZGV4XS5zZXRQYXJ0dWFsbHlBY3RpdmVWYWx1ZSh0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJBY3RpdmVFbGVtZW50cygpOiB2b2lkIHtcbiAgICB0aGlzLnJhdGluZ0VsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQ6IFJhdGluZ0VsZW1lbnQpID0+XG4gICAgICBlbGVtZW50LnNldEFjdGl2ZVZhbHVlKGZhbHNlKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGluaXRSYXRpbmdDb250cm9sKCk6IFJhdGluZ0VsZW1lbnRbXSB7XG4gICAgcmV0dXJuIEFycmF5KC4uLkFycmF5KHRoaXMucmF0aW5nQ291bnQpKS5tYXAoXG4gICAgICAoXywgaW5kZXgpID0+IG5ldyBSYXRpbmdFbGVtZW50KClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVBY3R1YWxWYWx1ZUNvbnRyb2woKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aXZlVmFsdWUpIHtcbiAgICAgIGNvbnN0IGludEFjdGl2ZVZhbHVlID0gcGFyc2VJbnQoJycgKyB0aGlzLmFjdGl2ZVZhbHVlLCAxMCk7XG4gICAgICBjb25zdCByZXN1bHRpbmdJbmRleEZyb21SYXRpbmdWYWx1ZSA9IHRoaXMucmF0aW5nRWxlbWVudHNcbiAgICAgICAgPyBpbnRBY3RpdmVWYWx1ZSAtIDFcbiAgICAgICAgOiBudWxsO1xuICAgICAgdGhpcy5jaGFuZ2VBY3RpdmVFbGVtZW50c1N0YXRlKHJlc3VsdGluZ0luZGV4RnJvbVJhdGluZ1ZhbHVlKTtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5pc1N0YXRpYyAmJlxuICAgICAgICBwYXJzZUludCgnJyArIHRoaXMuYWN0aXZlVmFsdWUsIDEwKSAhPT0gdGhpcy5hY3RpdmVWYWx1ZVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMucGFydHVhbGx5QWN0aXZlV2lkdGggPVxuICAgICAgICAgIHRoaXMuYWN0aXZlVmFsdWUgKiAxMDAgLSBpbnRBY3RpdmVWYWx1ZSAqIDEwMDtcbiAgICAgICAgdGhpcy5wYXJ0dWFsbHlJbmFjdGl2ZVdpZHRoID0gMTAwIC0gdGhpcy5wYXJ0dWFsbHlBY3RpdmVXaWR0aDtcbiAgICAgICAgdGhpcy5zZXRQYXJ0dWFsbHlBY3RpdmVFbGVtZW50KGludEFjdGl2ZVZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiJdfQ==