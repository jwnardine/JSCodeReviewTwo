import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <p>app.component.ts</p>
        <h1>Meal List</h1>
        <meal-list
          [mealList]="meals"
          (onMealSelect)="mealWasSelected($event)">
        </meal-list>
      </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Pizza", "Two slices of pizza, one Hawaiian and the other plain cheese", 400, 0),
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log("parent", clickedMeal);
  }
}
