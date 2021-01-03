import { SubtractYears } from './subtractYears.interface';

export class SubtractYearsFunction {

  constructor(private subtractYearsImpl: SubtractYears) { }

  subtractYears(yearsToSubtract: number, date: Date): Date {
    return this.subtractYearsImpl.subtractYears(yearsToSubtract, date);
  }

}
