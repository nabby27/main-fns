import { IsBeforeFunction } from '../../../../app/date/isBefore/util/isBefore.function';
import { IsBefore } from '../../../../app/date/isBefore/util/isBefore.interface';

export class IsBeforeTest {

  expectsIsBefore: {
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

  constructor(private isBeforeImpl: IsBefore) {}

  runTest(): void {
      describe('Check if date is before dateToCompare', () => {
          this.expectsIsBefore.forEach((expectIsBefore) => {
              test('should return success if date is before dateToCompare', () => {
                  const result = new IsBeforeFunction(this.isBeforeImpl).isBefore(
                      expectIsBefore.date,
                      expectIsBefore.dateToCompare
                  );

                  expect(result).toEqual(expectIsBefore.expect);
              });
          });
      });
  }

}
