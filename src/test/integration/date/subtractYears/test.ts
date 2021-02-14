import { SubtractYearsFunction } from '../../../../app/date/subtractYears/util/subtractYears.function';
import { SubtractYears } from '../../../../app/date/subtractYears/util/subtractYears.interface';

export class SubtractYearsTest {

  expectsDates: {
    numberOfYearsToSubtract: number;
    date: Date;
    expect: Date;
  }[] = [
      {
          numberOfYearsToSubtract: 2,
          date: new Date(2020, 10, 13),
          expect: new Date(2018, 10, 13)
      }
  ];

  constructor(private subtractYearsImpl: SubtractYears) { }

  runTest(): void {
      describe('Get current date with subtracted years', () => {
          this.expectsDates.forEach((expectDate) => {
              test('should return date with subtracted years', () => {
                  const result = new SubtractYearsFunction(this.subtractYearsImpl).subtractYears(expectDate.numberOfYearsToSubtract, expectDate.date);

                  expect(result.getDate()).toEqual(expectDate.expect.getDate());
                  expect(result.getMonth()).toEqual(expectDate.expect.getMonth());
                  expect(result.getFullYear()).toEqual(expectDate.expect.getFullYear());
              });
          });
      });
  }

}
