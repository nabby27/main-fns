import { EndOfDay } from '../util/endOfDay.interface';

export class EndOfDayOwn implements EndOfDay {

  endOfDay(date: Date): Date {
    const result = new Date(date);
    result.setHours(23, 59, 59, 999);

    return result;
  }

}
