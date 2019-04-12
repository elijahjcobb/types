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
const ECArray_1 = require("./array/ECArray");
const error_1 = require("@elijahjcobb/error");
/**
 * A generic implementation of an iterator similar to a Java iterator.
 */
class ECIterator {
    /**
     * The default constructor will only create an instance. Use the static method helpers to create new instances.
     */
    constructor() {
        this.array = new ECArray_1.ECArray();
        this.index = 0;
    }
    /**
     * Checks if the iterator has a value after the current one.
     * @return {boolean} Whether there is another value after the current one.
     */
    hasNext() {
        return this.index + 1 <= this.array.size();
    }
    /**
     * Get the next value from the iterator.
     * @return {V} The value.
     */
    next() {
        let value = this.array.get(this.index);
        this.index++;
        if (value === undefined)
            throw error_1.ECErrorStack.newWithMessageAndType(error_1.ECErrorOriginType.BackEnd, error_1.ECErrorType.NullOrUndefined, new Error("Iterator value is undefined. Check 'hastNext()' before calling 'next()'."));
        return value;
    }
    /**
     * Create a new ECIterator with values.
     * @param {V} values Values to be iterated through.
     * @return {ECIterator<V>} A new ECIterator instance.
     */
    static initWithValues(...values) {
        let iterator = new ECIterator();
        iterator.array = ECArray_1.ECArray.initFromNativeArray(values);
        return iterator;
    }
    /**
     * Create a new ECIterator with a native JavaScript array's values.
     * @param {V[]} values A native JavaScript array.
     * @return {ECIterator<V>} A new ECIterator instance.
     */
    static initWithNativeArray(values) {
        let iterator = new ECIterator();
        iterator.array = ECArray_1.ECArray.initFromNativeArray(values);
        return iterator;
    }
    /**
     * Create a new ECIterator with an ECArray's values.
     * @param {ECArray<V>} array An ECArray instance.
     * @return {ECIterator<V>} A new ECIterator instance.
     */
    static initWithArray(array) {
        let iterator = new ECIterator();
        iterator.array = array;
        return iterator;
    }
    /**
     * Create a new ECIterator with an ECArrayList's values.
     * @param {ECArrayList<V>} arrayList An ECArrayList instance.
     * @return {ECIterator<V>} A new ECIterator instance.
     */
    static initWithArrayList(arrayList) {
        let iterator = new ECIterator();
        iterator.array = ECArray_1.ECArray.initFromArrayList(arrayList);
        return iterator;
    }
}
exports.ECIterator = ECIterator;
