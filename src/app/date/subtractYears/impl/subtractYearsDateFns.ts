import { subYears } from 'date-fns';
import { SubtractYears } from '../util/subtractYears.interface';

export class SubtractYearsDateFns implements SubtractYears {

  subtractYears(monthsToSubtract: number, date: Date): Date {
    return subYears(date, monthsToSubtract);
  }

}
