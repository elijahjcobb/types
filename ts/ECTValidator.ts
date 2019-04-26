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
import { ECErrorStack, ECErrorOriginType, ECErrorType } from "@elijahjcobb/error";
import ECConsole from "@elijahjcobb/console";

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
			let isOptional: boolean = expectedValueType.optional;


			if (actualValueType === "object" && Array.isArray(actualValue)) actualValueType = "array";
			if (actualValueType === "array" && actualValue === undefined) actualValueType = "undefined";
			if (actualValueType === "object" && actualValue === undefined) actualValueType = "undefined";
			if (isOptional && (actualValue === undefined || actualValue === null)) continue;
			if (expectedValueType.type === "any" && actualValue !== undefined && actualValue !== null) continue;

			if (actualValueType === "array") {

				if (expectedValueType.type === "object") {

					res[key] = {
						expected: expectedValueType.type,
						data: "{}",
						index: 0,
						actual: "object",
						passed: false
					};

					continue;

				}

				let array: any[] = actualValue as any[];

				let allowedTypes: string[] = expectedValueType.subtypes as string[];

				for (let j: number = 0; j < array.length; j++) {

					let item: any = array[j];
					let itemType: string = typeof item;

					if (allowedTypes.indexOf(itemType) === -1 && allowedTypes.indexOf("any") === -1) {

						res[key] = {
							expected: expectedValueType.type + "<" + (expectedValueType.subtypes as string[]).join(" | ") + ">",
							data: item,
							index: j,
							actual: actualValueType + "<" + itemType + ">",
							passed: false
						};

						break;

					} else {

						res[key] = {
							expected: expectedValueType.type + "<" + (expectedValueType.subtypes as string[]).join(" | ") + ">",
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
						expected: expectedValueType.type,
						data: "[]",
						index: 0,
						actual: "array",
						passed: false
					};

					continue;

				}

				let subRes: ECTOutput = {};
				let passCount: number = 0;

				let expectedSubValues: ECTInput = (expectedValueType.subtypes as ECTInput);
				let expectedSubValueKeys: string[] = Object.keys(expectedSubValues);

				if (expectedSubValueKeys[0] === "*") {

					let expectedSubValue: ECTItem = expectedSubValues["*"];

					let realSubValueKeys: string[] = Object.keys(actualValue);

					for (let k: number = 0; k < realSubValueKeys.length; k++) {

						let realSubValueKey: string = realSubValueKeys[k];
						let realSubValue: any = actualValue[realSubValueKey];
						let realSubValueType: string = typeof realSubValue;

						if (realSubValueType !== expectedSubValue.type) {

							subRes[realSubValueKey] = {
								expected: expectedSubValue.type,
								data: realSubValue,
								actual: realSubValueType,
								passed: false
							};

							break;

						}

					}

				} else {

					for (let j: number = 0; j < expectedSubValueKeys.length; j++) {

						let expectedSubValueKey: string = expectedSubValueKeys[j];
						let expectedSubValue: ECTItem = expectedSubValues[expectedSubValueKey];

						let realSubValue: any = actualValue[expectedSubValueKey];
						let realSubValueType: string = typeof realSubValue;

						if (expectedSubValue.optional && (realSubValue === undefined || realSubValue === null)) continue;
						let expectedSubValueType: string = expectedSubValue.type;


						let passed: boolean = expectedSubValueType === realSubValueType && realSubValue !== null && realSubValue !== undefined;

						subRes[expectedSubValueKey] = {
							expected: expectedSubValueType,
							data: realSubValue,
							actual: realSubValueType,
							passed
						};

						if (passed) passCount ++;


					}

				}

				res[key] = {
					passed: passCount >= expectedSubValueKeys.length,
					children: subRes
				};

				// for (let j: number = 0; j < objectKeys.length; j++) {
				//
				// 	let subKey: string = objectKeys[j];
				// 	let subValue: any = actualValue[subKey];
				// 	let subValueType: string = typeof subValue;
				// 	let expectedSubValue: ECTItem = (expectedValueType.subtypes as ECTInput)[subKey];
				// 	if (!expectedSubValue) expectedSubValue = (expectedValueType.subtypes as ECTInput)["*"];
				// 	if (expectedSubValue.optional && (subValue === undefined || subValue === null)) continue;
				// 	let expectedSubValueType: string = expectedSubValue.type;
				// 	if (expectedSubValueType === "*" && subValue !== undefined && subValue !== null) continue;
				//
				//
				// 	let passed: boolean = expectedSubValueType === subValueType && subValue !== null && subValue !== undefined;
				//
				// 	subRes[subKey] = {
				// 		expected: expectedSubValueType,
				// 		data: subValue,
				// 		actual: subValueType,
				// 		passed
				// 	};
				//
				// 	if (passed) passCount ++;
				//
				// }
				//
				// res[key] = {
				// 	passed: passCount >= objectKeys.length,
				// 	children: subRes
				// };

			} else {

				res[key] = {
					expected: expectedValueType.type,
					data: actualValue,
					actual: actualValueType,
					passed: expectedValueType.type === actualValueType && actualValue !== null && actualValue !== undefined
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

	/**
	 * Pretty print the inspection of an object using @elijahjcobb/console package.
	 * @param {object} object The object to print the inspection of.
	 */
	public print(object: object): void {

		ECConsole(this.inspect(object));

	}

	/**
	 * Verify the object and throw an ECErrorStack instance if it is incorrect.
	 * @param {object} object An object to inspect.
	 */
	public verify(object: object): void {

		let fails: ECTOutput = this.getFailures(object);
		let errorMessage: string[] = [];

		let failingKeys: string[] = Object.keys(fails);
		failingKeys.forEach((key: string) => {

			let failingValue: ECTReport | {
				passed: boolean;
				children: ECTOutput;
			} = fails[key];

			if (failingValue["children"]) {

				let value: {
					passed: boolean;
					children: ECTOutput;
				} = failingValue as {
					passed: boolean;
					children: ECTOutput;
				};

				let childrenKeys: string[] = Object.keys(value.children);
				childrenKeys.forEach((childKey: string) => {

					let childValue: ECTReport = value.children[childKey] as ECTReport;
					if (!childValue.passed) errorMessage.push(`Value '${childValue.data}' for key '${childKey}' in object '${key}' is incorrect type (expected: '${childValue.expected}' actual: '${childValue.actual}').`);

				});

			} else {

				let value: ECTReport = failingValue as ECTReport;

				errorMessage.push(`Value '${value.data}' for key '${key}' is incorrect type (expected: '${value.expected}' actual: '${value.actual}').`);
			}

		});

		if (errorMessage.length > 0) throw ECErrorStack.newWithMessageAndType(ECErrorOriginType.FrontEnd, ECErrorType.ParameterIncorrectFormat, new Error(errorMessage.join(" ")));

	}

}