import { Max } from '../util/max.interface';

export class MaxOwn implements Max {

    max(numbers: number[]): number {
        return Math.max(...numbers);
    }

}
