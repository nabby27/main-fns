import { addMonths } from '../../../app';
import { mockDate } from '../../mocks/currentDateMock';

const currentDayMock = 27;
const currentMonthMock = 5;
const currentYearMock = 1996;
const currentDateMock = new Date(currentYearMock, currentMonthMock, currentDayMock);

const expectsDates: {
  numberOfMonthsToAdd: number;
  date?: Date;
  expect: Date;
}[] = [
    {
        numberOfMonthsToAdd: 1,
        expect: new Date(currentYearMock, currentMonthMock + 1, currentDayMock)
    },
    {
        numberOfMonthsToAdd: 1,
        date: new Date(2020, 9, 13),
        expect: new Date(2020, 10, 13)
    },
    {
        numberOfMonthsToAdd: 1,
        date: new Date(2020, 11, 13),
        expect: new Date(2021, 0, 13)
    }
];

describe('Get date with added months', () => {
    beforeAll(() => {
        mockDate(currentDateMock);
    });

    expectsDates.forEach((expectDate) => {
        test('should return date with added months', () => {
            const result = addMonths(expectDate.numberOfMonthsToAdd, expectDate.date);

            expect(result.getFullYear()).toEqual(expectDate.expect.getFullYear());
            expect(result.getMonth()).toEqual(expectDate.expect.getMonth());
            expect(result.getDate()).toEqual(expectDate.expect.getDate());
        });
    });
});
