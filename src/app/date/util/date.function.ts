import { DateStringFormat } from '../types/dateStringFormat';
import { DateUtil } from './date.util.interface';

export class DateFunctions {

  constructor(private dateUtilImpl: DateUtil) { }

  addDays(daysToAdd: number, date: Date): Date {
    return this.dateUtilImpl.addDays(daysToAdd, date);
  }

  addMonths(monthsToAdd: number, date: Date): Date {
    return this.dateUtilImpl.addMonths(monthsToAdd, date);
  }

  addYears(yearsToAdd: number, date: Date): Date {
    return this.dateUtilImpl.addYears(yearsToAdd, date);
  }

  dateToString(stringFormat: DateStringFormat, date: Date): string {
    return this.dateUtilImpl.dateToString(stringFormat, date);
  }

  isAfter(date: Date, dateToCompare: Date): boolean {
    return this.dateUtilImpl.isAfter(date, dateToCompare);
  }

  isBefore(date: Date, dateToCompare: Date): boolean {
    return this.dateUtilImpl.isBefore(date, dateToCompare);
  }

  setEndTime(date: Date): Date {
    return this.dateUtilImpl.setEndTime(date);
  }

  setInitTime(date: Date): Date {
    return this.dateUtilImpl.setInitTime(date);
  }

  subtractDays(daysToSubtract: number, date: Date): Date {
    return this.dateUtilImpl.subtractDays(daysToSubtract, date);
  }

  subtractMonths(monthsToSubtract: number, date: Date): Date {
    return this.dateUtilImpl.subtractMonths(monthsToSubtract, date);
  }

  subtractYears(yearsToSubtract: number, date: Date): Date {
    return this.dateUtilImpl.subtractYears(yearsToSubtract, date);
  }

}
