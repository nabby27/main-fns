import { endOfDay } from 'date-fns';
import { EndOfDay } from '../util/endOfDay.interface';

export class EndOfDayDateFns implements EndOfDay {

  endOfDay(date: Date): Date {
    return endOfDay(date);
  }

}
