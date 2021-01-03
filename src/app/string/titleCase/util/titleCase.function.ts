import { TitleCase } from './titleCase.interface';

export class TitleCaseFunction {

  constructor(private titleCaseImpl: TitleCase) { }

  titleCase(text: string): string {
    return this.titleCaseImpl.titleCase(text);
  }

}
