import { Clone } from '../util/clone.interface';

export class CloneOwn implements Clone {

  clone<T>(object: T): T {
    const newObject = (Array.isArray(object) ? []: {}) as T;
    for (const key in object) {
      const value = object[key];
      newObject[key] = 'object' === typeof value ? this.clone(value) : value;
    }

    return newObject;
  }

}
