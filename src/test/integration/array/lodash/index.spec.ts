import { ArrayUtilLodash } from '../../../../app/array/impl/arrayUtilLodash';
import { FirstTest } from '../first';
import { LastTest } from '../last';
import { ReverseTest } from '../reverse';

const arrayUtilLodash = new ArrayUtilLodash();

new FirstTest(arrayUtilLodash).runTest();
new LastTest(arrayUtilLodash).runTest();
new ReverseTest(arrayUtilLodash).runTest();
