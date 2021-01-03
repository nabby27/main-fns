import { startOfDay } from 'date-fns';
import { StartOfDay } from '../util/startOfDay.interface';

export class StartOfDayDateFns implements StartOfDay {

  startOfDay(date: Date): Date {
    return startOfDay(date);
  }

}
