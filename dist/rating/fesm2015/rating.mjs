import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class RatingService {
    constructor() { }
}
RatingService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: RatingService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
RatingService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: RatingService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: RatingService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class RatingElement {
    constructor(isActive = false, isHovered = false, isPartyallyActive = false) {
        this.isActive = isActive;
        this.isHovered = isHovered;
        this.isPartyallyActive = isPartyallyActive;
    }
    setActiveValue(value) {
        this.isActive = value;
    }
    setPartuallyActiveValue(value) {
        this.isPartyallyActive = value;
    }
    getActiveValue() {
        return this.isActive;
    }
    getPartuallyActiveValue() {
        return this.isPartyallyActive;
    }
    setHoverValue(value) {
        this.isHovered = value;
    }
    getHoverValue() {
        return this.isHovered;
    }
}

class RatingComponent {
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

const exportsComponent = [RatingComponent];
class RatingModule {
}
RatingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: RatingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RatingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: RatingModule, declarations: [RatingComponent], imports: [CommonModule], exports: [RatingComponent] });
RatingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: RatingModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: RatingModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ...exportsComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        ...exportsComponent
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { RatingComponent, RatingElement, RatingModule, RatingService };
//# sourceMappingURL=rating.mjs.map
