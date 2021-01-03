import { DateStringFormat } from '../../types/dateStringFormat';
import { DateToString } from './dateToString.interface';

export class DateToStringFunction {

  constructor(private dateToStringImpl: DateToString) { }

  dateToString(stringFormat: DateStringFormat, date: Date): string {
    return this.dateToStringImpl.dateToString(stringFormat, date);
  }

}
