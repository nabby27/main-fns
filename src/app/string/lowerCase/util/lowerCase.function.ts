import { LowerCase } from './lowerCase.interface';

export class LowerCaseFunction {

  constructor(private lowerCaseImpl: LowerCase) { }

  lowerCase(text: string): string {
    return this.lowerCaseImpl.lowerCase(text);
  }

}
