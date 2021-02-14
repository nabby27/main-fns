import { Multiply } from '../util/multiply.interface';

export class MultiplyOwn implements Multiply {

    multiply(numbers: number[]): number {
        return numbers.reduce((acc: number, number: number) => acc * number, 1);
    }

}
