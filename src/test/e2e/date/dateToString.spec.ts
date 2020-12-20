import { dateToString } from '../../../app';
import { DateStringFormat } from '../../../app/date/types/dateStringFormat';

const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();

const expectsDatesToString: {
  stringFormat: DateStringFormat;
  date?: Date;
  expect: string;
}[] = [
  {
    stringFormat: 'yyyy-MM-dd',
    expect: `${currentYear}-${currentMonth + 1}-${currentDay}`
  },
  {
    stringFormat: 'yyyy-MM-dd',
    date: new Date(2020, 10, 13),
    expect: '2020-11-13'
  },
  {
    stringFormat: 'dd-MM-yyyy',
    expect: `${currentDay}-${currentMonth + 1}-${currentYear}`
  },
  {
    stringFormat: 'dd-MM-yyyy',
    date: new Date(2020, 10, 13),
    expect: '13-11-2020'
  }
];

describe('Transform date to string', () => {
  expectsDatesToString.forEach((expectDateToString) => {
    test(`should return success string for date with format ${expectDateToString.stringFormat}`, () => {
      let result: string;

      if (expectDateToString.date) {
        result = dateToString(
          expectDateToString.stringFormat,
          expectDateToString.date
        );
      } else {
        result = dateToString(expectDateToString.stringFormat);
      }

      expect(result).toEqual(expectDateToString.expect);
    });
  });
});
