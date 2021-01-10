import { UpperCase } from '../util/upperCase.interface';

export class UpperCaseOwn implements UpperCase {

  upperCase(text: string): string {
    return text.toUpperCase();
  }

}
