import { CamelCase } from './camelCase.interface';

export class CamelCaseFunction {

    constructor(private camelCaseImpl: CamelCase) { }

    execute(text: string): string {
        return this.camelCaseImpl.camelCase(text);
    }

}
