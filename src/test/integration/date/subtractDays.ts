import { DateFunctions } from '../../../app/date/util/date.function';
import { DateUtil } from '../../../app/date/util/date.util.interface';

export class SubtractDaysTest {

  currentDay = new Date().getDate();
  currentMonth = new Date().getMonth();
  currentYear = new Date().getFullYear();

  expectsDates: {
    numberOfDaysTosubtract: number;
    date: Date;
    expect: Date;
  }[] = [
    {
      numberOfDaysTosubtract: 3,
      date: new Date(2020, 10, 13),
      expect: new Date(2020, 10, 10)
    },
    {
      numberOfDaysTosubtract: 2,
      date: new Date(2020, 11, 2),
      expect: new Date(2020, 10, 30)
    }
  ];

  constructor(private dateUtilImpl: DateUtil) { }

  runTest(): void {
    describe('Get current date with subtracted days', () => {
      this.expectsDates.forEach((expectDate) => {
        test('should return date with subtracted days', () => {
          const result = new DateFunctions(this.dateUtilImpl).subtractDays(expectDate.numberOfDaysTosubtract, expectDate.date);

          expect(result.getDate()).toEqual(expectDate.expect.getDate());
          expect(result.getMonth()).toEqual(expectDate.expect.getMonth());
          expect(result.getFullYear()).toEqual(expectDate.expect.getFullYear());
        });
      });
    });
  }

}
