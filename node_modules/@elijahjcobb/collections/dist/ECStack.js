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
/**
 * A generic class representing a stack.
 */
class ECStack {
    /**
     * The default constructor will only create an instance. Use the static method helpers to create new instances.
     */
    constructor() {
        this.list = new ECArrayList_1.ECArrayList();
    }
    /**
     * Place an object onto the top of the stack.
     * @param {T} object The object to be placed on the top of the stack.
     */
    push(object) {
        this.list.insert(object, 0);
    }
    /**
     * Take the object of the top of the stack.
     * @return {T} The object that was on the top of the stack.
     */
    pop() {
        let value = this.list.get(0);
        this.list.remove(0);
        return value;
    }
    /**
     * View the object that is currently on the top of the stack.
     * @return {T} The object on the top of the stack.
     */
    peek() {
        return this.list.get(0);
    }
    /**
     * Get the number of items in the stack.
     * @return {number} The number of items in the stack.
     */
    size() {
        return this.list.size();
    }
    /**
     * Create a new ECStack instance from specific values.
     * @param {T} values The values to add to the new instance.
     * @return {ECStack<T>} A new ECStack instance.
     */
    static initWithValues(...values) {
        let stack = new ECStack();
        stack.list = ECArrayList_1.ECArrayList.initFromNativeArray(values);
        return stack;
    }
    /**
     * Create a new ECStack from a native JavaScript array.
     * @param {T[]} nativeArray The array of values to add to this instance.
     * @return {ECStack<T>} A new ECStack instance.
     */
    static initFromNativeArray(nativeArray) {
        let stack = new ECStack();
        stack.list = ECArrayList_1.ECArrayList.initFromNativeArray(nativeArray);
        return stack;
    }
    /**
     * Create a new ECStack from a ECArray.
     * @param {ECArray<T>} array The ECArray whose values should be added to this instance.
     * @return {ECStack<T>} A new ECStack instance.
     */
    static initFromArray(array) {
        let stack = new ECStack();
        stack.list = ECArrayList_1.ECArrayList.initFromArray(array);
        return stack;
    }
    /**
     * Create a new ECStack from a ECArrayList.
     * @param {ECArrayList<T>} arrayList The ECArrayList whose values should be added to this instance.
     * @return {ECStack<T>} A new ECStack instance.
     */
    static initFromArrayList(arrayList) {
        let stack = new ECStack();
        stack.list = arrayList;
        return stack;
    }
}
exports.ECStack = ECStack;
