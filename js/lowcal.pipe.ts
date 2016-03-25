import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
   name: "lowCal",
   pure: false
})
export class LowCalPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredMealState = args[0];
    if(desiredMealState === "lowCal") {
      return input.filter(function(meal) {
        return meal.lowCal;
      });
    } else if (desiredMealState === "highCal") {
      return input.filter((meal) => {
        return !meal.lowCal;
      });
    } else {
      return input;
    }

  }
}
