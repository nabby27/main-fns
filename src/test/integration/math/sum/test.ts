import { SumFunction } from '../../../../app/math/sum/util/sum.function';
import { Sum } from '../../../../app/math/sum/util/sum.interface';

export class SumTest {

  data: {
    array: number[];
    expect: number;
  }[] = [
    {
      array: [3, 1, 2],
      expect: 6
    },
    {
      array: [4, 6, 2, 5],
      expect: 17
    }
  ];

  constructor(private sumImpl: Sum) {}

  runTest(): void {
    describe('Get sum from numbers', () => {
      this.data.forEach((item) => {
        test('should return sum from numbers', () => {
          const result = new SumFunction(this.sumImpl).sum(item.array);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
