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
/**
 * Defines different errors that are possible.
 */
export declare enum ECErrorType {
    FailedToEncryptValue = 0,
    FailedToDecryptValue = 1,
    FailedToHashValue = 2,
    FailedToStringifyJSON = 3,
    FailedToParseJSON = 4,
    ParameterNotFound = 5,
    ParameterIncorrectFormat = 6,
    ParameterDoesNotMatchRegex = 7,
    PasswordRequired = 8,
    PasswordIncorrect = 9,
    InternalUnHandled = 10,
    ValueAlreadyExists = 11,
    ObjectDoesNotExist = 12,
    InternalSQLError = 13,
    ObjectWasNotUpdated = 14,
    UsernameIncorrect = 15,
    FailedToSendEmail = 16,
    PermissionDenied = 17,
    TokenIsExpired = 18,
    FileToLarge = 19,
    FileIncorrectType = 20,
    FileDoesNotExist = 21,
    NullOrUndefined = 22,
    NoAssociation = 23,
    AnswerNotValid = 24,
    InvalidRequest = 25,
    EndpointDoesNotExist = 26,
    LockedObjectManipulated = 27
}
/**
 * Defined different locations errors can occur.
 */
export declare enum ECErrorOriginType {
    SQLServer = 0,
    BackEnd = 1,
    FrontEnd = 2,
    User = 3,
    Unhandled = 4
}
