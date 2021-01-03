import { addYears } from 'date-fns';
import { AddYears } from '../util/addYears.interface';

export class AddYearsDateFns implements AddYears {

  addYears(yearsToAdd: number, date: Date): Date {
    return addYears(date, yearsToAdd);
  }

}
