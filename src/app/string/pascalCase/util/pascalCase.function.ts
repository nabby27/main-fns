import { PascalCase } from './pascalCase.interface';

export class PascalCaseFunction {

  constructor(private pascalCaseImpl: PascalCase) { }

  execute(text: string): string {
    return this.pascalCaseImpl.pascalCase(text);
  }

}
