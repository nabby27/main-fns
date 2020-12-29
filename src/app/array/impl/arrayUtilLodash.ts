import * as lodash from 'lodash';
import { ArrayUtil } from '../util/array.util.interface';

export class ArrayUtilLodash implements ArrayUtil {

  first<T>(array: T[]): T {
    return lodash.first(array);
  }

  last<T>(array: T[]): T {
    return lodash.last(array);
  }

  reverse<T>(array: T[]): T[] {
    return lodash.reverse(array);
  }

}
