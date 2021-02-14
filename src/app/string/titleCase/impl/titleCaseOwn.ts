import { TitleCase } from '../util/titleCase.interface';

export class TitleCaseOwn implements TitleCase {

    titleCase(text: string): string {
        const textLowerCase = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

        return textLowerCase.replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => ' ' + chr.toUpperCase());
    }

}
