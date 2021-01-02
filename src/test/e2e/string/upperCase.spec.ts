import { upperCase } from '../../../app';

const data: {
  text: string;
  expect: string;
}[] = [
  {
    text: 'HELLO world',
    expect: 'HELLO WORLD'
  },
  {
    text: 'good bye',
    expect: 'GOOD BYE'
  }
];

describe('Get upperCase text', () => {
  data.forEach((item) => {
    test('should return upperCase text', () => {
      const result = upperCase(item.text);

      expect(result).toEqual(item.expect);
    });
  });
});
