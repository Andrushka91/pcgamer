import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopDetailsComponent } from './desktop-details.component';

describe('DesktopDetailsComponent', () => {
  let component: DesktopDetailsComponent;
  let fixture: ComponentFixture<DesktopDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
