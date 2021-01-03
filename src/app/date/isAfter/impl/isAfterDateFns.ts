import { isAfter } from 'date-fns';
import { IsAfter } from '../util/isAfter.interface';

export class IsAfterDateFns implements IsAfter {

  isAfter(date: Date, dateToCompare: Date): boolean {
    return isAfter(date, dateToCompare);
  }

}
