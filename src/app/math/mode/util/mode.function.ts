import { Mode } from './mode.interface';

export class ModeFunction {

    constructor(private modeImpl: Mode) { }

    mode(numbers: number[]): number[] {
        return this.modeImpl.mode(numbers);
    }

}
