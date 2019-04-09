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

import { ECTReport } from "./ECTReport";
import { ECTItem } from "./ECTItem";
import { ECTOutput } from "./ECTOutput";
import { ECTInput } from "./ECTInput";

/**
 * A class to validate an object with a structure.
 */
export class ECTValidator {

	private readonly types: ECTInput;

	/**
	 * Create a new ECTValidator instance.
	 * @param {ECTInput} types The structure that is accepted.
	 */
	public constructor(types: ECTInput) {

		this.types = types;

	}

	/**
	 * Inspect the object provided against the structure of the validator.
	 * @param {object} object The object to be inspected.
	 * @return {ECTOutput} An ECTOutput.
	 */
	public inspect(object: object): ECTOutput {

		let typesKeys: string[] = Object.keys(this.types);

		let res: ECTOutput = {};

		for (let i: number = 0; i < typesKeys.length; i ++) {

			let key: string = typesKeys[i];
			let expectedValueType: ECTItem = this.types[key];
			let actualValue: any = object[key];
			let actualValueType: string = typeof actualValue;
			if (actualValueType === "object" && Array.isArray(actualValue)) actualValueType = "array";

			if (actualValueType === "array") {

				if (expectedValueType.type === "object") {

					res[key] = {
						expected: expectedValueType.type + "<" + expectedValueType.subtypes.join(" | ") + ">",
						data: "{}",
						index: 0,
						actual: "object",
						passed: false
					};

					continue;

				}

				let array: any[] = actualValue as any[];
				let allowedTypes: string[] = expectedValueType.subtypes;

				for (let j: number = 0; j < array.length; j++) {

					let item: any = array[j];
					let itemType: string = typeof item;

					if (allowedTypes.indexOf(itemType) === -1) {

						res[key] = {
							expected: expectedValueType.type + "<" + expectedValueType.subtypes.join(" | ") + ">",
							data: item,
							index: j,
							actual: actualValueType + "<" + itemType + ">",
							passed: false
						};

						break;

					} else {

						res[key] = {
							expected: expectedValueType.type + "<" + expectedValueType.subtypes.join(" | ") + ">",
							data: itemType,
							actual: actualValueType + "<" + itemType + ">",
							passed: true
						};

					}

				}

			}

			else if (actualValueType === "object") {

				if (expectedValueType.type === "array") {

					res[key] = {
						expected: expectedValueType.type + "<" + expectedValueType.subtypes.join(" | ") + ">",
						data: "[]",
						index: 0,
						actual: "array",
						passed: false
					};

					continue;

				}


				let object: object = actualValue as object;
				let allowedTypes: string[] = expectedValueType.subtypes;
				let objectKeys: string[] = Object.keys(object);

				for (let j: number = 0; j < objectKeys.length; j++) {

					let itemKey: string = objectKeys[j];
					let item: any = object[itemKey];
					let itemType: string = typeof item;

					if (allowedTypes.indexOf(itemType) === -1) {

						res[key] = {
							expected: expectedValueType.type + "<" + expectedValueType.subtypes.join(" | ") + ">",
							data: item,
							key: itemKey,
							actual: actualValueType + "<" + itemType + ">",
							passed: false
						};

						break;

					} else {

						res[key] = {
							expected: expectedValueType.type + "<" + expectedValueType.subtypes.join(" | ") + ">",
							data: itemType,
							actual: actualValueType + "<" + itemType + ">",
							passed: true
						};

					}

				}

			} else {

				res[key] = {
					expected: expectedValueType.type,
					data: actualValue,
					actual: actualValueType,
					passed: expectedValueType.type === actualValueType && actualValue !== null && actualValueType !== undefined
				};

			}

		}

		return res;

	}

	/**
	 * Get only the properties that failed inspection.
	 * @param {object} object The object to inspect.
	 * @return {ECTOutput} An ECTOutput.
	 */
	public getFailures(object: object): ECTOutput {

		let allData: object = this.inspect(object);
		let allDataKeys: string[] = Object.keys(allData);
		let failures: ECTOutput = {};

		for (let i: number = 0; i < allDataKeys.length; i++) {

			let key: string = allDataKeys[i];
			let value: ECTReport = allData[key];
			if (value["passed"] === false) failures[key] = value;

		}

		return failures;

	}

	/**
	 * Check if a object fails inspection.
	 * @param {object} object An object to inspect.
	 * @return {boolean} Whether it fails.
	 */
	public doesFail(object: object): boolean {

		return Object.keys(this.getFailures(object)).length > 0;

	}

}