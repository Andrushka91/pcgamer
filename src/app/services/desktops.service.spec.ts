import { TestBed } from '@angular/core/testing';

import { DesktopsService } from './desktops.service';

describe('DesktopsService', () => {
  let service: DesktopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesktopsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
