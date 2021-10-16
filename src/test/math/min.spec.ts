import { min } from '../../app';

const data: {
    array: number[];
    expect: number;
}[] = [
    {
        array: [3, 1, 2],
        expect: 1
    },
    {
        array: [4, 6, 2, 5],
        expect: 2
    }
];

describe('Get smallest number from array', () => {
    data.forEach((item) => {
        test('should return smallest number from array', () => {
            const result = min(...item.array);

            expect(result).toEqual(item.expect);
        });
    });
});
