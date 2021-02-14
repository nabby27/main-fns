import { First } from './first.interface';

export class FirstFunction {

    constructor(private firstImpl: First) { }

    first<T>(array: T[]): T {
        return this.firstImpl.first(array);
    }

}
