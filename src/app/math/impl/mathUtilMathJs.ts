import { min } from 'mathjs';
import { MathUtil } from '../util/math.util.interface';

export class MathUtilMathJs implements MathUtil {

  min(numbers: number[]): number {
    return min(numbers);
  }

}
