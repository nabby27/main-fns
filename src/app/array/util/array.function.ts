import { ArrayUtil } from './array.util.interface';

export class ArrayFunctions {

  constructor(private arrayUtilImpl: ArrayUtil) { }

  first<T>(array: T[]): T {
    return this.arrayUtilImpl.first(array);
  }

  last<T>(array: T[]): T {
    return this.arrayUtilImpl.last(array);
  }

  reverse<T>(array: T[]): T[] {
    return this.arrayUtilImpl.reverse(array);
  }

}
