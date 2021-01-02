import { kebabCase } from '../../../app';

const data: {
  text: string;
  expect: string;
}[] = [
  {
    text: 'hello world',
    expect: 'hello-world'
  },
  {
    text: 'Good Bye',
    expect: 'good-bye'
  }
];

describe('Get kebabCase text', () => {
  data.forEach((item) => {
    test('should return kebabCase text', () => {
      const result = kebabCase(item.text);

      expect(result).toEqual(item.expect);
    });
  });
});
