"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("@elijahjcobb/error");
const console_1 = require("@elijahjcobb/console");
/**
 * A class to validate an object with a structure.
 */
class ECTValidator {
    /**
     * Create a new ECTValidator instance.
     * @param {ECTInput} types The structure that is accepted.
     */
    constructor(types) {
        this.types = types;
    }
    /**
     * Inspect the object provided against the structure of the validator.
     * @param {object} object The object to be inspected.
     * @return {ECTOutput} An ECTOutput.
     */
    inspect(object) {
        let typesKeys = Object.keys(this.types);
        let res = {};
        for (let i = 0; i < typesKeys.length; i++) {
            let key = typesKeys[i];
            let expectedValueType = this.types[key];
            let actualValue = object[key];
            let actualValueType = typeof actualValue;
            let isOptional = expectedValueType.optional;
            if (actualValueType === "object" && Array.isArray(actualValue))
                actualValueType = "array";
            if (actualValueType === "array" && actualValue !== undefined && actualValue.length === 0)
                actualValueType = "undefined";
            if (actualValueType === "object" && actualValue !== undefined && (Object.keys(actualValue)).length === 0)
                actualValueType = "undefined";
            if (isOptional && (actualValue === undefined || actualValue === null))
                continue;
            if (expectedValueType.type === "any" && actualValue !== undefined && actualValue !== null)
                continue;
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
                let array = actualValue;
                let allowedTypes = expectedValueType.subtypes;
                for (let j = 0; j < array.length; j++) {
                    let item = array[j];
                    let itemType = typeof item;
                    if (allowedTypes.indexOf(itemType) === -1) {
                        res[key] = {
                            expected: expectedValueType.type + "<" + expectedValueType.subtypes.join(" | ") + ">",
                            data: item,
                            index: j,
                            actual: actualValueType + "<" + itemType + ">",
                            passed: false
                        };
                        break;
                    }
                    else {
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
                        expected: expectedValueType.type,
                        data: "[]",
                        index: 0,
                        actual: "array",
                        passed: false
                    };
                    continue;
                }
                let objectKeys = Object.keys(actualValue);
                let subRes = {};
                let passCount = 0;
                for (let j = 0; j < objectKeys.length; j++) {
                    let subKey = objectKeys[j];
                    let subValue = actualValue[subKey];
                    let subValueType = typeof subValue;
                    let expectedSubValue = expectedValueType.subtypes[subKey];
                    let expectedSubValueType = expectedSubValue.type;
                    if (expectedSubValueType === "*" && subValue !== undefined && subValue !== null)
                        continue;
                    if (expectedSubValue.optional && (subValue === undefined || subValue === null))
                        continue;
                    let passed = expectedSubValueType === subValueType && subValue !== null && subValue !== undefined;
                    subRes[subKey] = {
                        expected: expectedSubValueType,
                        data: subValue,
                        actual: subValueType,
                        passed
                    };
                    if (passed)
                        passCount++;
                }
                res[key] = {
                    passed: passCount >= objectKeys.length,
                    children: subRes
                };
            }
            else {
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
    getFailures(object) {
        let allData = this.inspect(object);
        let allDataKeys = Object.keys(allData);
        let failures = {};
        for (let i = 0; i < allDataKeys.length; i++) {
            let key = allDataKeys[i];
            let value = allData[key];
            if (value["passed"] === false)
                failures[key] = value;
        }
        return failures;
    }
    /**
     * Check if a object fails inspection.
     * @param {object} object An object to inspect.
     * @return {boolean} Whether it fails.
     */
    doesFail(object) {
        return Object.keys(this.getFailures(object)).length > 0;
    }
    /**
     * Pretty print the inspection of an object using @elijahjcobb/console package.
     * @param {object} object The object to print the inspection of.
     */
    print(object) {
        console_1.default(this.inspect(object));
    }
    /**
     * Verify the object and throw an ECErrorStack instance if it is incorrect.
     * @param {object} object An object to inspect.
     */
    verify(object) {
        let fails = this.getFailures(object);
        let errorMessage = [];
        let failingKeys = Object.keys(fails);
        failingKeys.forEach((key) => {
            let failingValue = fails[key];
            if (failingValue["children"]) {
                let value = failingValue;
                let childrenKeys = Object.keys(value.children);
                childrenKeys.forEach((childKey) => {
                    let childValue = value.children[childKey];
                    if (!childValue.passed)
                        errorMessage.push(`Value '${childValue.data}' for key '${childKey}' in object '${key}' is incorrect type (expected: '${childValue.expected}' actual: '${childValue.actual}').`);
                });
            }
            else {
                let value = failingValue;
                errorMessage.push(`Value '${value.data}' for key '${key}' is incorrect type (expected: '${value.expected}' actual: '${value.actual}').`);
            }
        });
        if (errorMessage.length > 0)
            throw error_1.ECErrorStack.newWithMessageAndType(error_1.ECErrorOriginType.FrontEnd, error_1.ECErrorType.ParameterIncorrectFormat, new Error(errorMessage.join(" ")));
    }
}
exports.ECTValidator = ECTValidator;
