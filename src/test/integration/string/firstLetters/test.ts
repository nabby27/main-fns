import { FirstLettersFunction } from '../../../../app/string/firstLetters/util/firstLetters.function';
import { FirstLetters } from '../../../../app/string/firstLetters/util/firstLetters.interface';

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

  constructor(private firstLettersImpl: FirstLetters) {}

  runTest(): void {
    describe('Get first letters', () => {
      this.data.forEach((item) => {
        test('should return first letters', () => {
          const result = new FirstLettersFunction(this.firstLettersImpl).execute(item.text, item.numberOfLetters);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
