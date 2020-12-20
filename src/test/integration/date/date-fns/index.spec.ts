import { DateUtilDateFns } from '../../../../app/date/impl/dateUtilDateFns';
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

const dateUtilDateFns = new DateUtilDateFns();

new AddDaysTest(dateUtilDateFns).runTest();
new AddMonthsTest(dateUtilDateFns).runTest();
new AddYearsTest(dateUtilDateFns).runTest();
new DateToStringTest(dateUtilDateFns).runTest();
new IsAfterTest(dateUtilDateFns).runTest();
new IsBeforeTest(dateUtilDateFns).runTest();
new SetEndTimeTest(dateUtilDateFns).runTest();
new SetInitTimeTest(dateUtilDateFns).runTest();
new SubtractDaysTest(dateUtilDateFns).runTest();
new SubtractMonthsTest(dateUtilDateFns).runTest();
new SubtractYearsTest(dateUtilDateFns).runTest();
