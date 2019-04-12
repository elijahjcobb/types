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
 * Defines different errors that are possible.
 */
var ECErrorType;
(function (ECErrorType) {
    ECErrorType[ECErrorType["FailedToEncryptValue"] = 0] = "FailedToEncryptValue";
    ECErrorType[ECErrorType["FailedToDecryptValue"] = 1] = "FailedToDecryptValue";
    ECErrorType[ECErrorType["FailedToHashValue"] = 2] = "FailedToHashValue";
    ECErrorType[ECErrorType["FailedToStringifyJSON"] = 3] = "FailedToStringifyJSON";
    ECErrorType[ECErrorType["FailedToParseJSON"] = 4] = "FailedToParseJSON";
    ECErrorType[ECErrorType["ParameterNotFound"] = 5] = "ParameterNotFound";
    ECErrorType[ECErrorType["ParameterIncorrectFormat"] = 6] = "ParameterIncorrectFormat";
    ECErrorType[ECErrorType["ParameterDoesNotMatchRegex"] = 7] = "ParameterDoesNotMatchRegex";
    ECErrorType[ECErrorType["PasswordRequired"] = 8] = "PasswordRequired";
    ECErrorType[ECErrorType["PasswordIncorrect"] = 9] = "PasswordIncorrect";
    ECErrorType[ECErrorType["InternalUnHandled"] = 10] = "InternalUnHandled";
    ECErrorType[ECErrorType["ValueAlreadyExists"] = 11] = "ValueAlreadyExists";
    ECErrorType[ECErrorType["ObjectDoesNotExist"] = 12] = "ObjectDoesNotExist";
    ECErrorType[ECErrorType["InternalSQLError"] = 13] = "InternalSQLError";
    ECErrorType[ECErrorType["ObjectWasNotUpdated"] = 14] = "ObjectWasNotUpdated";
    ECErrorType[ECErrorType["UsernameIncorrect"] = 15] = "UsernameIncorrect";
    ECErrorType[ECErrorType["FailedToSendEmail"] = 16] = "FailedToSendEmail";
    ECErrorType[ECErrorType["PermissionDenied"] = 17] = "PermissionDenied";
    ECErrorType[ECErrorType["TokenIsExpired"] = 18] = "TokenIsExpired";
    ECErrorType[ECErrorType["FileToLarge"] = 19] = "FileToLarge";
    ECErrorType[ECErrorType["FileIncorrectType"] = 20] = "FileIncorrectType";
    ECErrorType[ECErrorType["FileDoesNotExist"] = 21] = "FileDoesNotExist";
    ECErrorType[ECErrorType["NullOrUndefined"] = 22] = "NullOrUndefined";
    ECErrorType[ECErrorType["NoAssociation"] = 23] = "NoAssociation";
    ECErrorType[ECErrorType["AnswerNotValid"] = 24] = "AnswerNotValid";
    ECErrorType[ECErrorType["InvalidRequest"] = 25] = "InvalidRequest";
    ECErrorType[ECErrorType["EndpointDoesNotExist"] = 26] = "EndpointDoesNotExist";
    ECErrorType[ECErrorType["LockedObjectManipulated"] = 27] = "LockedObjectManipulated";
})(ECErrorType = exports.ECErrorType || (exports.ECErrorType = {}));
/**
 * Defined different locations errors can occur.
 */
var ECErrorOriginType;
(function (ECErrorOriginType) {
    ECErrorOriginType[ECErrorOriginType["SQLServer"] = 0] = "SQLServer";
    ECErrorOriginType[ECErrorOriginType["BackEnd"] = 1] = "BackEnd";
    ECErrorOriginType[ECErrorOriginType["FrontEnd"] = 2] = "FrontEnd";
    ECErrorOriginType[ECErrorOriginType["User"] = 3] = "User";
    ECErrorOriginType[ECErrorOriginType["Unhandled"] = 4] = "Unhandled";
})(ECErrorOriginType = exports.ECErrorOriginType || (exports.ECErrorOriginType = {}));
