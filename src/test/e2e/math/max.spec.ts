import { max } from '../../../app';

const data: {
  array: number[];
  expect: number;
}[] = [
    {
        array: [3, 1, 2],
        expect: 3
    },
    {
        array: [4, 6, 2, 5],
        expect: 6
    }
];

describe('Get biggest number from array', () => {
    data.forEach((item) => {
        test('should return biggest number from array', () => {
            const result = max(...item.array);

            expect(result).toEqual(item.expect);
        });
    });
});
