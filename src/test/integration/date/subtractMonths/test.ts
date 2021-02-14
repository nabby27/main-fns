import { SubtractMonthsFunction } from '../../../../app/date/subtractMonths/util/subtractMonths.function';
import { SubtractMonths } from '../../../../app/date/subtractMonths/util/subtractMonths.interface';

export class SubtractMonthsTest {

  expectsDates: {
    numberOfMonthsTosubtract: number;
    date: Date;
    expect: Date;
  }[] = [
      {
          numberOfMonthsTosubtract: 3,
          date: new Date(2020, 10, 13),
          expect: new Date(2020, 7, 13)
      },
      {
          numberOfMonthsTosubtract: 1,
          date: new Date(2020, 0, 13),
          expect: new Date(2019, 11, 13)
      }
  ];

  constructor(private subtractMonthsImpl: SubtractMonths) { }

  runTest(): void {
      describe('Get current date with subtracted months', () => {
          this.expectsDates.forEach((expectDate) => {
              test('should return date with subtracted months', () => {
                  const result = new SubtractMonthsFunction(this.subtractMonthsImpl).subtractMonths(expectDate.numberOfMonthsTosubtract, expectDate.date);

                  expect(result.getDate()).toEqual(expectDate.expect.getDate());
                  expect(result.getMonth()).toEqual(expectDate.expect.getMonth());
                  expect(result.getFullYear()).toEqual(expectDate.expect.getFullYear());
              });
          });
      });
  }

}
