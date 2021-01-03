import { format } from 'date-fns';
import { DateStringFormat } from '../../types/dateStringFormat';
import { DateToString } from '../util/dateToString.interface';

export class DateToStringDateFns implements DateToString {

  dateToString(stringFormat: DateStringFormat, date: Date): string {
    return format(date, stringFormat);
  }

}
