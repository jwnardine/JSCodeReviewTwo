System.register(['angular2/core', './meal.component', './meal.model', './edit-meal-details.component', './new-meal.component', './lowcal.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, meal_component_1, meal_model_1, edit_meal_details_component_1, new_meal_component_1, lowcal_pipe_1;
    var MealListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meal_component_1_1) {
                meal_component_1 = meal_component_1_1;
            },
            function (meal_model_1_1) {
                meal_model_1 = meal_model_1_1;
            },
            function (edit_meal_details_component_1_1) {
                edit_meal_details_component_1 = edit_meal_details_component_1_1;
            },
            function (new_meal_component_1_1) {
                new_meal_component_1 = new_meal_component_1_1;
            },
            function (lowcal_pipe_1_1) {
                lowcal_pipe_1 = lowcal_pipe_1_1;
            }],
        execute: function() {
            MealListComponent = (function () {
                function MealListComponent() {
                    this.filterLowCal = "all";
                    this.onMealSelect = new core_1.EventEmitter();
                }
                MealListComponent.prototype.mealClicked = function (clickedMeal) {
                    console.log("child", clickedMeal);
                    this.selectedMeal = clickedMeal;
                    this.onMealSelect.emit(clickedMeal);
                };
                MealListComponent.prototype.createMeal = function (newMealInfo) {
                    this.mealList.push(new meal_model_1.Meal(newMealInfo[0], newMealInfo[1], newMealInfo[2], this.mealList.length));
                };
                MealListComponent.prototype.onChange = function (filterOption) {
                    this.filterLowCal = filterOption;
                    console.log(this.filterLowCal);
                };
                MealListComponent = __decorate([
                    core_1.Component({
                        selector: 'meal-list',
                        inputs: ['mealList'],
                        outputs: ['onMealSelect'],
                        pipes: [lowcal_pipe_1.LowCalPipe],
                        directives: [meal_component_1.MealComponent, edit_meal_details_component_1.EditMealDetailsComponent, new_meal_component_1.NewMealComponent],
                        template: "\n  <select (change)=\"onChange($event.target.value)\" class=\"filter\">\n    <option value=\"all\" selected=\"selected\">Show all meals</option>\n    <option value=\"lowCal\">Show low calorie meals</option>\n    <option value=\"highCal\">Show high calorie meals</option>\n  </select>\n  <meal-display *ngFor=\"#currentMeal of mealList | lowCal:filterLowCal\"\n    (click)=\"mealClicked(currentMeal)\"\n    [class.selected]=\"currentMeal === selectedMeal\"\n    [meal]=\"currentMeal\">\n  </meal-display>\n  <edit-meal-details *ngIf=\"selectedMeal\" [meal]=\"selectedMeal\">\n  </edit-meal-details>\n  <new-meal (onSubmitNewMeal)=\"createMeal($event)\"></new-meal>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MealListComponent);
                return MealListComponent;
            }());
            exports_1("MealListComponent", MealListComponent);
        }
    }
});
//# sourceMappingURL=meal-list.component.js.map