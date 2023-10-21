import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrayscaleComponent } from './grayscale.component';

describe('GrayscaleComponent', () => {
  let component: GrayscaleComponent;
  let fixture: ComponentFixture<GrayscaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrayscaleComponent]
    });
    fixture = TestBed.createComponent(GrayscaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
