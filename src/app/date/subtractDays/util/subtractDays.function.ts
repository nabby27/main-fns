import { SubtractDays } from './subtractDays.interface';

export class SubtractDaysFunction {

  constructor(private subtractDaysImpl: SubtractDays) { }

  subtractDays(daysToSubtract: number, date: Date): Date {
    return this.subtractDaysImpl.subtractDays(daysToSubtract, date);
  }

}
