import { Last } from './last.interface';

export class LastFunction {

    constructor(private lastImpl: Last) { }

    last<T>(array: T[]): T {
        return this.lastImpl.last(array);
    }

}
