import { Reverse } from './reverse.interface';

export class ReverseFunction {

    constructor(private reverseImpl: Reverse) { }

    reverse<T>(array: T[]): T[] {
        return this.reverseImpl.reverse(array);
    }

}
