import { Max } from '../util/max.interface';

export class MaxOwn implements Max {

  max(numbers: number[]): number {
    return numbers.reduce((acc: number, number: number) => number > acc ? number : acc);
  }

}
