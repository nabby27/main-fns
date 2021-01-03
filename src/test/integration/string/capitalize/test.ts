import { CapitalizeFunction } from '../../../../app/string/capitalize/util/capitalize.function';
import { Capitalize } from '../../../../app/string/capitalize/util/capitalize.interface';

export class CapitalizeTest {

  data: {
    text: string;
    expect: string;
  }[] = [
    {
      text: 'hello',
      expect: 'Hello'
    },
    {
      text: 'bYE',
      expect: 'Bye'
    }
  ];

  constructor(private capitalizeImpl: Capitalize) {}

  runTest(): void {
    describe('Get capitalized text', () => {
      this.data.forEach((item) => {
        test('should return capitalized text', () => {
          const result = new CapitalizeFunction(this.capitalizeImpl).capitalize(item.text);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
