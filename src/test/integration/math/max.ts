import { MathFunctions } from '../../../app/math/util/math.function';
import { MathUtil } from '../../../app/math/util/math.util.interface';

export class MaxTest {

  data: {
    array: number[];
    expect: number;
  }[] = [
    {
      array: [3, 1, 2],
      expect: 3
    },
    {
      array: [4, 6, 2, 5],
      expect: 6
    }
  ];

  constructor(private mathUtilImpl: MathUtil) {}

  runTest(): void {
    describe('Get biggest number from array', () => {
      this.data.forEach((item) => {
        test('should return biggest number from array', () => {
          const result = new MathFunctions(this.mathUtilImpl).max(item.array);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
