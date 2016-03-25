import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { LowCalPipe } from './lowcal.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [LowCalPipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show all meals</option>
    <option value="lowCal">Show low calorie meals</option>
    <option value="highCal">Show high calorie meals</option>
  </select>
  <meal-display *ngFor="#currentMeal of mealList | lowCal:filterLowCal"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal"
    [keg]="currentMeal">
  </meal-display>
  <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
  </edit-meal-details>
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterLowCal: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log("child", clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMealInfo): void {
    this.mealList.push(
      new Meal(newMealInfo[0], newMealInfo[1], newMealInfo[2], this.mealList.length)
    );
  }
  onChange(filterOption) {
    this.filterLowCal = filterOption;
    console.log(this.filterLowCal);
  }
}
