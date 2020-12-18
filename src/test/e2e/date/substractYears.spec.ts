import { subtractYears } from '../../../app';

const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();

const expectsDates: {
  numberOfYearsToSubtract: number;
  date?: Date;
  expect: Date;
}[] = [
  {
    numberOfYearsToSubtract: 3,
    expect: new Date(currentYear - 3, currentMonth, currentDay)
  },
  {
    numberOfYearsToSubtract: 2,
    date: new Date(2020, 10, 13),
    expect: new Date(2018, 10, 13)
  }
];

describe('Get current date with subtracted years', () => {
  expectsDates.forEach((expectDate) => {
    test('should return date with subtracted years', () => {
      const result = subtractYears(expectDate.numberOfYearsToSubtract, expectDate.date);

      expect(result.getDate()).toEqual(expectDate.expect.getDate());
      expect(result.getMonth()).toEqual(expectDate.expect.getMonth());
      expect(result.getFullYear()).toEqual(expectDate.expect.getFullYear());
    });
  });
});
