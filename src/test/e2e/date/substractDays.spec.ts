import { subtractDays } from '../../../app';
import { mockDate } from './mocks/currentDateMock';

const currentDayMock = 10;
const currentMonthMock = 5;
const currentYearMock = 2020;
const currentDateMock = new Date(currentYearMock, currentMonthMock, currentDayMock);

const expectsDates: {
  numberOfDaysTosubtract: number;
  date?: Date;
  expect: Date;
}[] = [
  {
    numberOfDaysTosubtract: 3,
    expect: new Date(currentYearMock, currentMonthMock, currentDayMock - 3)
  },
  {
    numberOfDaysTosubtract: 3,
    date: new Date(2020, 10, 16),
    expect: new Date(2020, 10, 13)
  },
  {
    numberOfDaysTosubtract: 2,
    date: new Date(2020, 11, 2),
    expect: new Date(2020, 10, 30)
  }
];

describe('Get current date with subtracted days', () => {
  beforeAll(() => {
    mockDate(currentDateMock);
  });

  expectsDates.forEach((expectDate) => {
    test('should return date with subtracted days', () => {
      const result = subtractDays(expectDate.numberOfDaysTosubtract, expectDate.date);

      expect(result.getDate()).toEqual(expectDate.expect.getDate());
      expect(result.getMonth()).toEqual(expectDate.expect.getMonth());
      expect(result.getFullYear()).toEqual(expectDate.expect.getFullYear());
    });
  });
});
