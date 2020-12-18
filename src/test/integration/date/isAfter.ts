import { DateFunctions } from '../../../app/date/util/date.function';
import { DateUtil } from '../../../app/date/util/date.util.interface';

export class IsAfterTest {

  expectsIsAfter: {
    date: Date;
    dateToCompare: Date;
    expect: boolean;
  }[] = [
    {
      date: new Date(2020, 10, 14),
      dateToCompare: new Date(2020, 10, 13),
      expect: true
    },
    {
      date: new Date(2020, 10, 13),
      dateToCompare: new Date(2020, 10, 14),
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
    describe('Check if date is after dateToCompare', () => {
      this.expectsIsAfter.forEach((expectIsAfter) => {
        test('should return success if date is after dateToCompare', () => {
          const result = new DateFunctions(this.dateUtilImpl).isAfter(
            expectIsAfter.date,
            expectIsAfter.dateToCompare
          );

          expect(result).toEqual(expectIsAfter.expect);
        });
      });
    });
  }

}
