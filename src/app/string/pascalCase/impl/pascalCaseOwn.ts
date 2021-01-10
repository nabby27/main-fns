import { PascalCase } from '../util/pascalCase.interface';

export class PascalCaseOwn implements PascalCase {

  pascalCase(text: string): string {
    const textLowerCase = text.toLowerCase();

    return textLowerCase.charAt(0).toUpperCase() + textLowerCase.slice(1).replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase());
  }

}
