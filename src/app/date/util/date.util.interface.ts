import { DateStringFormat } from '../types/dateStringFormat';

export interface DateUtil {
  addDays(daysToAdd: number, date: Date): Date;
  addMonths(monthsToAdd: number, date: Date): Date;
  addYears(yearsToAdd: number, date: Date): Date;
  dateToString(stringFormat: DateStringFormat, date: Date): string;
  isAfter(date: Date, dateToCompare: Date): boolean;
  isBefore(date: Date, dateToCompare: Date): boolean;
  setEndTime(date: Date): Date;
  setInitTime(date: Date): Date;
  subtractDays(daysToSubtract: number, date: Date): Date;
  subtractMonths(monthsToSubtract: number, date: Date): Date;
  subtractYears(yearsToSubtract: number, date: Date): Date;
}
