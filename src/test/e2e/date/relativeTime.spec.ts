import { relativeTime } from '../../../app';
import { mockDate } from '../../mocks/currentDateMock';
import { Locale } from '../../../app/date/types/locale';

const currentDayMock = 27;
const currentMonthMock = 5;
const currentYearMock = 1996;
const currentDateMock = new Date(currentYearMock, currentMonthMock, currentDayMock);

const expectsRelativeTime: {
  date: Date;
  locale?: Locale;
  expect: string;
}[] = [
  {
    date: new Date(1996, 5, 26),
    expect: 'yesterday'
  },
  {
    date: new Date(1996, 5, 26),
    locale: 'es-ES',
    expect: 'ayer'
  },
  {
    date: new Date(1996, 5, 25),
    expect: '2 days ago'
  },
  {
    date: new Date(1996, 5, 25),
    locale: 'es-ES',
    expect: 'anteayer'
  },
  {
    date: new Date(1996, 4, 27),
    expect: 'last month'
  },
  {
    date: new Date(1996, 4, 27),
    locale: 'es-ES',
    expect: 'el mes pasado'
  },
  {
    date: new Date(1996, 3, 27),
    expect: '2 months ago'
  },
  {
    date: new Date(1996, 3, 27),
    locale: 'es-ES',
    expect: 'hace 2 meses'
  },
  {
    date: new Date(1995, 5, 27),
    expect: 'last year'
  },
  {
    date: new Date(1995, 5, 27),
    locale: 'es-ES',
    expect: 'el año pasado'
  },
  {
    date: new Date(1994, 5, 27),
    expect: '2 years ago'
  },
  {
    date: new Date(1994, 5, 27),
    locale: 'es-ES',
    expect: 'hace 2 años'
  }
];

describe('Get relative times', () => {
  beforeAll(() => {
    mockDate(currentDateMock);
  });

  expectsRelativeTime.forEach((expectRelativeTime) => {
    test('should return relative time', () => {
      const result = relativeTime(expectRelativeTime.date, expectRelativeTime.locale);

      expect(result).toEqual(expectRelativeTime.expect);
    });
  });
});
