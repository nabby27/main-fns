import { first } from '../../../app';

const data: {
  array: unknown[];
  expect: unknown;
}[] = [
  {
    array: [3, 2, 1],
    expect: 2
  },
  {
    array: ['a', 'b', 'c'],
    expect: 'a'
  }
];

describe('Get first item from array', () => {
  data.forEach((item) => {
    test('should return first item from array', () => {
      const result = first(item.array);

      expect(result).toEqual(item.expect);
    });
  });
});
