import { AddMonths } from '../util/addMonths.interface';

export class AddMonthsOwn implements AddMonths {

  addMonths(monthsToAdd: number, date: Date): Date {
    const result = new Date(date);
    result.setMonth(result.getMonth() + Math.abs(monthsToAdd));

    return result;
  }

}
