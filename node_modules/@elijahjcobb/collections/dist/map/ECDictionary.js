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
const ECPrototype_1 = require("../ECPrototype");
const ECArray_1 = require("../array/ECArray");
const ECMap_1 = require("./ECMap");
const ECIterator_1 = require("../ECIterator");
const error_1 = require("@elijahjcobb/error");
/**
 * A immutable generic implementation of a native javascript object.
 */
class ECDictionary extends ECPrototype_1.ECPrototype {
    /**
     * The default constructor will only create an instance. Use the static method helpers to create new instances.
     */
    constructor() {
        super();
        this.map = new Map();
    }
    /**
     * Get a value for a specific key from the instance.
     * @param {K} key The key to be used.
     * @return {V} The value for the specified key.
     */
    get(key) {
        return this.map.get(key);
    }
    /**
     * Get the key for a specified value.
     * @param {V} value The value.
     * @return {K} The key for the specified value.
     */
    getKey(value) {
        return this.keys().get(this.values().indexOf(value));
    }
    /**
     * Returns the number of key value pairs on the instance.
     * @return {number}
     */
    size() {
        return this.keys().size();
    }
    /**
     * Checks if the instance contains a specific key.
     * @param {K} key The key to be searched for.
     * @return {boolean} Whether the key was found on the instance.
     */
    containsKey(key) {
        return this.keys().contains(key);
    }
    /**
     * Get all the keys of the instance.
     * @return {ECArray<K>} A new ECArray instance containing all the keys on the instance.
     */
    keys() {
        return ECArray_1.ECArray.initFromNativeArray(Array.from(this.map.keys()));
    }
    /**
     * Get an ECIterator instance with the keys from the instance.
     * @return {ECIterator<K>}
     */
    keyIterator() {
        return ECIterator_1.ECIterator.initWithArray(this.keys());
    }
    /**
     * Checks if the instance contains a specific value.
     * @param {V} value The value to be searched for.
     * @return {boolean} Whether the value was found on the instance.
     */
    containsValue(value) {
        return this.values().contains(value);
    }
    /**
     * Get all the values of the instance.
     * @return {ECArray<V>} A new ECArray instance containing all the values on the instance.
     */
    values() {
        return ECArray_1.ECArray.initFromNativeArray(Array.from(this.map.values()));
    }
    /**
     * Get an ECIterator instance with the values from the instance.
     * @return {ECIterator<V>} A new ECIterator instance.
     */
    valueIterator() {
        return ECIterator_1.ECIterator.initWithArray(this.values());
    }
    /**
     * Checks if the instance contains a specific key and value pair.
     * @param {K} key The key to be searched for.
     * @param {V} value The value to be searched for.
     * @return {boolean} Whether the key value pair was found on the instance.
     */
    containsKeyValuePair(key, value) {
        return this.containsKey(key) && this.get(key) === value;
    }
    /**
     * An iterator helper to iterator through every key value pair.
     * @param {(key: K, value: V) => void} iterator An arrow function.
     */
    forEach(iterator) {
        this.keys().forEach((key) => iterator(key, this.get(key)));
    }
    /**
     * An iterator helper to iterator through every key value pair that supports each iteration being an async function.
     * @param {(key: K, value: V) => Promise<void>} iterator An async arrow function.
     * @return {Promise<void>} A promise.
     */
    forEachSync(iterator) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.keys().forEachSync((key) => __awaiter(this, void 0, void 0, function* () { return yield iterator(key, this.get(key)); }));
        });
    }
    /**
     * Convert this instance to a native JavaScript object. Calls toNativeObject() method on instance.
     * @return {object} A native JavaScript object (JSON).
     */
    toJSON() {
        return this.toNativeObject();
    }
    /**
     * Convert this instance to a native JavaScript object. Same as toJSON() function.
     * @return {object} A native JavaScript object (JSON).
     */
    toNativeObject() {
        let json = {};
        this.forEach((key, value) => {
            if (typeof key !== "string")
                throw error_1.ECErrorStack.newWithMessageAndType(error_1.ECErrorOriginType.BackEnd, error_1.ECErrorType.ParameterIncorrectFormat, new Error(`Key '${key}' is not a string. Native JavaScript objects must have a string for their keys.`));
            json[key] = value;
        });
        return json;
    }
    /**
     * Convert this instance to a JSON string.
     * @return {string} A string with JSON encoding.
     */
    toString() {
        return JSON.stringify(this.toNativeObject());
    }
    /**
     * Convert this instance to a ECMap instance.
     * @return {ECMap<K, V>} A new ECMap instance with the same internal data as the instance.
     */
    toMap() {
        return ECMap_1.ECMap.initWithNativeMap(this.map);
    }
    /**
     * Convert this instance to a native Map instance.
     * @return {Map<K, V>} A new Map instance with the same internal data as the instance.
     */
    toNativeMap() {
        return this.map;
    }
    /**
     * Convert this instance to a ECDictionary instance.
     * @return {ECDictionary<K, V>} A new ECDictionary instance with the same internal data as the instance.
     */
    toDictionary() {
        return this;
    }
    /**
     * Create a new instance with keys and values.
     * @param {K[]} keys A native JavaScript array of keys.
     * @param {V[]} values A native JavaScript array of values.
     * @return {ECDictionary<K, V>} A new ECDictionary instance.
     */
    static initWithKeysAndValues(keys, values) {
        if (keys.length !== values.length)
            throw error_1.ECErrorStack.newWithMessageAndType(error_1.ECErrorOriginType.BackEnd, error_1.ECErrorType.ParameterIncorrectFormat, new Error(`The number of keys does not equal the number of values (${keys.length} !== ${values.length}).`));
        let afDictionary = new ECDictionary();
        let map = new Map();
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let value = values[i];
            map.set(key, value);
        }
        afDictionary.map = map;
        return afDictionary;
    }
    /**
     * Create a new instance with keys and values.
     * @param {K[]} keys An ECArray instance containing keys.
     * @param {V[]} values An ECArray instance containing values.
     * @return {ECDictionary<K, V>} A new ECDictionary instance.
     */
    static initWithKeyArrayAndValueArray(keys, values) {
        if (keys.size() !== values.size())
            throw error_1.ECErrorStack.newWithMessageAndType(error_1.ECErrorOriginType.BackEnd, error_1.ECErrorType.ParameterIncorrectFormat, new Error(`The number of keys does not equal the number of values (${keys.size()} !== ${values.size()}).`));
        let afDictionary = new ECDictionary();
        let map = new Map();
        for (let i = 0; i < keys.size(); i++) {
            let key = keys.get(i);
            let value = values.get(i);
            map.set(key, value);
        }
        afDictionary.map = map;
        return afDictionary;
    }
    /**
     * Create a new instance with a native JavaScript object.
     * @param {object} nativeObject A native JavaScript object.
     * @return {ECDictionary<string, V>} A new ECDictionary instance.
     */
    static initWithNativeObject(nativeObject) {
        let afDictionary = new ECDictionary();
        let map = new Map();
        let keys = Object.keys(nativeObject);
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let value = nativeObject[key];
            map.set(key, value);
        }
        afDictionary.map = map;
        return afDictionary;
    }
    /**
     * Create a new instance with a native Map instance.
     * @param {Map<K, V>} map A native Map instance.
     * @return {ECDictionary<K, V>} A new ECDictionary instance.
     */
    static initWithNativeMap(map) {
        let afDictionary = new ECDictionary();
        afDictionary.map = map;
        return afDictionary;
    }
    /**
     * Create a new instance with a Map instance.
     * @param {ECMap<K, V>} map An ECMap instance.
     * @return {ECDictionary<K, V>} A new ECDictionary instance.
     */
    static initWithMap(map) {
        return ECDictionary.initWithNativeMap(map.toNativeMap());
    }
}
exports.ECDictionary = ECDictionary;
