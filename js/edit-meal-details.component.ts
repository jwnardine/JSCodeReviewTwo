import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
   <div>
    <h3>Edit meal name:</h3>
      <input [(ngModel)]="meal.name" class="col-sm-8 input-lg meal-form"/>
    <hr>
    <p>Description:</p>
      <input [(ngModel)]="meal.description" class="col-sm-8 input-lg meal-form"/>

    <p>Calories:</p>
    <input type="number" [(ngModel)]="meal.calories" class="col-sm-8 input-lg meal-form"/>
    </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
