import { MathUtilComputeIo } from '../../../../app/math/impl/mathUtilComputeIo';
import { MaxTest } from '../max';
import { MinTest } from '../min';
import { SumTest } from '../sum';

const mathUtilComputeIo = new MathUtilComputeIo();

new MaxTest(mathUtilComputeIo).runTest();
new MinTest(mathUtilComputeIo).runTest();
new SumTest(mathUtilComputeIo).runTest();
