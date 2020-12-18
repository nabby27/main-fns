import { DateFunctions } from '../../../app/date/util/date.function';
import { DateUtil } from '../../../app/date/util/date.util.interface';

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

  constructor(private dateUtilImpl: DateUtil) { }

  runTest(): void {
    describe('Get current date with subtracted years', () => {
      this.expectsDates.forEach((expectDate) => {
        test('should return date with subtracted years', () => {
          const result = new DateFunctions(this.dateUtilImpl).subtractYears(expectDate.numberOfYearsToSubtract, expectDate.date);

          expect(result.getDate()).toEqual(expectDate.expect.getDate());
          expect(result.getMonth()).toEqual(expectDate.expect.getMonth());
          expect(result.getFullYear()).toEqual(expectDate.expect.getFullYear());
        });
      });
    });
  }

}
