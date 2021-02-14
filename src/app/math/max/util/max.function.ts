import { Max } from './max.interface';

export class MaxFunction {

    constructor(private maxImpl: Max) { }

    max(numbers: number[]): number {
        return this.maxImpl.max(numbers);
    }

}
