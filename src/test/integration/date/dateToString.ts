import { DateStringFormat } from '../../../app/date/types/dateStringFormat';
import { DateFunctions } from '../../../app/date/util/date.function';
import { DateUtil } from '../../../app/date/util/date.util.interface';

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
      stringFormat: 'YYYY-MM-DD',
      date: new Date(),
      expect: `${this.currentYear}-${this.currentMonth + 1}-${this.currentDay}`
    },
    {
      stringFormat: 'YYYY-MM-DD',
      date: new Date(2020, 10, 13),
      expect: '2020-11-13'
    },
    {
      stringFormat: 'DD-MM-YYYY',
      date: new Date(),
      expect: `${this.currentDay}-${this.currentMonth + 1}-${this.currentYear}`
    },
    {
      stringFormat: 'DD-MM-YYYY',
      date: new Date(2020, 10, 13),
      expect: '13-11-2020'
    }
  ];

  constructor(private dateUtilImpl: DateUtil) {}

  runTest(): void {
    describe('Transform date to string', () => {
      this.expectsDatesToString.forEach((expectDateToString) => {
        test(`should return success string for date with string format ${expectDateToString.stringFormat}`, () => {
          const result = new DateFunctions(this.dateUtilImpl).dateToString(
            expectDateToString.stringFormat,
            expectDateToString.date
          );

          expect(result).toEqual(expectDateToString.expect);
        });
      });
    });
  }

}
