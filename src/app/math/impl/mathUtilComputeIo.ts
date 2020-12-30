import * as compute from 'compute.io';
import { MathUtil } from '../util/math.util.interface';

export class MathUtilComputeIo implements MathUtil {

  max(numbers: number[]): number {
    return compute.max(numbers) as number;
  }

  min(numbers: number[]): number {
    return compute.min(numbers) as number;
  }

  sum(numbers: number[]): number {
    return compute.sum(numbers) as number;
  }

}
