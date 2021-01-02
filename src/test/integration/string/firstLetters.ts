import { StringFunctions } from '../../../app/string/util/string.function';
import { StringUtil } from '../../../app/string/util/string.util.interface';

export class FirstLettersTest {

  data: {
    text: string;
    numberOfLetters: number,
    expect: string;
  }[] = [
    {
      text: 'hello',
      numberOfLetters: 1,
      expect: 'h'
    },
    {
      text: 'bYE',
      numberOfLetters: 2,
      expect: 'by'
    }
  ];

  constructor(private stringUtilImpl: StringUtil) {}

  runTest(): void {
    describe('Get first letters', () => {
      this.data.forEach((item) => {
        test('should return first letters', () => {
          const result = new StringFunctions(this.stringUtilImpl).firstLetters(item.text, item.numberOfLetters);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
