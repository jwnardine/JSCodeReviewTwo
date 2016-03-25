import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `

      <div>
      <label>Food: {{ meal.name }} | Description: {{ meal.description }} | Calories: {{ meal.calories }}</label>
      </div>

  `
})
export class MealComponent {
  public meal: Meal;
  }

checkCalCount() {
  if(this.meal.calories >= 300) {
    this.meal.lowCal = false;
    console.log("HighCal")
    } else {
    this.meal.lowCal = true;
  }
}
