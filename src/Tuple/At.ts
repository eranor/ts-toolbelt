import {At as OAt} from '../Object/At'
import {Index} from '../_Internal'

/** Get in **`T`** the type of an entry of key **`K`**
 * @param T to extract from
 * @param K to extract at
 * @returns **`any`**
 * @example
 */
export type At<T extends any[], K extends Index> =
    OAt<T, K>
