import { Median } from '../util/median.interface';

export class MedianOwn implements Median {

  median(numbers: number[]): number {
    if (0 === numbers.length) {
      return 0;
    }

    const half = Math.floor(numbers.length / 2);
    const numbersOrdered = numbers.sort();

    if (0 === numbers.length % 2) {
      return (numbersOrdered[half - 1] + numbersOrdered[half]) / 2.0;
    }

    return numbersOrdered[half];
  }

}
