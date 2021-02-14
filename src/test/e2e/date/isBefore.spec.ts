import { isBefore } from '../../../app';

const expectsIsBefore: {
  date: Date;
  dateToCompare: Date;
  expect: boolean;
}[] = [
    {
        date: new Date(2020, 10, 13),
        dateToCompare: new Date(2020, 10, 14),
        expect: true
    },
    {
        date: new Date(2020, 10, 14),
        dateToCompare: new Date(2020, 10, 13),
        expect: false
    },
    {
        date: new Date(2020, 10, 13),
        dateToCompare: new Date(2020, 10, 13),
        expect: false
    }
];

describe('Check if date is before dateToCompare', () => {
    expectsIsBefore.forEach((expectIsBefore) => {
        test('should return success if date is before dateToCompare', () => {
            const result = isBefore(
                expectIsBefore.date,
                expectIsBefore.dateToCompare
            );

            expect(result).toEqual(expectIsBefore.expect);
        });
    });
});
