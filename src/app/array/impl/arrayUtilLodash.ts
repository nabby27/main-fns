import * as lodash from 'lodash';
import { ArrayUtil } from '../util/array.util.interface';

export class ArrayUtilLodash implements ArrayUtil {

  first<T>(array: T[]): T {
    return lodash.first(array) as T;
  }

  last<T>(array: T[]): T {
    return lodash.last(array) as T;
  }

  orderBy<T>(key: string, array: T[]): T[] {
    return lodash.orderBy(array, [key], ['asc']) as T[];
  }

  reverse<T>(array: T[]): T[] {
    return lodash.reverse(array) as T[];
  }

}
