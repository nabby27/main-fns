import { titleCase } from '../../app';

const data: {
    text: string;
    expect: string;
}[] = [
    {
        text: 'HELLO world',
        expect: 'Hello World'
    },
    {
        text: 'good bye',
        expect: 'Good Bye'
    }
];

describe('Get titleCase text', () => {
    data.forEach((item) => {
        test('should return titleCase text', () => {
            const result = titleCase(item.text);

            expect(result).toEqual(item.expect);
        });
    });
});
