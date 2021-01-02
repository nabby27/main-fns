import { StringFunctions } from '../../../app/string/util/string.function';
import { StringUtil } from '../../../app/string/util/string.util.interface';

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

  constructor(private stringUtilImpl: StringUtil) {}

  runTest(): void {
    describe('Get capitalized text', () => {
      this.data.forEach((item) => {
        test('should return capitalized text', () => {
          const result = new StringFunctions(this.stringUtilImpl).capitalize(item.text);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
