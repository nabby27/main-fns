import { MathUtil } from './math.util.interface';

export class MathFunctions {

  constructor(private mathUtilImpl: MathUtil) { }
  
  max(numbers: number[]): number {
    return this.mathUtilImpl.max(numbers);
  }

  mean(numbers: number[]): number {
    return this.mathUtilImpl.mean(numbers);
  }

  median(numbers: number[]): number {
    return this.mathUtilImpl.median(numbers);
  }

  min(numbers: number[]): number {
    return this.mathUtilImpl.min(numbers);
  }

  mode(numbers: number[]): number[] {
    return this.mathUtilImpl.mode(numbers);
  }

  multiply(numbers: number[]): number {
    return this.mathUtilImpl.multiply(numbers);
  }

  sum(numbers: number[]): number {
    return this.mathUtilImpl.sum(numbers);
  }

}
