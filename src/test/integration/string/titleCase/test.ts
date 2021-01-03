import { TitleCaseFunction } from '../../../../app/string/titleCase/util/titleCase.function';
import { TitleCase } from '../../../../app/string/titleCase/util/titleCase.interface';

export class TitleCaseTest {

  data: {
    text: string;
    expect: string;
  }[] = [
    {
      text: 'HELLO world',
      expect: 'Hello World'
    },
    {
      text: 'good bye',
      expect: 'Good Bye'
    }
  ];

  constructor(private titleCaseImpl: TitleCase) {}

  runTest(): void {
    describe('Get titleCase text', () => {
      this.data.forEach((item) => {
        test('should return titleCase text', () => {
          const result = new TitleCaseFunction(this.titleCaseImpl).titleCase(item.text);

          expect(result).toEqual(item.expect);
        });
      });
    });
  }

}
