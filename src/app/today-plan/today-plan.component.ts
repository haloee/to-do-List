import { Component } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-today-plan',
  templateUrl: './today-plan.component.html',
  styleUrls: ['./today-plan.component.css']
})
export class TodayPlanComponent {
  selected: Date | null | undefined;
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  activities: { name: string, selected: boolean }[] = [
    { name: 'Training', selected: false },
    { name: 'Sleeping', selected: false },
    { name: 'Breakfast', selected: false },
    { name: 'Lunch', selected: false }
  ];

  onSave(): void {
    // Check if any activity is selected
    const anyActivitySelected = this.activities.some(activity => activity.selected);

    if (anyActivitySelected) {
      // Save selected activities to localStorage
      const selectedActivities = this.activities.filter(activity => activity.selected);
      localStorage.setItem('selectedActivities', JSON.stringify(selectedActivities));
      console.log('Selected activities saved to localStorage.');
    } else {
      console.log('No activity selected to save.');
    }
  }

  // Load saved activities from localStorage on component initialization
  ngOnInit(): void {
    const savedActivitiesJson = localStorage.getItem('selectedActivities');
    if (savedActivitiesJson) {
      const savedActivities = JSON.parse(savedActivitiesJson);
      this.activities.forEach(activity => {
        activity.selected = savedActivities.some((savedActivity: any) => savedActivity.name === activity.name);
      });
}}


}
