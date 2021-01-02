import { MathFunctions } from '../../../app/math/util/math.function';
import { MathUtil } from '../../../app/math/util/math.util.interface';

export class MeanTest {

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
      expect: 4.25
    }
  ];

  constructor(private mathUtilImpl: MathUtil) {}

  runTest(): void {
    describe('Get mean from array', () => {
      this.data.forEach((item) => {
        test('should return mean from array', () => {
          const result = new MathFunctions(this.mathUtilImpl).mean(item.array);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
