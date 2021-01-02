import { MathUtil } from '../util/math.util.interface';

export class MathUtilOwn implements MathUtil {

  max(numbers: number[]): number {
    return numbers.reduce((acc: number, number: number) => number > acc ? number : acc);
  }

  mean(numbers: number[]): number {
    const sum = this.sum(numbers);
    return sum / numbers.length;
  }

  median(numbers: number[]): number {
    if (numbers.length === 0) return 0;

    const half = Math.floor(numbers.length / 2);
    const numbersOrdered = numbers.sort();  
    
    if (numbers.length % 2 === 0) {
      return (numbersOrdered[half - 1] + numbersOrdered[half]) / 2.0;
    }

    return numbersOrdered[half];
  }

  min(numbers: number[]): number {
    return numbers.reduce((acc: number, number: number) => acc > number ? number : acc);
  }

  mode(numbers: number[]): number[] {
    const modes: number[] = []
    let count = {};
    let maxRepeat = 0;
 
    numbers.forEach((number: number) => {
      count[number] = (count[number] || 0) + 1;
      if (count[number] > maxRepeat) {
        maxRepeat = count[number];
      }
    })

    for (const number in count) {
      if (count[number] === maxRepeat) {
          modes.push(Number(number));
      }
    }
 
    return modes;
  }

  multiply(numbers: number[]): number {
    return numbers.reduce((acc: number, number: number) => acc * number, 1);
  }

  sum(numbers: number[]): number {
    return numbers.reduce((acc: number, number: number) => acc + number, 0);
  }

}
