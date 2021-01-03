import { addMonths } from 'date-fns';
import { AddMonths } from '../util/addMonths.interface';

export class AddMonthsDateFns implements AddMonths {

  addMonths(monthsToAdd: number, date: Date): Date {
    return addMonths(date, monthsToAdd);
  }

}
