import { isEqual } from '../../app';

const data: {
    first: { user: { name: string } },
    second: { user: { name: string } },
    expect: boolean
}[] = [
    {
        first: {
            user: { name: 'Iván' }
        },
        second: {
            user: { name: 'Iván' }
        },
        expect: true
    },
    {
        first: {
            user: { name: 'Iván' }
        },
        second: {
            user: { name: 'Nabby' }
        },
        expect: false
    }
];

describe('Get isEqual object', () => {
    data.forEach((item) => {
        test('should return isEqual object', () => {
            const result = isEqual(item.first, item.second);

            expect(result).toEqual(item.expect);
        });
    });
});
