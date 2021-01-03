import { addDays } from 'date-fns';
import { AddDays } from '../util/addDays.interface';

export class AddDaysDateFns implements AddDays {

  addDays(daysToAdd: number, date: Date): Date {
    return addDays(date, daysToAdd);
  }

}
