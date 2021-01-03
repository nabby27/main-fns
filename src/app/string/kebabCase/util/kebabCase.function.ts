import { KebabCase } from './kebabCase.interface';

export class KebabCaseFunction {

  constructor(private kebabCaseImpl: KebabCase) { }

  kebabCase(text: string): string {
    return this.kebabCaseImpl.kebabCase(text);
  }

}
