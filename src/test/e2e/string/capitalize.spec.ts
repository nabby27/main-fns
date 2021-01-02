import { capitalize } from '../../../app';

const data: {
  text: string;
  expect: string;
}[] = [
  {
    text: 'hello',
    expect: 'Hello'
  },
  {
    text: 'bYE',
    expect: 'Bye'
  }
];

describe('Get capitalized text', () => {
  data.forEach((item) => {
    test('should return capitalized text', () => {
      const result = capitalize(item.text);

      expect(result).toEqual(item.expect);
    });
  });
});
