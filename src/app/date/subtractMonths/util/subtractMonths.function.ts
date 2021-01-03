import { SubtractMonths } from './subtractMonths.interface';

export class SubtractMonthsFunction {

  constructor(private subtractMonthsImpl: SubtractMonths) { }

  subtractMonths(monthsToSubtract: number, date: Date): Date {
    return this.subtractMonthsImpl.subtractMonths(monthsToSubtract, date);
  }

}
