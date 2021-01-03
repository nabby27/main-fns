import { AddDays } from './addDays.interface';

export class AddDaysFunction {

  constructor(private addDaysImpl: AddDays) { }

  addDays(daysToAdd: number, date: Date): Date {
    return this.addDaysImpl.addDays(daysToAdd, date);
  }

}
