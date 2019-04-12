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
import { ECError } from "./ECError";
import { ECErrorType, ECErrorOriginType } from "./ECErrorTypes";
import { ECArrayList } from "@elijahjcobb/collections";
/**
 * A class representing a collection of ECError instances.
 */
export declare class ECErrorStack {
    private trace;
    /**
     * Tack on a generic error message to this stack instance.
     * @return {ECErrorStack} The instance.
     */
    withGenericError(): ECErrorStack;
    /**
     * Get the trace of the error stack instance.
     * @return {ECArrayList<ECError>} An array list of instances of ECError.
     */
    getTrace(): ECArrayList<ECError>;
    /**
     * Add an ECError instance to the stack.
     * @param {ECError} err The error to be added to the stack.
     */
    addError(err: ECError): void;
    /**
     * Create an error from a message and type and add to the error stack.
     * @param {Error} error An error instance.
     * @param {ECErrorOriginType} origin The origin of the error.
     * @param {AFErrorTypes} type The type of the error.
     */
    add(origin: ECErrorOriginType, type: ECErrorType, error: Error): void;
    /**
     * Add a generic error to the error stack.
     */
    addGenericError(): void;
    /**
     * Print the error stack to the console using the console.error() channel.
     */
    print(): void;
    /**
     * Get the ECError instance at the top of the trace for the client.
     * @return {ECError} The client facing error.
     */
    getErrorForClient(): ECError;
    /**
     * Create a new ECErrorStack instance.
     * @return {ECErrorStack} A new instance of ECErrorStack.
     */
    static new(): ECErrorStack;
    /**
     * Create a new ECErrorStack instance that is already populated with an ECError.
     * @param {ECErrorOriginType} origin The origin of the error.
     * @param {ECErrorType} type The type of error.
     * @param {Error} error An error instance.
     * @return {ECErrorStack} A new ECErrorStack instance.
     */
    static newWithMessageAndType(origin: ECErrorOriginType, type: ECErrorType, error: Error): ECErrorStack;
}
