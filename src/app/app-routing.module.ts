import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayPlanComponent } from './today-plan/today-plan.component';
import { AnotherDayComponent } from './another-day/another-day.component';

const routes: Routes = [
  {path:'app-today-plan',component:TodayPlanComponent},
  {path:'app-another-day',component:AnotherDayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
