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
import { ECPrototype } from "./ECPrototype";
import { ECDictionary } from "./map/ECDictionary";
import { ECArray } from "./array/ECArray";
/**
 * Allowed types for ECCSV.
 */
export declare type AFCSVTypes = string | number | boolean;
/**
 * A helper class to convert an ECArray instance into a CSV file.
 */
export declare class ECCSV extends ECPrototype {
    private readonly array;
    /**
     * The constructor to make new instances of a ECCSV.
     * @param {ECArray<ECDictionary<string, AFCSVTypes>>} array An ECArray instance that contains ECDictionary instances.
     */
    constructor(array: ECArray<ECDictionary<string, AFCSVTypes>>);
    /**
     * Compile a string that is a CSV representation of the internal data.
     * @return {string} A CSV string representation of internal data.
     */
    compile(): string;
}
