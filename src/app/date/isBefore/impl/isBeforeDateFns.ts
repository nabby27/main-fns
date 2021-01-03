import { isBefore } from 'date-fns';
import { IsBefore } from '../util/isBefore.interface';

export class IsBeforeDateFns implements IsBefore {

  isBefore(date: Date, dateToCompare: Date): boolean {
    return isBefore(date, dateToCompare);
  }

}
