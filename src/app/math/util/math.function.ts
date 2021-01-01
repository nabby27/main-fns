import { MathUtil } from './math.util.interface';

export class MathFunctions {

  constructor(private mathUtilImpl: MathUtil) { }

  median(numbers: number[]): number {
    return this.mathUtilImpl.median(numbers);
  }

  max(numbers: number[]): number {
    return this.mathUtilImpl.max(numbers);
  }

  min(numbers: number[]): number {
    return this.mathUtilImpl.min(numbers);
  }

  multiply(numbers: number[]): number {
    return this.mathUtilImpl.multiply(numbers);
  }

  sum(numbers: number[]): number {
    return this.mathUtilImpl.sum(numbers);
  }

}
