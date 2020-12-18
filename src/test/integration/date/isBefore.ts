import { DateFunctions } from '../../../app/date/util/date.function';
import { DateUtil } from '../../../app/date/util/date.util.interface';

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

  constructor(private dateUtilImpl: DateUtil) {}

  runTest(): void {
    describe('Check if date is before dateToCompare', () => {
      this.expectsIsBefore.forEach((expectIsBefore) => {
        test('should return success if date is before dateToCompare', () => {
          const result = new DateFunctions(this.dateUtilImpl).isBefore(
            expectIsBefore.date,
            expectIsBefore.dateToCompare
          );

          expect(result).toEqual(expectIsBefore.expect);
        });
      });
    });
  }

}
