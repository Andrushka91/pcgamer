import { TestBed } from '@angular/core/testing';

import { LaptopServiceService } from './laptop-service.service';

describe('LaptopServiceService', () => {
  let service: LaptopServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaptopServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
