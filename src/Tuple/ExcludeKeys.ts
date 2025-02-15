import {ExcludeKeys as OExcludeKeys} from '../Object/ExcludeKeys'
import {Exclude} from '../Union/Exclude'
import {Match} from '../Any/_Internal'
import {ObjectOf} from './ObjectOf'

/** Exclude the keys of **`T1`** out of the keys of **`T`**
 * (If `match = 'default'`, no type checks are done)
 * @param T to remove the keys from
 * @param T1 to remove the keys out
 * @param match to change precision (?=`'default'`)
 * @returns **`keyof`**
 * @example
 * ```ts
 * ```
 */
export type ExcludeKeys<T extends any[], T1 extends any[], match extends Match = 'default'> =
    OExcludeKeys<ObjectOf<T>, ObjectOf<T1>, match>
