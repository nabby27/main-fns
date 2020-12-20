import { addDays, addMonths, addYears, endOfDay, format, isAfter, isBefore, startOfDay, subDays, subMonths, subYears } from 'date-fns';
import { DateStringFormat } from '../types/dateStringFormat';
import { DateUtil } from '../util/date.util.interface';

export class DateUtilDateFns implements DateUtil {

  addDays(daysToAdd: number, date: Date): Date {
    return addDays(date, daysToAdd);
  }

  addMonths(monthsToAdd: number, date: Date): Date {
    return addMonths(date, monthsToAdd);
  }

  addYears(yearsToAdd: number, date: Date): Date {
    return addYears(date, yearsToAdd);
  }

  dateToString(stringFormat: DateStringFormat, date: Date): string {
    return format(date, stringFormat);
  }

  isAfter(date: Date, dateToCompare: Date): boolean {
    return isAfter(date, dateToCompare);
  }

  isBefore(date: Date, dateToCompare: Date): boolean {
    return isBefore(date, dateToCompare);
  }

  setEndTime(date: Date): Date {
    return endOfDay(date);
  }

  setInitTime(date: Date): Date {
    return startOfDay(date);
  }

  subtractDays(daysToSubtract: number, date: Date): Date {
    return subDays(date, daysToSubtract);
  }

  subtractMonths(monthsToSubtract: number, date: Date): Date {
    return subMonths(date, monthsToSubtract);
  }

  subtractYears(yearsToSubtract: number, date: Date): Date {
    return subYears(date, yearsToSubtract);
  }

}
