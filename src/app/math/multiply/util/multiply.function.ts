import { Multiply } from './multiply.interface';

export class MultiplyFunction {

    constructor(private multiplyImpl: Multiply) { }

    multiply(numbers: number[]): number {
        return this.multiplyImpl.multiply(numbers);
    }

}
