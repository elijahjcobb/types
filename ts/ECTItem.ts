/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 *
 * Copyright 2019 Elijah Cobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

import { ECTInput } from "./ECTInput";

/**
 * A class representing a value for a key in a structure.
 */
export class ECTItem {

	public readonly type: string;
	public readonly subtypes: string[] | ECTInput;

	/**
	 * Create an ECTItem instance.
	 * @param {string} type The type.
	 * @param {ECTItem[]} subtypes The subtypes.
	 */
	public constructor(type: string, subtypes?: ECTItem[] | ECTInput) {

		this.type = type;

		if (subtypes !== undefined && subtypes !== null) {

			if (subtypes["length"] === undefined) {

				this.subtypes = subtypes as ECTInput;

				Object.keys(this.subtypes).forEach((key: string) => {

					let type: ECTItem = this.subtypes[key];
					if (type.type === "object" || type.type === "array") throw new Error("Recursive type checking is not supported yet but it is in the works. You can't specify an object's subtype to be an object or array.");

				});

			} else {

				let values: string[] = [];
				(subtypes as ECTItem[]).forEach((type: ECTItem) => {

					if (type.type === "object" || type.type === "array") throw new Error("Recursive type checking is not supported yet but it is in the works. You can't specify an array's subtype to be an object or array.");

					values.push(type.type);
				});

				this.subtypes = values;

			}

		}

	}

	/**
	 * An ECTItem for a string.
	 * @return {ECTItem} A ECTItem instance.
	 */
	public static string(): ECTItem { return new ECTItem("string"); }

	/**
	 * An ECTItem for a number.
	 * @return {ECTItem} A ECTItem instance.
	 */
	public static number(): ECTItem { return new ECTItem("number"); }

	/**
	 * An ECTItem for a boolean.
	 * @return {ECTItem} A ECTItem instance.
	 */
	public static boolean(): ECTItem { return new ECTItem("boolean"); }

	/**
	 * An ECTItem for an array.
	 * @param {ECTItem} types The types allowed for the array.
	 * @return {ECTItem} A ECTItem instance.
	 */
	public static array(...types: ECTItem[]): ECTItem { return new ECTItem("array", types); }

	/**
	 * An ECTItem for an object.
	 * @param {ECTItem} types The types allowed for the object.
	 * @return {ECTItem} A ECTItem instance.
	 */
	public static object(types: ECTInput): ECTItem { return new ECTItem("object", types); }

}