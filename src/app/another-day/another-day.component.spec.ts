import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherDayComponent } from './another-day.component';

describe('AnotherDayComponent', () => {
  let component: AnotherDayComponent;
  let fixture: ComponentFixture<AnotherDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnotherDayComponent]
    });
    fixture = TestBed.createComponent(AnotherDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
