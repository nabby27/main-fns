import { DateToString } from '../../../../app/date/dateToString/util/dateToString.interface';
import { DateStringFormat } from '../../../../app/date/types/dateStringFormat';
import { DateToStringFunction } from '../../../../app/date/dateToString/util/dateToString.function';

export class DateToStringTest {

  currentDay = new Date().getDate();
  currentMonth = new Date().getMonth();
  currentYear = new Date().getFullYear();

  expectsDatesToString: {
    stringFormat: DateStringFormat;
    date: Date;
    expect: string;
  }[] = [
    {
      stringFormat: 'yyyy-MM-dd',
      date: new Date(),
      expect: `${this.currentYear}-${('0' + (this.currentMonth + 1)).slice(-2)}-${('0' + this.currentDay).slice(-2)}`
    },
    {
      stringFormat: 'yyyy-MM-dd',
      date: new Date(2020, 10, 13),
      expect: '2020-11-13'
    },
    {
      stringFormat: 'dd-MM-yyyy',
      date: new Date(),
      expect: `${('0' + this.currentDay).slice(-2)}-${('0' + (this.currentMonth + 1)).slice(-2)}-${this.currentYear}`
    },
    {
      stringFormat: 'dd-MM-yyyy',
      date: new Date(2020, 10, 13),
      expect: '13-11-2020'
    }
  ];

  constructor(private dateToStringImpl: DateToString) {}

  runTest(): void {
    describe('Transform date to string', () => {
      this.expectsDatesToString.forEach((expectDateToString) => {
        test(`should return success string for date with string format ${expectDateToString.stringFormat}`, () => {
          const result = new DateToStringFunction(this.dateToStringImpl).dateToString(
            expectDateToString.stringFormat,
            expectDateToString.date
          );

          expect(result).toEqual(expectDateToString.expect);
        });
      });
    });
  }

}
