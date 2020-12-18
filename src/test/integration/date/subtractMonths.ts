import { DateFunctions } from '../../../app/date/util/date.function';
import { DateUtil } from '../../../app/date/util/date.util.interface';

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

  constructor(private dateUtilImpl: DateUtil) { }

  runTest(): void {
    describe('Get current date with subtracted months', () => {
      this.expectsDates.forEach((expectDate) => {
        test('should return date with subtracted months', () => {
          const result = new DateFunctions(this.dateUtilImpl).subtractMonths(expectDate.numberOfMonthsTosubtract, expectDate.date);

          expect(result.getDate()).toEqual(expectDate.expect.getDate());
          expect(result.getMonth()).toEqual(expectDate.expect.getMonth());
          expect(result.getFullYear()).toEqual(expectDate.expect.getFullYear());
        });
      });
    });
  }

}
