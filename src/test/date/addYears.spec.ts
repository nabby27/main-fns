import { addYears } from '../../app';

const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();

const expectsDates: {
    numberOfYearsToAdd: number;
    date?: Date;
    expect: Date;
}[] = [
    {
        numberOfYearsToAdd: 3,
        expect: new Date(currentYear + 3, currentMonth, currentDay)
    },
    {
        numberOfYearsToAdd: 3,
        date: new Date(2020, 10, 13),
        expect: new Date(2023, 10, 13)
    }
];

describe('Get date with added years', () => {
    expectsDates.forEach((expectDate) => {
        test('should return date with added years', () => {
            const result = addYears(expectDate.numberOfYearsToAdd, expectDate.date);

            expect(result.getFullYear()).toEqual(expectDate.expect.getFullYear());
            expect(result.getMonth()).toEqual(expectDate.expect.getMonth());
            expect(result.getDate()).toEqual(expectDate.expect.getDate());
        });
    });
});
