import { setInitTime } from '../../../app';

const expectsDates: {
  date: Date;
  expect: Date;
}[] = [
  {
    date: new Date(2020, 10, 13, 14, 25, 33, 210),
    expect: new Date(2020, 10, 13, 0, 0, 0, 0)
  }
];

describe('Get date with init time', () => {
  expectsDates.forEach((expectDate) => {
    test(`should return date ${expectDate.expect} with init time`, () => {
      const result = setInitTime(expectDate.date);

      expect(result.getFullYear()).toEqual(expectDate.expect.getFullYear());
      expect(result.getMonth()).toEqual(expectDate.expect.getMonth());
      expect(result.getDate()).toEqual(expectDate.expect.getDate());
      expect(result.getHours()).toEqual(expectDate.expect.getHours());
      expect(result.getMinutes()).toEqual(expectDate.expect.getMinutes());
      expect(result.getSeconds()).toEqual(expectDate.expect.getSeconds());
    });
  });
});
