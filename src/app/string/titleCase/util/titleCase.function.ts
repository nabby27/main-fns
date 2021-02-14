import { TitleCase } from './titleCase.interface';

export class TitleCaseFunction {

    constructor(private titleCaseImpl: TitleCase) { }

    execute(text: string): string {
        return this.titleCaseImpl.titleCase(text);
    }

}
