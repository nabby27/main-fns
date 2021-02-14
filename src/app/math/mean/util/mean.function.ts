import { Mean } from './mean.interface';

export class MeanFunction {

    constructor(private meanImpl: Mean) { }

    mean(numbers: number[]): number {
        return this.meanImpl.mean(numbers);
    }

}
