import { Sum } from '../util/sum.interface';

export class SumOwn implements Sum {

    sum(numbers: number[]): number {
        return numbers.reduce((acc: number, number: number) => acc + number, 0);
    }

}
