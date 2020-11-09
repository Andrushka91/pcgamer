import { TestBed } from '@angular/core/testing';

import { DesktopServiceService } from './desktop-service.service';

describe('DesktopServiceService', () => {
  let service: DesktopServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesktopServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
