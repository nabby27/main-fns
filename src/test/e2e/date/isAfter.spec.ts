import { isAfter } from '../../../app';

const expectsIsAfter: {
  date: Date;
  dateToCompare: Date;
  expect: boolean;
}[] = [
    {
        date: new Date(2020, 10, 14),
        dateToCompare: new Date(2020, 10, 13),
        expect: true
    },
    {
        date: new Date(2020, 10, 13),
        dateToCompare: new Date(2020, 10, 14),
        expect: false
    },
    {
        date: new Date(2020, 10, 13),
        dateToCompare: new Date(2020, 10, 13),
        expect: false
    }
];

describe('Check if date is after dateToCompare', () => {
    expectsIsAfter.forEach((expectIsAfter) => {
        test('should return success if date is before dateToCompare', () => {
            const result = isAfter(
                expectIsAfter.date,
                expectIsAfter.dateToCompare
            );

            expect(result).toEqual(expectIsAfter.expect);
        });
    });
});
