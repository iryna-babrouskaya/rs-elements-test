import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RatingComponent } from './rating.component';

const exportsComponent = [RatingComponent];

@NgModule({
  declarations: [
    ...exportsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...exportsComponent
  ]
})
export class RatingModule { }
