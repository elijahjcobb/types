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
import { ECArrayList } from "./array/ECArrayList";
import { ECArray } from "./array/ECArray";
/**
 * A generic class representing a stack.
 */
export declare class ECStack<T> {
    private list;
    /**
     * The default constructor will only create an instance. Use the static method helpers to create new instances.
     */
    constructor();
    /**
     * Place an object onto the top of the stack.
     * @param {T} object The object to be placed on the top of the stack.
     */
    push(object: T): void;
    /**
     * Take the object of the top of the stack.
     * @return {T} The object that was on the top of the stack.
     */
    pop(): T;
    /**
     * View the object that is currently on the top of the stack.
     * @return {T} The object on the top of the stack.
     */
    peek(): T;
    /**
     * Get the number of items in the stack.
     * @return {number} The number of items in the stack.
     */
    size(): number;
    /**
     * Create a new ECStack instance from specific values.
     * @param {T} values The values to add to the new instance.
     * @return {ECStack<T>} A new ECStack instance.
     */
    static initWithValues<T>(...values: T[]): ECStack<T>;
    /**
     * Create a new ECStack from a native JavaScript array.
     * @param {T[]} nativeArray The array of values to add to this instance.
     * @return {ECStack<T>} A new ECStack instance.
     */
    static initFromNativeArray<T>(nativeArray: T[]): ECStack<T>;
    /**
     * Create a new ECStack from a ECArray.
     * @param {ECArray<T>} array The ECArray whose values should be added to this instance.
     * @return {ECStack<T>} A new ECStack instance.
     */
    static initFromArray<T>(array: ECArray<T>): ECStack<T>;
    /**
     * Create a new ECStack from a ECArrayList.
     * @param {ECArrayList<T>} arrayList The ECArrayList whose values should be added to this instance.
     * @return {ECStack<T>} A new ECStack instance.
     */
    static initFromArrayList<T>(arrayList: ECArrayList<T>): ECStack<T>;
}
