import {MaxItems as M} from "@tsed/schema";

/**
 * The value `maxItems` MUST be a non-negative integer.
 *
 * An array instance is valid against `maxItems` if its size is less than, or equal to, the value of this keyword.
 *
 * :: warning
 * The value `maxItems` MUST be a non-negative integer.
 * :::
 *
 * :: warning
 * This decorator will be removed in v7.
 * For v6 user, use @@MaxItems@@ from @tsed/schema instead of @tsed/common.
 * :::
 *
 * ## Example
 *
 * ```typescript
 * class Model {
 *    @CollectionOf(String)
 *    @MaxItems(10)
 *    property: string[];
 * }
 * ```
 *
 * Will produce:
 *
 * ```json
 * {
 *   "type": "object",
 *   "properties": {
 *     "property": {
 *       "type": "number",
 *       "maxItems": 10
 *     }
 *   }
 * }
 * ```
 *
 * @param {number} maxItems
 * @decorator
 * @validation
 * @swagger
 * @schema
 * @collections
 * @ignore
 * @deprecated Since v6. Use @MaxItems decorator from @tsed/schema instead of.
 */
export function MaxItems(maxItems: number) {
  return M(maxItems);
}
