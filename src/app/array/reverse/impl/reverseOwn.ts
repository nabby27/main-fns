import { Reverse } from '../util/reverse.interface';

export class ReverseOwn implements Reverse {

  reverse<T>(array: T[]): T[] {
    return array.reverse();
  }

}
