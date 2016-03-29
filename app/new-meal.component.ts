import {Component, EventEmitter} from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="new-meal-form-orange">
      <h3>Create Meal:</h3>
      <input placeholder="Name" class="col-sm-8 input-lg" #newName>
      <hr>
      <p>Description NEW</p>
      <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
      <hr>
      <input type="number" placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
      <button (click)="addMeal(newName, newDescription, newCalories)" class="btn-success btn-lg add-button">Add Meal!</button>
    </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(newMealName: HTMLInputElement, newMealDescription: HTMLInputElement, newMealCalories: HTMLInputElement){
    var values = [newMealName.value, newMealDescription.value, newMealCalories.value];
    this.onSubmitNewMeal.emit(values);
    console.log(values);
    newMealName.value = "";
    newMealDescription.value = "";
    newMealCalories.value = "";
  }
}
