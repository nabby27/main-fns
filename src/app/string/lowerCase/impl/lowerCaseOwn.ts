import { LowerCase } from '../util/lowerCase.interface';

export class LowerCaseOwn implements LowerCase {

    lowerCase(text: string): string {
        return text.toLowerCase();
    }

}
