import { addDays } from '../../../app';
import { mockDate } from '../../mocks/currentDateMock';

const currentDayMock = 27;
const currentMonthMock = 5;
const currentYearMock = 1996;
const currentDateMock = new Date(currentYearMock, currentMonthMock, currentDayMock);

const expectsDates: {
  numberOfDaysToAdd: number;
  date?: Date;
  expect: Date;
}[] = [
  {
    numberOfDaysToAdd: 3,
    expect: new Date(currentYearMock, currentMonthMock, currentDayMock + 3)
  },
  {
    numberOfDaysToAdd: 3,
    date: new Date(2020, 10, 13),
    expect: new Date(2020, 10, 16)
  },
  {
    numberOfDaysToAdd: 2,
    date: new Date(2020, 10, 30),
    expect: new Date(2020, 11, 2)
  }
];

describe('Get date with added days', () => {
  beforeAll(() => {
    mockDate(currentDateMock);
  });

  expectsDates.forEach((expectDate) => {
    test('should return date with added days', () => {
      const result = addDays(expectDate.numberOfDaysToAdd, expectDate.date);

      expect(result.getFullYear()).toEqual(expectDate.expect.getFullYear());
      expect(result.getMonth()).toEqual(expectDate.expect.getMonth());
      expect(result.getDate()).toEqual(expectDate.expect.getDate());
    });
  });
});
