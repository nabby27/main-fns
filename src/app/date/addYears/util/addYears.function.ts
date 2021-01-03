import { AddYears } from './addYears.interface';

export class AddYearsFunction {

  constructor(private addYearsImpl: AddYears) { }

  addYears(yearsToAdd: number, date: Date): Date {
    return this.addYearsImpl.addYears(yearsToAdd, date);
  }

}
