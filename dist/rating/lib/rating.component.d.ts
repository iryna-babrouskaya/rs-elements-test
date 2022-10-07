import { EventEmitter, OnInit } from '@angular/core';
import { RatingElement } from './rating-element.model';
import * as i0 from "@angular/core";
export declare class RatingComponent implements OnInit {
    activeValue: number | null;
    ratingCount: number;
    isStatic: boolean;
    large: boolean;
    medium: boolean;
    small: boolean;
    ratingElements: RatingElement[];
    partuallyActiveWidth: number;
    partuallyInactiveWidth: number;
    changedValue: EventEmitter<number>;
    ngOnInit(): void;
    changeHoverValue(currentIndex: number): void;
    changeActiveElementsState(currentIndex: number | null): void;
    clearHoverElements(): void;
    private setActiveElements;
    private setPartuallyActiveElement;
    private clearActiveElements;
    private initRatingControl;
    private updateActualValueControl;
    static ɵfac: i0.ɵɵFactoryDeclaration<RatingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RatingComponent, "rs-rating", never, { "activeValue": "activeValue"; "ratingCount": "ratingCount"; "isStatic": "isStatic"; "large": "large"; "medium": "medium"; "small": "small"; }, { "changedValue": "changedValue"; }, never, never>;
}
