import { Sum } from './sum.interface';

export class SumFunction {

    constructor(private sumImpl: Sum) { }

    sum(numbers: number[]): number {
        return this.sumImpl.sum(numbers);
    }

}
