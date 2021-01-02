import { firstLetters } from '../../../app';

const data: {
  text: string;
  numberOfLetters?: number,
  expect: string;
}[] = [
  {
    text: 'hello',
    expect: 'h'
  },
  {
    text: 'bYE',
    numberOfLetters: 2,
    expect: 'by'
  }
];

describe('Get first letters', () => {
  data.forEach((item) => {
    test('should return first letters', () => {
      const result = firstLetters(item.text, item.numberOfLetters);

      expect(result).toEqual(item.expect);
    });
  });
});
