import { IsEqualOwn } from './impl/isEqualOwn';
import { IsEqualFunction } from './util/isEqual.function';

/**
 *
 * @memberof module:Object
 * @function isEqual
 *
 * @description Returns if objects are deep equal
 *
 * @param {!T} object - The object
 * @param {!T} otherObject - The object to compare
 * @returns {boolean} The cloned object
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
    return new IsEqualFunction(new IsEqualOwn()).execute(object, otherObject);
}
