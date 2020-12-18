import { DateFunctions } from '../../../app/date/util/date.function';
import { DateUtil } from '../../../app/date/util/date.util.interface';

export class SetEndTimeTest {

  expectsDates: {
    date: Date;
    expect: Date;
  }[] = [
    {
      date: new Date(2020, 10, 13, 22, 59, 59, 220),
      expect: new Date(2020, 10, 13, 23, 59, 59, 999)
    }
  ];

  constructor(private dateUtilImpl: DateUtil) {}

  runTest(): void {
    describe('Get date with end time', () => {
      this.expectsDates.forEach((expectDate) => {
        test(`should return date ${expectDate.expect} with end time`, () => {
          const result = new DateFunctions(this.dateUtilImpl).setEndTime(expectDate.date);

          expect(result.getFullYear()).toEqual(expectDate.expect.getFullYear());
          expect(result.getMonth()).toEqual(expectDate.expect.getMonth());
          expect(result.getDate()).toEqual(expectDate.expect.getDate());
          expect(result.getHours()).toEqual(expectDate.expect.getHours());
          expect(result.getMinutes()).toEqual(expectDate.expect.getMinutes());
          expect(result.getSeconds()).toEqual(expectDate.expect.getSeconds());
        });
      });
    });
  }

}
