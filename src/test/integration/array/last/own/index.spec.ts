import { LastOwn } from '../../../../../app/array/last/impl/lastOwn';
import { LastTest } from '../test';

const lastOwn = new LastOwn();

new LastTest(lastOwn).runTest();
