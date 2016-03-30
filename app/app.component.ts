import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <div class="app-blue">
          <h1>Meal List</h1>
          <meal-list
            [mealList]="meals"
            (onMealSelect)="mealWasSelected($event)">
            </meal-list>
      </div>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Pizza", "Two slices of pizza, one Hawaiian and the other plain cheese", 400, 0),
      new Meal("Asparagus and Hummus", "Sabra brand hummus. Yummy!", 150, 1),
      new Meal("Bacon Cheesburger", "With extra bacon because I don't care anymore", 550, 2),
      new Meal("Fruit Salad", "Berries and cantaloupe. The cantaloupe was ehh.", 275, 3)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log("parent", clickedMeal);
  }
}
