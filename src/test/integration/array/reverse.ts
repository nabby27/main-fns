import { ArrayUtil } from '../../../app/array/util/array.util.interface';
import { ArrayFunctions } from '../../../app/array/util/array.function';

export class ReverseTest {

  data: {
    array: unknown[];
    expect: unknown;
  }[] = [
    {
      array: [3, 2, 1],
      expect: [1, 2, 3]
    },
    {
      array: ['a', 'b', 'c'],
      expect: ['c', 'b', 'a']
    }
  ];

  constructor(private arrayUtilImpl: ArrayUtil) {}

  runTest(): void {
    describe('Get array reversed', () => {
      this.data.forEach((item) => {
        test('should return array reversed', () => {
          const result = new ArrayFunctions(this.arrayUtilImpl).reverse(item.array);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
