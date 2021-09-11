import { CloneOwn } from './impl/cloneOwn';
import { CloneFunction } from './util/clone.function';

/**
 *
 * @memberof module:Object
 * @function clone
 *
 * @description Returns deep copy from object
 *
 * @param {!T} object - The object
 * @returns {T} The cloned object
 *
 * @example
 * import { clone } from 'main-fns';
 *
 * const userInfo = {
 *   user: {
 *     name: 'Iván',
 *     alias: 'nabby27'
 *   },
 *   github: 'https://github.com/nabby27'
 * };
 *
 * const userInfoCloned = clone(userInfo);
 *
 * console.log(userInfoCloned === userInfo); // false
 * console.log(userInfoCloned.name); // 'Iván'
 */
export function clone<T>(object: T): T {
    return new CloneFunction(new CloneOwn()).execute(object);
}
