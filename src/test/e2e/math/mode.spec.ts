import { mode } from '../../../app';

const data: {
  array: number[];
  expect: number[];
}[] = [
    {
        array: [3, 1, 1],
        expect: [1]
    },
    {
        array: [4, 2, 2, 5],
        expect: [2]
    },
    {
        array: [4, 2, 2, 5, 4, 3, 3],
        expect: [2, 3, 4]
    }
];

describe('Get mdoe from array', () => {
    data.forEach((item) => {
        test('should return mode from array', () => {
            const result = mode(...item.array);

            expect(result).toEqual(item.expect);
        });
    });
});
