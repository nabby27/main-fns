import { Capitalize } from '../util/capitalize.interface';

export class CapitalizeOwn implements Capitalize {

  capitalize(text: string): string {
    const textLowerCase = text.toLowerCase();

    return textLowerCase.charAt(0).toUpperCase() + textLowerCase.slice(1);
  }

}
