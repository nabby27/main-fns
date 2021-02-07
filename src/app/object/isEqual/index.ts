import { IsEqualLodash } from './impl/isEqualLodash';
import { IsEqualFunction } from './util/isEqual.function';

/**
 *
 * @memberof module:Object
 * @function isEqual
 *
 * @description Returns deep copy from object
 *
 * @param {!T} object - The object
 * @returns {T} The cloned object
 *
 * @example
 * const userInfo = {
 *   user: {
 *     name: 'Iván',
 *     alias: 'nabby27'
 *   },
 *   github: 'https://github.com/nabby27'
 * }
 *
 * const userInfo2 = {
 *   user: {
 *     name: 'Example',
 *     alias: 'ex123'
 *   },
 *   github: ''
 * }
 *
 * console.log(isEqual(userInfo, userInfo2)); // false
 */
export function isEqual<T>(object: T, otherObject: T): boolean {
  return new IsEqualFunction(new IsEqualLodash()).execute(object, otherObject);
}
