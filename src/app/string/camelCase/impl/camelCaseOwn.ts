import { CamelCase } from '../util/camelCase.interface';

export class CamelCaseOwn implements CamelCase {

    camelCase(text: string): string {
        return text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase());
    }

}
