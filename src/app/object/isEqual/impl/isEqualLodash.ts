import { IsEqual } from '../util/isEqual.interface';
import lodash from 'lodash';

export class IsEqualLodash implements IsEqual {

  isEqual<T>(object: T, otherObject: T): boolean {
    return lodash.isEqual(object, otherObject);
  }

}
