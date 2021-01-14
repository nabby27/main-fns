import { AddDays } from '../util/addDays.interface';

export class AddDaysOwn implements AddDays {

  addDays(daysToAdd: number, date: Date): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + Math.abs(daysToAdd));

    return result;
  }

}
