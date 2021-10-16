import { mean } from '../../app';

const data: {
    array: number[];
    expect: number;
}[] = [
    {
        array: [3, 1, 2],
        expect: 2
    },
    {
        array: [4, 6, 2, 5],
        expect: 4.25
    }
];

describe('Get mean from array', () => {
    data.forEach((item) => {
        test('should return mean from array', () => {
            const result = mean(...item.array);

            expect(result).toEqual(item.expect);
        });
    });
});
