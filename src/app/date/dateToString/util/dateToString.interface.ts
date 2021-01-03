import { DateStringFormat } from '../../types/dateStringFormat';

export interface DateToString {
  dateToString(stringFormat: DateStringFormat, date: Date): string;
}
