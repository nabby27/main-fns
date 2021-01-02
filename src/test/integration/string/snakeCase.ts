import { StringFunctions } from '../../../app/string/util/string.function';
import { StringUtil } from '../../../app/string/util/string.util.interface';

export class SnakeCaseTest {

  data: {
    text: string;
    expect: string;
  }[] = [
    {
      text: 'HELLO world',
      expect: 'hello_world'
    },
    {
      text: 'Good Bye',
      expect: 'good_bye'
    }
  ];

  constructor(private stringUtilImpl: StringUtil) {}

  runTest(): void {
    describe('Get snakeCase text', () => {
      this.data.forEach((item) => {
        test('should return snakeCase text', () => {
          const result = new StringFunctions(this.stringUtilImpl).snakeCase(item.text);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
