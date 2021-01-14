import { SubtractDays } from '../util/subtractDays.interface';

export class SubtractDaysOwn implements SubtractDays {

  subtractDays(daysToSubtract: number, date: Date): Date {
    const result = new Date(date);
    result.setDate(result.getDate() - Math.abs(daysToSubtract));

    return result;
  }

}
