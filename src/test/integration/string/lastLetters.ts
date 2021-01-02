import { StringFunctions } from '../../../app/string/util/string.function';
import { StringUtil } from '../../../app/string/util/string.util.interface';

export class LastLettersTest {

  data: {
    text: string;
    numberOfLetters: number,
    expect: string;
  }[] = [
    {
      text: 'hello',
      numberOfLetters: 1,
      expect: 'o'
    },
    {
      text: 'bYE',
      numberOfLetters: 2,
      expect: 'ye'
    }
  ];

  constructor(private stringUtilImpl: StringUtil) {}

  runTest(): void {
    describe('Get last letters', () => {
      this.data.forEach((item) => {
        test('should return last letters', () => {
          const result = new StringFunctions(this.stringUtilImpl).lastLetters(item.text, item.numberOfLetters);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
