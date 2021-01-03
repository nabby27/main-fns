import { subMonths } from 'date-fns';
import { SubtractMonths } from '../util/subtractMonths.interface';

export class SubtractMonthsDateFns implements SubtractMonths {

  subtractMonths(monthsToSubtract: number, date: Date): Date {
    return subMonths(date, monthsToSubtract);
  }

}
