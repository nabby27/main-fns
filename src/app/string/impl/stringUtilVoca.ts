import { StringUtil } from '../util/string.util.interface';
import * as voca from 'voca';

export class StringUtilVoca implements StringUtil {

  camelCase(text: string): string {
    const textLowerCase = this.lowerCase(text);

    return voca.camelCase(textLowerCase);
  }

  capitalize(text: string): string {
    const textLowerCase = this.lowerCase(text);

    return voca.capitalize(textLowerCase);
  }

  firstLetters(text: string, numberOfLetters: number): string {
    const textLowerCase = this.lowerCase(text);

    return voca.first(textLowerCase, numberOfLetters);
  }

  kebabCase(text: string): string {
    const textLowerCase = this.lowerCase(text);

    return voca.kebabCase(textLowerCase);
  }

  lastLetters(text: string, numberOfLetters: number): string {
    const textLowerCase = this.lowerCase(text);

    return voca.last(textLowerCase, numberOfLetters);
  }

  lowerCase(text: string): string {
    return voca.lowerCase(text);
  }

  snakeCase(text: string): string {
    return voca.snakeCase(text);
  }

  titleCase(text: string): string {
    return voca.titleCase(text);
  }

  upperCase(text: string): string {
    return voca.upperCase(text);
  }

}
