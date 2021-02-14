import { IsEqual } from './isEqual.interface';

export class IsEqualFunction {

    constructor(private isEqualImpl: IsEqual) { }

    execute<T>(object: T, otherObject: T): boolean {
        return this.isEqualImpl.isEqual(object, otherObject);
    }

}
