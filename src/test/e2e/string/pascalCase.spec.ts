import { pascalCase } from '../../../app';

const data: {
  text: string;
  expect: string;
}[] = [
  {
    text: 'HELLO world',
    expect: 'HelloWorld'
  },
  {
    text: 'good bye',
    expect: 'GoodBye'
  }
];

describe('Get pascalCase text', () => {
  data.forEach((item) => {
    test('should return pascalCase text', () => {
      const result = pascalCase(item.text);

      expect(result).toEqual(item.expect);
    });
  });
});
