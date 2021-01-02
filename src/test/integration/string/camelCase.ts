import { StringFunctions } from '../../../app/string/util/string.function';
import { StringUtil } from '../../../app/string/util/string.util.interface';

export class CamelCaseTest {

  data: {
    text: string;
    expect: string;
  }[] = [
    {
      text: 'hello world',
      expect: 'helloWorld'
    },
    {
      text: 'bYE',
      expect: 'bye'
    }
  ];

  constructor(private stringUtilImpl: StringUtil) {}

  runTest(): void {
    describe('Get camelCase text', () => {
      this.data.forEach((item) => {
        test('should return camelCase text', () => {
          const result = new StringFunctions(this.stringUtilImpl).camelCase(item.text);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
