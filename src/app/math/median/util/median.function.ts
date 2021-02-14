import { Median } from './median.interface';

export class MedianFunction {

    constructor(private medianImpl: Median) { }

    median(numbers: number[]): number {
        return this.medianImpl.median(numbers);
    }

}
