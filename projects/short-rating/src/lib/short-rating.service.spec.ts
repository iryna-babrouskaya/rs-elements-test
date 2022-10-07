import { TestBed } from '@angular/core/testing';

import { ShortRatingService } from './short-rating.service';

describe('ShortRatingService', () => {
  let service: ShortRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
