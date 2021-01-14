import { SubtractMonths } from '../util/subtractMonths.interface';

export class SubtractMonthsOwn implements SubtractMonths {

  subtractMonths(monthsToSubtract: number, date: Date): Date {
    const result = new Date(date);
    result.setMonth(result.getMonth() - Math.abs(monthsToSubtract));

    return result;
  }

}
