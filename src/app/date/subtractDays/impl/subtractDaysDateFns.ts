import { subDays } from 'date-fns';
import { SubtractDays } from '../util/subtractDays.interface';

export class SubtractDaysDateFns implements SubtractDays {

  subtractDays(daysToSubtract: number, date: Date): Date {
    return subDays(date, daysToSubtract);
  }

}
