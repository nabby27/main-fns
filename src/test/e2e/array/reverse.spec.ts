import { reverse } from '../../../app';

const data: {
  array: unknown[];
  expect: unknown[];
}[] = [
    {
        array: [3, 2, 1],
        expect: [1, 2, 3]
    },
    {
        array: ['a', 'b', 'c'],
        expect: ['c', 'b', 'a']
    }
];

describe('Get array reversed', () => {
    data.forEach((item) => {
        test('should return array reversed', () => {
            const result = reverse(item.array);

            expect(result).toEqual(item.expect);
        });
    });
});
