import { IsEqual } from '../util/isEqual.interface';

export class IsEqualOwn implements IsEqual {

  isEqual<T>(object: T, otherObject: T): boolean {
    return 'object' === typeof object
      ? Object.keys(object).every(property => this.isEqual(
        (object as unknown as { [key: string]: T })[property],
        (otherObject as unknown as { [key: string]: T })[property]
      ))
      : object === otherObject;
  }

}
