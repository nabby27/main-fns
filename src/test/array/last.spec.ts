import { last } from '../../app';

const data: {
    array: unknown[];
    expect: unknown;
}[] = [
    {
        array: [3, 2, 1],
        expect: 1
    },
    {
        array: ['a', 'b', 'c'],
        expect: 'c'
    }
];

describe('Get last item from array', () => {
    data.forEach((item) => {
        test('should return last item from array', () => {
            const result = last(item.array);

            expect(result).toEqual(item.expect);
        });
    });
});
