import { CamelCase } from './camelCase.interface';

export class CamelCaseFunction {

  constructor(private camelCaseImpl: CamelCase) { }

  camelCase(text: string): string {
    return this.camelCaseImpl.camelCase(text);
  }

}
