import { lastLetters } from '../../../app';

const data: {
  text: string;
  numberOfLetters?: number,
  expect: string;
}[] = [
  {
    text: 'hello',
    expect: 'o'
  },
  {
    text: 'bYE',
    numberOfLetters: 2,
    expect: 'ye'
  }
];

describe('Get last letters', () => {
  data.forEach((item) => {
    test('should return last letters', () => {
      const result = lastLetters(item.text, item.numberOfLetters);

      expect(result).toEqual(item.expect);
    });
  });
});
