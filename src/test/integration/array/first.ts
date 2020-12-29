import { ArrayUtil } from '../../../app/array/util/array.util.interface';
import { ArrayFunctions } from '../../../app/array/util/array.function';

export class FirstTest {

  data: {
    array: unknown[];
    expect: unknown;
  }[] = [
    {
      array: [3, 2, 1],
      expect: 3
    },
    {
      array: ['a', 'b', 'c'],
      expect: 'a'
    }
  ];

  constructor(private arrayUtilImpl: ArrayUtil) {}

  runTest(): void {
    describe('Get first item from array', () => {
      this.data.forEach((item) => {
        test('should return first item from array', () => {
          const result = new ArrayFunctions(this.arrayUtilImpl).first(item.array);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
