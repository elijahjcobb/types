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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ECArrayList_1 = require("./ECArrayList");
const ECPrototype_1 = require("../ECPrototype");
const ECIterator_1 = require("../ECIterator");
/**
 * A generic immutable implementation of an array.
 */
class ECArray extends ECPrototype_1.ECPrototype {
    /**
     * The default constructor will only create an instance. Use the static method helpers to create new instances.
     */
    constructor() {
        super();
        this.array = [];
    }
    /**
     * Get the value at a specific index.
     * @param {number} index The index for the value to be returned.
     * @return {T} The value at the specific index.
     */
    get(index) {
        return this.array[index];
    }
    /**
     * Checks if the instance is empty.
     * @return {boolean} Whether the instance contains values.
     */
    isEmpty() {
        return this.array.length === 0;
    }
    /**
     * Returns the amount of items the instances is holding.
     * @return {number} The number of items.
     */
    size() {
        return this.array.length;
    }
    /**
     * Checks if the instance contains a specific value.
     * @param {T} value The value to look for.
     * @return {boolean} Whether the specified value was found.
     */
    contains(value) {
        return this.indexOf(value) !== -1;
    }
    /**
     * Returns the index of a specific value. Returns -1 if a value can not be found.
     * @param {T} value The value to find the index for.
     * @return {number} The index of the value. Will be -1 if the value does not exist in the instance.
     */
    indexOf(value) {
        return this.array.indexOf(value);
    }
    /**
     * A iteration loop handler.
     * @param {(value: T) => void} iterator The iterator arrow function to be used.
     */
    forEach(iterator) {
        for (let i = 0; i < this.size(); i++)
            iterator(this.get(i));
    }
    /**
     * A iteration loop handler using promises.
     * @param {(value: T) => Promise<void>} iterator An async function that returns a promise.
     * @return {Promise<void>} Returns a promise.
     */
    forEachSync(iterator) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < this.size(); i++)
                yield iterator(this.get(i));
        });
    }
    /**
     * Create a ECIterator instance from this current instance.
     * @return {ECIterator<T>} A new ECIterator.
     */
    toIterator() {
        return ECIterator_1.ECIterator.initWithArray(this);
    }
    /**
     * Convert this instance to a string using the provided separator.
     * @param {string} separator The separator to be used. Defaults to ", ".
     * @return {string} This instance as a string representation.
     */
    toString(separator) {
        return this.array.join(separator || ", ");
    }
    /**
     * Convert this instance to native JavaScript array.
     * @return {T[]} This instance as a JavaScript array representation.
     */
    toNativeArray() {
        return this.array;
    }
    /**
     * Convert this instance to a ECArray.
     * @return {string} This instance as a ECArray representation.
     */
    toArray() {
        return this;
    }
    /**
     * Convert this instance to a ECArrayList.
     * @return {string} This instance as a ECArrayList representation.
     */
    toArrayList() {
        return ECArrayList_1.ECArrayList.initFromArray(this);
    }
    /**
     * Create a new ECArray instance from specific values.
     * @param {T} values The values to add to the new instance.
     * @return {ECArray<T>} A new ECArray instance.
     */
    static initWithValues(...values) {
        let afArray = new ECArray();
        afArray.array = values;
        return afArray;
    }
    /**
     * Create a new ECArray from a native JavaScript array.
     * @param {T[]} nativeArray The array of values to add to this instance.
     * @return {ECArray<T>} A new ECArray instance.
     */
    static initFromNativeArray(nativeArray) {
        let afArray = new ECArray();
        afArray.array = nativeArray;
        return afArray;
    }
    /**
     * Create a new ECArray from a ECArrayList.
     * @param {ECArrayList<T>} arrayList The ECArrayList whose values should be added to this instance.
     * @return {ECArray<T>} A new ECArray instance.
     */
    static initFromArrayList(arrayList) {
        let afArray = new ECArray();
        afArray.array = arrayList.toNativeArray();
        return afArray;
    }
}
exports.ECArray = ECArray;
