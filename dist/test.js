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
const index_1 = require("./index");
try {
    let validator = new index_1.ECTValidator({
        arr: index_1.ECTItem.array([index_1.ECTItem.string()]),
        str: index_1.ECTItem.string(),
        boo: index_1.ECTItem.boolean(),
        num: index_1.ECTItem.number(),
        obj: index_1.ECTItem.object({
            str: index_1.ECTItem.string(),
            num: index_1.ECTItem.number()
        }),
        allObj: index_1.ECTItem.object({
            "*": index_1.ECTItem.string()
        })
    });
    validator.verify({
        arr: [
            "Hello",
            12
        ],
        str: 2309,
        boo: "fq23",
        num: false,
        obj: {
            str: 12,
            num: "f2elj"
        },
        allObj: {
            foo: 89,
            bar: 87123
        }
    });
}
catch (e) {
    e.print();
}
