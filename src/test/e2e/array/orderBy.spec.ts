import { orderBy } from '../../../app';

const data: {
  array: {id: number, name: string}[];
  key: string;
  expect: {id: number, name: string}[];
}[] = [
  {
    array: [
      { id: 3,
        name: 'Maria' },
      { id: 1,
        name: 'Ivan' },
      { id: 4,
        name: 'Pepe' },
      { id: 2,
        name: 'Manolo' }
    ],
    key: 'id',
    expect: [
      { id: 1,
        name: 'Ivan' },
      { id: 2,
        name: 'Manolo' },
      { id: 3,
        name: 'Maria' },
      { id: 4,
        name: 'Pepe' }
    ]
  },
  {
    array: [
      { id: 3,
        name: 'Maria' },
      { id: 1,
        name: 'Ivan' },
      { id: 4,
        name: 'Pepe' },
      { id: 2,
        name: 'Manolo' }
    ],
    key: 'name',
    expect: [
      { id: 1,
        name: 'Ivan' },
      { id: 2,
        name: 'Manolo' },
      { id: 3,
        name: 'Maria' },
      { id: 4,
        name: 'Pepe' }
    ]
  }
];

describe('Get array reversed', () => {
  data.forEach((item) => {
    test(`should return array order by ${item.key}`, () => {
      const result = orderBy(item.key, item.array);

      expect(result).toEqual(item.expect);
    });
  });
});
