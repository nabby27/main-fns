import { KebabCase } from '../util/kebabCase.interface';

export class KebabCaseOwn implements KebabCase {

  kebabCase(text: string): string {
    return text.toLowerCase().replace(/\s/g, '-');
  }

}
