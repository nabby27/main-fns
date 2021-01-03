import { TitleCase } from '../util/titleCase.interface';
import * as voca from 'voca';

export class TitleCaseVoca implements TitleCase {

  titleCase(text: string): string {
    return voca.titleCase(text);
  }

}
