import { Last } from '../../../../app/array/last/util/last.interface';
import { LastFunction } from '../../../../app/array/last/util/last.function';

export class LastTest {

  data: {
    array: unknown[];
    expect: unknown;
  }[] = [
    {
      array: [3, 2, 1],
      expect: 1
    },
    {
      array: ['a', 'b', 'c'],
      expect: 'c'
    }
  ];

  constructor(private lastImpl: Last) {}

  runTest(): void {
    describe('Get last item from array', () => {
      this.data.forEach((item) => {
        test('should return last item from array', () => {
          const result = new LastFunction(this.lastImpl).last(item.array);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
