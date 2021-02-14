import { LowerCaseFunction } from '../../../../app/string/lowerCase/util/lowerCase.function';
import { LowerCase } from '../../../../app/string/lowerCase/util/lowerCase.interface';

export class LowerCaseTest {

  data: {
    text: string;
    expect: string;
  }[] = [
      {
          text: 'HELLO wOrLd',
          expect: 'hello world'
      },
      {
          text: 'Good Bye',
          expect: 'good bye'
      }
  ];

  constructor(private lowerCaseImpl: LowerCase) {}

  runTest(): void {
      describe('Get lowerCase text', () => {
          this.data.forEach((item) => {
              test('should return lowerCase text', () => {
                  const result = new LowerCaseFunction(this.lowerCaseImpl).execute(item.text);

                  expect(result).toEqual(item.expect);
              });
          });
      });
  }

}
