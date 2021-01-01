import { median } from '../../../app';

const data: {
  array: number[];
  expect: number;
}[] = [
  {
    array: [3, 1, 2],
    expect: 2
  },
  {
    array: [4, 6, 2, 5],
    expect: 4.5
  }
];

describe('Get median from numbers', () => {
  data.forEach((item) => {
    test('should return median from numbers', () => {
      const result = median(...item.array);

      expect(result).toEqual(item.expect);
    });
  });
});
