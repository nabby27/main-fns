import { AddMonthsFunction } from '../../../../app/date/addMonths/util/addMonths.function';
import { AddMonths } from '../../../../app/date/addMonths/util/addMonths.interface';

export class AddMonthsTest {

  expectsDates: {
    numberOfMonthsToAdd: number;
    date: Date;
    expect: Date;
  }[] = [
      {
          numberOfMonthsToAdd: 3,
          date: new Date(2020, 10, 13),
          expect: new Date(2020, 13, 13)
      },
      {
          numberOfMonthsToAdd: 1,
          date: new Date(2020, 11, 13),
          expect: new Date(2021, 0, 13)
      }
  ];

  constructor(private addMonthsImpl: AddMonths) {}

  runTest(): void {
      describe('Get date with added months', () => {
          this.expectsDates.forEach((expectDate) => {
              test('should return date with added months', () => {
                  const result = new AddMonthsFunction(this.addMonthsImpl).addMonths(
                      expectDate.numberOfMonthsToAdd,
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
