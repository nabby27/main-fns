import { MinFunction } from '../../../../app/math/min/util/min.function';
import { Min } from '../../../../app/math/min/util/min.interface';

export class MinTest {

  data: {
    array: number[];
    expect: number;
  }[] = [
      {
          array: [3, 1, 2],
          expect: 1
      },
      {
          array: [4, 6, 2, 5],
          expect: 2
      }
  ];

  constructor(private minImpl: Min) {}

  runTest(): void {
      describe('Get smallest number from array', () => {
          this.data.forEach((item) => {
              test('should return smallest number from array', () => {
                  const result = new MinFunction(this.minImpl).min(item.array);

                  expect(result).toEqual(item.expect);
              });
          });
      });
  }

}
