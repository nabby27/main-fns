import { MathFunctions } from '../../../app/math/util/math.function';
import { MathUtil } from '../../../app/math/util/math.util.interface';

export class MedianTest {

  data: {
    array: number[];
    expect: number;
  }[] = [
    {
      array: [3, 1, 2],
      expect: 2
    },
    {
      array: [4, 6, 2, 5],
      expect: 4.5
    }
  ];

  constructor(private mathUtilImpl: MathUtil) {}

  runTest(): void {
    describe('Get median from numbers', () => {
      this.data.forEach((item) => {
        test('should return median from numbers', () => {
          const result = new MathFunctions(this.mathUtilImpl).median(item.array);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
