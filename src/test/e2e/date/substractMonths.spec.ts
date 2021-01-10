import { subtractMonths } from '../../../app';
import { mockDate } from './mocks/currentDateMock';

const currentDayMock = 27;
const currentMonthMock = 5;
const currentYearMock = 1996;
const currentDateMock = new Date(currentYearMock, currentMonthMock, currentDayMock);

const expectsDates: {
  numberOfMonthsTosubtract: number;
  date?: Date;
  expect: Date;
}[] = [
  {
    numberOfMonthsTosubtract: 3,
    expect: new Date(currentYearMock, currentMonthMock - 3, currentDayMock)
  },
  {
    numberOfMonthsTosubtract: 3,
    date: new Date(2020, 10, 13),
    expect: new Date(2020, 7, 13)
  },
  {
    numberOfMonthsTosubtract: 1,
    date: new Date(2020, 0, 13),
    expect: new Date(2019, 11, 13)
  }
];

describe('Get current date with subtracted months', () => {
  beforeAll(() => {
    mockDate(currentDateMock);
  });

  expectsDates.forEach((expectDate) => {
    test('should return date with subtracted months', () => {
      const result = subtractMonths(expectDate.numberOfMonthsTosubtract, expectDate.date);

      expect(result.getDate()).toEqual(expectDate.expect.getDate());
      expect(result.getMonth()).toEqual(expectDate.expect.getMonth());
      expect(result.getFullYear()).toEqual(expectDate.expect.getFullYear());
    });
  });
});
