/** Alias to create a **`Function`**
 * @param P parameters
 * @param R return type
 * @returns **`Function`**
 * @example
 * ```ts
 * import {F} from 'ts-toolbelt'
 *
 * type test0 = F.Function<[string, number], boolean>
 * /// (args_0: string, args_1: number) => boolean
 * ```
 */
export type Function<P extends any[] = any, R extends any = any> =
    (...args: P) => R
