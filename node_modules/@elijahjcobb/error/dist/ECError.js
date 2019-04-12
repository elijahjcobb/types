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
const ECErrorTypes_1 = require("./ECErrorTypes");
/**
 * A class representing an error on the backend.
 */
class ECError {
    /**
     * Create a new instance of ECError.
     * @param {ECErrorOriginType} origin The origing of the error.
     * @param {ECErrorType} type The type of error.
     * @param {Error} error A Error instance to track stack.
     */
    constructor(origin, type, error) {
        this.error = error;
        this.origin = origin;
        this.type = type;
    }
    /**
     * Convert this instance to a native JavaScript object.
     * @return {object} A native JavaScript object.
     */
    toJSON() {
        return {
            message: this.getMessage(),
            type: {
                readable: this.getOriginString(),
                value: this.getOrigin()
            }
        };
    }
    /**
     * Get the stack of the error instance.
     * @return {string} The stack of the error.
     */
    getFullStack() {
        return this.error.stack;
    }
    /**
     * Get the message of the error instance.
     * @return {string} The message of the error.
     */
    getMessage() {
        return this.error.message;
    }
    /**
     * Get the origin of the error instance as a string.
     * @return {string} The origin of the error as a string.
     */
    getOriginString() {
        return ECErrorTypes_1.ECErrorOriginType[this.origin];
    }
    /**
     * Get the origin of the error instance.
     * @return {ECErrorOriginType} The origin of the error.
     */
    getOrigin() {
        return this.origin;
    }
    /**
     * Ge the type of the error instance as a string.
     * @return {string} The type of the error as a string.
     */
    getTypeString() {
        return ECErrorTypes_1.ECErrorType[this.type];
    }
    /**
     * Get the type of the error instance.
     * @return {ECErrorType} The type of the error.
     */
    getType() {
        return this.type;
    }
    /**
     * Get the full stack of an error as a pre-formatted string.
     * @return {string} The formatted error stack.
     */
    getStackString() {
        let stackItems = this.getFullStack().split("\n");
        stackItems.splice(0, 4);
        return stackItems.join("\n");
    }
    /**
     * Print the instance to std.error stream.
     */
    print() {
        console.error(`ERROR: ${this.getMessage()} (origin: ${this.getOriginString()})\n${this.getStackString()}\n`);
    }
}
exports.ECError = ECError;
