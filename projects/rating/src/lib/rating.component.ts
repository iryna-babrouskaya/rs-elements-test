import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RatingElement } from './rating-element.model';

@Component({
  selector: 'rs-rating',
  templateUrl: 'rating.component.html',
  styleUrls: ['rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input()
  public activeValue: number | null = null;
  @Input()
  public ratingCount = 5;
  @Input()
  public isStatic = false;
  @Input()
  public large!: boolean;
  @Input()
  public medium!: boolean;
  @Input()
  public small!: boolean;

  public ratingElements!: RatingElement[];
  public partuallyActiveWidth!: number;
  public partuallyInactiveWidth!: number;

  @Output() changedValue: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    this.ratingElements = this.initRatingControl();
    this.updateActualValueControl();
  }

  public changeHoverValue(currentIndex: number): void {
    if (currentIndex === null) {
      return;
    }

    this.ratingElements.forEach((element: RatingElement, index: number) => {
      if (index <= currentIndex) {
        element.setHoverValue(true);
      }
    });
  }

  public changeActiveElementsState(currentIndex: number | null): void {
    if (currentIndex === null) {
      return;
    }

    const getRatingElement: RatingElement = this.ratingElements[currentIndex];
    const isNextRatingActiveAndExist =
      currentIndex + 1 < this.ratingElements.length
        ? this.ratingElements[currentIndex + 1].getActiveValue()
        : false;

    if (getRatingElement.getActiveValue() && !isNextRatingActiveAndExist) {
      this.clearActiveElements();
      this.clearHoverElements();

      this.changedValue.emit(0);
    } else {
      this.setActiveElements(currentIndex);

      this.changedValue.emit(currentIndex + 1);
    }
  }

  public clearHoverElements(): void {
    this.ratingElements.forEach((element: RatingElement) =>
      element.setHoverValue(false)
    );
  }

  private setActiveElements(currentIndex: number): void {
    this.ratingElements.forEach((element: RatingElement, index: number) => {
      if (index <= currentIndex) {
        element.setActiveValue(true);
      } else {
        element.setActiveValue(false);
      }
    });
  }
  private setPartuallyActiveElement(currentIndex: number): void {
    this.ratingElements[currentIndex].setPartuallyActiveValue(true);
  }

  private clearActiveElements(): void {
    this.ratingElements.forEach((element: RatingElement) =>
      element.setActiveValue(false)
    );
  }

  private initRatingControl(): RatingElement[] {
    return Array(...Array(this.ratingCount)).map(
      (_, index) => new RatingElement()
    );
  }

  private updateActualValueControl(): void {
    if (this.activeValue) {
      const intActiveValue = parseInt('' + this.activeValue, 10);
      const resultingIndexFromRatingValue = this.ratingElements
        ? intActiveValue - 1
        : null;
      this.changeActiveElementsState(resultingIndexFromRatingValue);
      if (
        this.isStatic &&
        parseInt('' + this.activeValue, 10) !== this.activeValue
      ) {
        this.partuallyActiveWidth =
          this.activeValue * 100 - intActiveValue * 100;
        this.partuallyInactiveWidth = 100 - this.partuallyActiveWidth;
        this.setPartuallyActiveElement(intActiveValue);
      }
    }
  }
}
