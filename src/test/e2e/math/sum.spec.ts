import { sum } from '../../../app';

const data: {
  array: number[];
  expect: number;
}[] = [
  {
    array: [3, 1, 2],
    expect: 6
  },
  {
    array: [4, 6, 2, 5],
    expect: 17
  }
];

describe('Get sum from numbers', () => {
  data.forEach((item) => {
    test('should return sum from numbers', () => {
      const result = sum(...item.array);

      expect(result).toEqual(item.expect);
    });
  });
});
