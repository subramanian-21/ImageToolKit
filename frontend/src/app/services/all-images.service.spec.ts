import { TestBed } from '@angular/core/testing';

import { AllImagesService } from './all-images.service';

describe('AllImagesService', () => {
  let service: AllImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
