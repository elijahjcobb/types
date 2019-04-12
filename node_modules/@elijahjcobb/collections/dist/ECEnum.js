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
const ECArrayList_1 = require("./array/ECArrayList");
const ECArray_1 = require("./array/ECArray");
class ECEnum {
    /**
     * Convert an enum to a string array.
     * @param value The num.
     * @return {ECArrayList<string>}
     */
    static convertEnumToArray(value) {
        const StringIsNumber = (value2) => isNaN(Number(value2)) === false;
        let values = Object.keys(value).filter(StringIsNumber).map((key) => value[key]);
        return ECArray_1.ECArray.initFromNativeArray(values);
    }
    /**
     * Convert an enum to a string array.
     * @param value The num.
     * @return {ECArrayList<string>}
     */
    static convertEnumToArrayList(value) {
        const StringIsNumber = (value2) => isNaN(Number(value2)) === false;
        let values = Object.keys(value).filter(StringIsNumber).map((key) => value[key]);
        return ECArrayList_1.ECArrayList.initFromNativeArray(values);
    }
}
exports.ECEnum = ECEnum;
