import { KebabCase } from './kebabCase.interface';

export class KebabCaseFunction {

  constructor(private kebabCaseImpl: KebabCase) { }

  execute(text: string): string {
    return this.kebabCaseImpl.kebabCase(text);
  }

}
