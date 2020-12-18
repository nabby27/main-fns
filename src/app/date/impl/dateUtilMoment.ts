import moment from 'moment';
import 'moment/locale/es.js';
import 'moment/locale/en-gb.js';
import 'moment/locale/ca.js';
import { DateStringFormat } from '../types/dateStringFormat';
import { DateUtil } from '../util/date.util.interface';

export class DateUtilMoment implements DateUtil {

  addDays(daysToAdd: number, date: Date): Date {
    return moment(date).add(daysToAdd, 'days').toDate();
  }

  addMonths(monthsToAdd: number, date: Date): Date {
    return moment(date).add(monthsToAdd, 'months').toDate();
  }

  addYears(yearsToAdd: number, date: Date): Date {
    return moment(date).add(yearsToAdd, 'years').toDate();
  }

  dateToString(stringFormat: DateStringFormat, date: Date): string {
    return moment(date).format(stringFormat);
  }

  isAfter(date: Date, dateToCompare: Date): boolean {
    return moment(date).isAfter(dateToCompare);
  }

  isBefore(date: Date, dateToCompare: Date): boolean {
    return moment(date).isBefore(dateToCompare);
  }

  setEndTime(date: Date): Date {
    return moment(date).endOf('day').toDate();
  }

  setInitTime(date: Date): Date {
    return moment(date).startOf('day').toDate();
  }

  subtractDays(daysToSubtract: number, date: Date): Date {
    return moment(date).subtract(daysToSubtract, 'days').toDate();
  }

  subtractMonths(monthsToSubtract: number, date: Date): Date {
    return moment(date).subtract(monthsToSubtract, 'months').toDate();
  }

  subtractYears(yearsToSubtract: number, date: Date): Date {
    return moment(date).subtract(yearsToSubtract, 'years').toDate();
  }

}
