import { StringUtil } from './string.util.interface';

export class StringFunctions {

  constructor(private stringUtilImpl: StringUtil) { }

  camelCase(text: string): string {
    return this.stringUtilImpl.camelCase(text);
  }

  capitalize(text: string): string {
    return this.stringUtilImpl.capitalize(text);
  }

  firstLetters(text: string, numberOfLetters: number): string {
    return this.stringUtilImpl.firstLetters(text, numberOfLetters);
  }

  kebabCase(text: string): string {
    return this.stringUtilImpl.kebabCase(text);
  }

  lastLetters(text: string, numberOfLetters: number): string {
    return this.stringUtilImpl.lastLetters(text, numberOfLetters);
  }

  lowerCase(text: string): string {
    return this.stringUtilImpl.lowerCase(text);
  }

  snakeCase(text: string): string {
    return this.stringUtilImpl.snakeCase(text);
  }

  titleCase(text: string): string {
    return this.stringUtilImpl.titleCase(text);
  }

  upperCase(text: string): string {
    return this.stringUtilImpl.upperCase(text);
  }

}
