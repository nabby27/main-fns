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
 * import { isEqual } from 'main-fns';
 *
 * const userInfo = {
 *   user: {
 *     name: 'Iván',
 *     alias: 'nabby27'
 *   },
 *   github: 'https://github.com/nabby27'
 * };
 *
 * const userInfo2 = {
 *   user: {
 *     name: 'Example',
 *     alias: 'ex123'
 *   },
 *   github: ''
 * };
 *
 * console.log(isEqual(userInfo, userInfo2)); // false
 */
export function isEqual<T>(object: T, otherObject: T): boolean {
    return 'object' === typeof object
        ? Object.keys(object).every(property => isEqual(
            (object as unknown as { [key: string]: T })[property],
            (otherObject as unknown as { [key: string]: T })[property]
        ))
        : object === otherObject;
}
