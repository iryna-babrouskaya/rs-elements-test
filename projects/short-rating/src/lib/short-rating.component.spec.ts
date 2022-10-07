import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortRatingComponent } from './short-rating.component';

describe('ShortRatingComponent', () => {
  let component: ShortRatingComponent;
  let fixture: ComponentFixture<ShortRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
