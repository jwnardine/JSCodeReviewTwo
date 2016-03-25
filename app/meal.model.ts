export class Meal {
  public lowCal: boolean = false;
  constructor(public name: string, public description: string, public calories: number, public id: number) {
  }
}
