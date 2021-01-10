import { LastLettersFunction } from '../../../../app/string/lastLetters/util/lastLetters.function';
import { LastLetters } from '../../../../app/string/lastLetters/util/lastLetters.interface';

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

  constructor(private lastLettersImpl: LastLetters) {}

  runTest(): void {
    describe('Get last letters', () => {
      this.data.forEach((item) => {
        test('should return last letters', () => {
          const result = new LastLettersFunction(this.lastLettersImpl).execute(item.text, item.numberOfLetters);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
