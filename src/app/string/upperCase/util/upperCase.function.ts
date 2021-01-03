import { UpperCase } from './upperCase.interface';

export class UpperCaseFunction {

  constructor(private upperCaseImpl: UpperCase) { }

  upperCase(text: string): string {
    return this.upperCaseImpl.upperCase(text);
  }

}
