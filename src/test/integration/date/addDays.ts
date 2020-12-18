import { DateFunctions } from '../../../app/date/util/date.function';
import { DateUtil } from '../../../app/date/util/date.util.interface';

export class AddDaysTest {

  expectsDates: {
    numberOfDaysToAdd: number;
    date: Date;
    expect: Date;
  }[] = [
    {
      numberOfDaysToAdd: 3,
      date: new Date(2020, 10, 13),
      expect: new Date(2020, 10, 16)
    },
    {
      numberOfDaysToAdd: 2,
      date: new Date(2020, 10, 30),
      expect: new Date(2020, 11, 2)
    }
  ];

  constructor(private dateUtilImpl: DateUtil) {}

  runTest(): void {
    describe('Get date with added days', () => {
      this.expectsDates.forEach((expectDate) => {
        test('should return date with added days', () => {
          const result = new DateFunctions(this.dateUtilImpl).addDays(
            expectDate.numberOfDaysToAdd,
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
