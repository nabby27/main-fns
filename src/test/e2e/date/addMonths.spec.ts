import { addMonths } from '../../../app';

const expectsDates: {
  numberOfMonthsToAdd: number;
  date?: Date;
  expect: Date;
}[] = [
  {
    numberOfMonthsToAdd: 1,
    date: new Date(2020, 9, 13),
    expect: new Date(2020, 10, 13)
  },
  {
    numberOfMonthsToAdd: 1,
    date: new Date(2020, 11, 13),
    expect: new Date(2021, 0, 13)
  }
];

describe('Get date with added months', () => {
  expectsDates.forEach((expectDate) => {
    test('should return date with added months', () => {
      const result = addMonths(expectDate.numberOfMonthsToAdd, expectDate.date);

      expect(result.getFullYear()).toEqual(expectDate.expect.getFullYear());
      expect(result.getMonth()).toEqual(expectDate.expect.getMonth());
      expect(result.getDate()).toEqual(expectDate.expect.getDate());
    });
  });
});
