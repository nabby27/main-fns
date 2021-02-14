import { RelativeTimeFunction } from '../../../../app/date/relativeTime/util/relativeTime.function';
import { RelativeTime } from '../../../../app/date/relativeTime/util/relativeTime.interface';
import { Locale } from '../../../../app/date/types/locale';
import { mockDate } from '../../../mocks/currentDateMock';

const currentDayMock = 27;
const currentMonthMock = 5;
const currentYearMock = 1996;
const currentDateMock = new Date(currentYearMock, currentMonthMock, currentDayMock);

export class RelativeTimeTest {

  expectsRelativeTime: {
    date: Date;
    locale: Locale;
    expect: string;
  }[] = [
      {
          date: new Date(1996, 5, 26),
          locale: 'en-US',
          expect: 'yesterday'
      },
      {
          date: new Date(1996, 5, 26),
          locale: 'es-ES',
          expect: 'ayer'
      },
      {
          date: new Date(1996, 5, 25),
          locale: 'en-US',
          expect: '2 days ago'
      },
      {
          date: new Date(1996, 5, 25),
          locale: 'es-ES',
          expect: 'anteayer'
      },
      {
          date: new Date(1996, 4, 27),
          locale: 'en-US',
          expect: 'last month'
      },
      {
          date: new Date(1996, 4, 27),
          locale: 'es-ES',
          expect: 'el mes pasado'
      },
      {
          date: new Date(1996, 3, 27),
          locale: 'en-US',
          expect: '2 months ago'
      },
      {
          date: new Date(1996, 3, 27),
          locale: 'es-ES',
          expect: 'hace 2 meses'
      },
      {
          date: new Date(1995, 5, 27),
          locale: 'en-US',
          expect: 'last year'
      },
      {
          date: new Date(1995, 5, 27),
          locale: 'es-ES',
          expect: 'el año pasado'
      },
      {
          date: new Date(1994, 5, 27),
          locale: 'en-US',
          expect: '2 years ago'
      },
      {
          date: new Date(1994, 5, 27),
          locale: 'es-ES',
          expect: 'hace 2 años'
      }
  ];

  constructor(private relativeTimeImpl: RelativeTime) {}

  runTest(): void {
      describe('Get relative times', () => {
          beforeAll(() => {
              mockDate(currentDateMock);
          });

          this.expectsRelativeTime.forEach((expectRelativeTime) => {
              test('should return relative time', () => {
                  const result = new RelativeTimeFunction(this.relativeTimeImpl).relativeTime(
                      expectRelativeTime.date,
                      expectRelativeTime.locale
                  );

                  expect(result).toEqual(expectRelativeTime.expect);
              });
          });
      });
  }

}
