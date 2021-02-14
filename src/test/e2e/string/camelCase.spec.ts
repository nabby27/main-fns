import { camelCase } from '../../../app';

const data: {
  text: string;
  expect: string;
}[] = [
    {
        text: 'hello world',
        expect: 'helloWorld'
    },
    {
        text: 'bYE',
        expect: 'bye'
    }
];

describe('Get camelCase text', () => {
    data.forEach((item) => {
        test('should return camelCase text', () => {
            const result = camelCase(item.text);

            expect(result).toEqual(item.expect);
        });
    });
});
