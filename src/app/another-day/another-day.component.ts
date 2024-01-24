import { Component } from '@angular/core';

@Component({
  selector: 'app-another-day',
  templateUrl: './another-day.component.html',
  styleUrls: ['./another-day.component.css']
})
export class AnotherDayComponent {
  selectedDate: Date | null = null;
  selected: Date | null=null;

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
