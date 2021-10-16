import { lowerCase } from '../../app';

const data: {
    text: string;
    expect: string;
}[] = [
    {
        text: 'HELLO wOrLd',
        expect: 'hello world'
    },
    {
        text: 'Good Bye',
        expect: 'good bye'
    }
];

describe('Get lowerCase text', () => {
    data.forEach((item) => {
        test('should return lowerCase text', () => {
            const result = lowerCase(item.text);

            expect(result).toEqual(item.expect);
        });
    });
});
