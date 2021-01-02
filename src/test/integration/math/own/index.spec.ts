import { MathUtilOwn } from '../../../../app/math/impl/mathUtilOwn';
import { MeanTest } from '../mean';
import { MaxTest } from '../max';
import { MedianTest } from '../median';
import { MinTest } from '../min';
import { ModeTest } from '../mode';
import { MultiplyTest } from '../multiply';
import { SumTest } from '../sum';

const mathUtilOwn = new MathUtilOwn();

new MaxTest(mathUtilOwn).runTest();
new MeanTest(mathUtilOwn).runTest();
new MedianTest(mathUtilOwn).runTest();
new MinTest(mathUtilOwn).runTest();
new ModeTest(mathUtilOwn).runTest();
new MultiplyTest(mathUtilOwn).runTest();
new SumTest(mathUtilOwn).runTest();
