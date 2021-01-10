import { LowerCase } from './lowerCase.interface';

export class LowerCaseFunction {

  constructor(private lowerCaseImpl: LowerCase) { }

  execute(text: string): string {
    return this.lowerCaseImpl.lowerCase(text);
  }

}
