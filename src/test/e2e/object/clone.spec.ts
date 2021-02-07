import { clone } from '../../../app';

const data: {
  user: {
    name: string,
    alias: string
  },
  links: string[]
}[] = [
  {
    user: {
      name: 'Iván',
      alias: 'nabby27'
    },
    links: [
      'https://icordoba.es',
      'https://github.com/nabby27'
    ]
  }
];

describe('Get clone object', () => {
  data.forEach((item) => {
    test('should return clone object', () => {
      const result = clone(item);

      expect(result).toEqual(item);
      expect(result).not.toBe(item);
    });
  });
});
