import { endOfDay } from '../../app';
import { mockDate } from '../mocks/currentDateMock';

const currentDayMock = 27;
const currentMonthMock = 5;
const currentYearMock = 1996;
const currentDateMock = new Date(currentYearMock, currentMonthMock, currentDayMock);

const expectsDates: {
    date?: Date;
    expect: Date;
}[] = [
    {
        date: new Date(2020, 10, 13, 22, 59, 59, 220),
        expect: new Date(2020, 10, 13, 23, 59, 59, 999)
    },
    {
        expect: new Date(currentYearMock, currentMonthMock, currentDayMock, 23, 59, 59, 999)
    }
];

describe('Get date with end time', () => {
    beforeAll(() => {
        mockDate(currentDateMock);
    });

    expectsDates.forEach((expectDate) => {
        test(`should return date ${expectDate.expect} with end time`, () => {
            const result = endOfDay(expectDate.date);

            expect(result.getFullYear()).toEqual(expectDate.expect.getFullYear());
            expect(result.getMonth()).toEqual(expectDate.expect.getMonth());
            expect(result.getDate()).toEqual(expectDate.expect.getDate());
            expect(result.getHours()).toEqual(expectDate.expect.getHours());
            expect(result.getMinutes()).toEqual(expectDate.expect.getMinutes());
            expect(result.getSeconds()).toEqual(expectDate.expect.getSeconds());
        });
    });
});
