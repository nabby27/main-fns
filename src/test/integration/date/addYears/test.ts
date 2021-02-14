import { AddYearsFunction } from '../../../../app/date/addYears/util/addYears.function';
import { AddYears } from '../../../../app/date/addYears/util/addYears.interface';

export class AddYearsTest {

  currentYear = new Date().getFullYear();
  currentMonth = new Date().getMonth();
  currentDay = new Date().getDate();

  expectsDates: {
    numberOfYearsToAdd: number;
    date: Date;
    expect: Date;
  }[] = [
      {
          numberOfYearsToAdd: 3,
          date: new Date(2020, 10, 13),
          expect: new Date(2023, 10, 13)
      }
  ];

  constructor(private addYearsImpl: AddYears) {}

  runTest(): void {
      describe('Get date with added years', () => {
          this.expectsDates.forEach((expectDate) => {
              test('should return date with added years', () => {
                  const result = new AddYearsFunction(this.addYearsImpl).addYears(
                      expectDate.numberOfYearsToAdd,
                      expectDate.date
                  );

                  expect(result.getFullYear()).toEqual(expectDate.expect.getFullYear());
                  expect(result.getMonth()).toEqual(expectDate.expect.getMonth());
                  expect(result.getDate()).toEqual(expectDate.expect.getDate());
              });
          });
      });
  }

}
