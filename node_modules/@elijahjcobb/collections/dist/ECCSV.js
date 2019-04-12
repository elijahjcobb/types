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
const ECPrototype_1 = require("./ECPrototype");
const ECArrayList_1 = require("./array/ECArrayList");
/**
 * A helper class to convert an ECArray instance into a CSV file.
 */
class ECCSV extends ECPrototype_1.ECPrototype {
    /**
     * The constructor to make new instances of a ECCSV.
     * @param {ECArray<ECDictionary<string, AFCSVTypes>>} array An ECArray instance that contains ECDictionary instances.
     */
    constructor(array) {
        super();
        this.array = array;
    }
    /**
     * Compile a string that is a CSV representation of the internal data.
     * @return {string} A CSV string representation of internal data.
     */
    compile() {
        let object = this.array.get(0);
        if (!object)
            throw "";
        let keys = object.keys();
        let csv = keys.toString(",");
        this.array.forEach((object) => {
            let values = new ECArrayList_1.ECArrayList();
            keys.forEach((key) => {
                let value = object.get(key);
                if (!value) {
                    value = "";
                }
                values.add("\"" + value + "\"");
            });
            csv += "\n" + values.toString(",");
        });
        return csv;
    }
}
exports.ECCSV = ECCSV;
