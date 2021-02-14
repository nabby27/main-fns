import { MultiplyFunction } from '../../../../app/math/multiply/util/multiply.function';
import { Multiply } from '../../../../app/math/multiply/util/multiply.interface';

export class MultiplyTest {

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
          expect: 240
      }
  ];

  constructor(private multiplyImpl: Multiply) {}

  runTest(): void {
      describe('Get product from numbers', () => {
          this.data.forEach((item) => {
              test('should return product from numbers', () => {
                  const result = new MultiplyFunction(this.multiplyImpl).multiply(item.array);

                  expect(result).toEqual(item.expect);
              });
          });
      });
  }

}
