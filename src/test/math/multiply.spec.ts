import { multiply } from '../../app';

const data: {
    array: number[];
    expect: number;
}[] = [
    {
        array: [3, 1, 2],
        expect: 6
    },
    {
        array: [4, 6, 2, 5],
        expect: 240
    }
];

describe('Get product from numbers', () => {
    data.forEach((item) => {
        test('should return product from numbers', () => {
            const result = multiply(...item.array);

            expect(result).toEqual(item.expect);
        });
    });
});
