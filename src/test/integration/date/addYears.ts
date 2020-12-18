import { DateFunctions } from '../../../app/date/util/date.function';
import { DateUtil } from '../../../app/date/util/date.util.interface';

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

  constructor(private dateUtilImpl: DateUtil) {}

  runTest(): void {
    describe('Get date with added years', () => {
      this.expectsDates.forEach((expectDate) => {
        test('should return date with added years', () => {
          const result = new DateFunctions(this.dateUtilImpl).addYears(
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
