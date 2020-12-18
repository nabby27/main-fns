import { DateUtilMoment } from '../../../../app/date/impl/dateUtilMoment';
import { AddDaysTest } from '../addDays';
import { AddMonthsTest } from '../addMonths';
import { AddYearsTest } from '../addYears';
import { DateToStringTest } from '../dateToString';
import { IsAfterTest } from '../isAfter';
import { IsBeforeTest } from '../isBefore';
import { SetEndTimeTest } from '../setEndTime';
import { SetInitTimeTest } from '../setInitTime';
import { SubtractDaysTest } from '../subtractDays';
import { SubtractMonthsTest } from '../subtractMonths';
import { SubtractYearsTest } from '../subtractYears';

const dateImpl = new DateUtilMoment();

new AddDaysTest(dateImpl).runTest();
new AddMonthsTest(dateImpl).runTest();
new AddYearsTest(dateImpl).runTest();
new DateToStringTest(dateImpl).runTest();
new IsAfterTest(dateImpl).runTest();
new IsBeforeTest(dateImpl).runTest();
new SetEndTimeTest(dateImpl).runTest();
new SetInitTimeTest(dateImpl).runTest();
new SubtractDaysTest(dateImpl).runTest();
new SubtractMonthsTest(dateImpl).runTest();
new SubtractYearsTest(dateImpl).runTest();
