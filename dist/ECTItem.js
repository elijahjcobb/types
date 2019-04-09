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
/**
 * A class representing a value for a key in a structure.
 */
class ECTItem {
    /**
     * Create an ECTItem instance.
     * @param {string} type The type.
     * @param {ECTItem[]} subtypes The subtypes.
     */
    constructor(type, subtypes) {
        this.type = type;
        if ((type === "object" || type === "array") && subtypes !== undefined && subtypes !== null && subtypes.length === 0)
            subtypes = [ECTItem.string(), ECTItem.number(), ECTItem.boolean()];
        if (subtypes) {
            this.subtypes = [];
            subtypes.forEach((type) => this.subtypes.push(type.type));
        }
    }
    /**
     * An ECTItem for a string.
     * @return {ECTItem} A ECTItem instance.
     */
    static string() { return new ECTItem("string"); }
    /**
     * An ECTItem for a number.
     * @return {ECTItem} A ECTItem instance.
     */
    static number() { return new ECTItem("number"); }
    /**
     * An ECTItem for a boolean.
     * @return {ECTItem} A ECTItem instance.
     */
    static boolean() { return new ECTItem("boolean"); }
    /**
     * An ECTItem for an array.
     * @param {ECTItem} types The types allowed for the array.
     * @return {ECTItem} A ECTItem instance.
     */
    static array(...types) { return new ECTItem("array", types); }
    /**
     * An ECTItem for an object.
     * @param {ECTItem} types The types allowed for the object.
     * @return {ECTItem} A ECTItem instance.
     */
    static object(...types) { return new ECTItem("object", types); }
}
exports.ECTItem = ECTItem;
