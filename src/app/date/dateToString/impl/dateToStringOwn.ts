import { DateStringFormat } from '../../types/dateStringFormat';
import { DateToString } from '../util/dateToString.interface';

export class DateToStringOwn implements DateToString {

  dateToString(stringFormat: DateStringFormat, date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return stringFormat
      .replace('yyyy', year.toString())
      .replace('MM', ('0' + (month + 1)).slice(-2))
      .replace('dd', ('0' + day).slice(-2));
  }

}
