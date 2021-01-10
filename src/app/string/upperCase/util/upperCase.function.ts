import { UpperCase } from './upperCase.interface';

export class UpperCaseFunction {

  constructor(private upperCaseImpl: UpperCase) { }

  execute(text: string): string {
    return this.upperCaseImpl.upperCase(text);
  }

}
