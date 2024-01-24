import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayPlanComponent } from './today-plan.component';

describe('TodayPlanComponent', () => {
  let component: TodayPlanComponent;
  let fixture: ComponentFixture<TodayPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodayPlanComponent]
    });
    fixture = TestBed.createComponent(TodayPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
