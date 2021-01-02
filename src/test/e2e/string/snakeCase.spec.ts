import { snakeCase } from '../../../app';

const data: {
  text: string;
  expect: string;
}[] = [
  {
    text: 'HELLO world',
    expect: 'hello_world'
  },
  {
    text: 'Good Bye',
    expect: 'good_bye'
  }
];

describe('Get snakeCase text', () => {
  data.forEach((item) => {
    test('should return snakeCase text', () => {
      const result = snakeCase(item.text);

      expect(result).toEqual(item.expect);
    });
  });
});
