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
import { ECPrototype } from "../ECPrototype";
import { ECArray } from "../array/ECArray";
import { ECDictionary } from "./ECDictionary";
import { ECMappable } from "./ECMappable";
import { ECIterator } from "../ECIterator";
/**
 * An implementation of a JSON object that uses generics.
 */
export declare class ECMap<K, V> extends ECPrototype implements ECMappable<K, V> {
    private map;
    /**
     * The default constructor will only create an instance. Use the static method helpers to create new instances.
     */
    constructor();
    /**
     * Get a value for a specific key from the instance.
     * @param {K} key The key to be used.
     * @return {V} The value for the specified key.
     */
    get(key: K): V;
    /**
     * Get the key for a specified value.
     * @param {V} value The value.
     * @return {K} The key for the specified value.
     */
    getKey(value: V): K;
    /**
     * Returns the number of key value pairs on the instance.
     * @return {number}
     */
    size(): number;
    /**
     * Checks if the instance contains a specific key.
     * @param {K} key The key to be searched for.
     * @return {boolean} Whether the key was found on the instance.
     */
    containsKey(key: K): boolean;
    /**
     * Get all the keys of the instance.
     * @return {ECArray<K>} A new ECArray instance containing all the keys on the instance.
     */
    keys(): ECArray<K>;
    /**
     * Get an ECIterator instance with the keys from the instance.
     * @return {ECIterator<K>}
     */
    keyIterator(): ECIterator<K>;
    /**
     * Checks if the instance contains a specific value.
     * @param {V} value The value to be searched for.
     * @return {boolean} Whether the value was found on the instance.
     */
    containsValue(value: V): boolean;
    /**
     * Get all the values of the instance.
     * @return {ECArray<V>} A new ECArray instance containing all the values on the instance.
     */
    values(): ECArray<V>;
    /**
     * Get an ECIterator instance with the values from the instance.
     * @return {ECIterator<V>} A new ECIterator instance.
     */
    valueIterator(): ECIterator<V>;
    /**
     * Checks if the instance contains a specific key and value pair.
     * @param {K} key The key to be searched for.
     * @param {V} value The value to be searched for.
     * @return {boolean} Whether the key value pair was found on the instance.
     */
    containsKeyValuePair(key: K, value: V): boolean;
    /**
     * An iterator helper to iterator through every key value pair.
     * @param {(key: K, value: V) => void} iterator An arrow function.
     */
    forEach(iterator: ((key: K, value: V) => void)): void;
    /**
     * An iterator helper to iterator through every key value pair that supports each iteration being an async function.
     * @param {(key: K, value: V) => Promise<void>} iterator An async arrow function.
     * @return {Promise<void>} A promise.
     */
    forEachSync(iterator: ((key: K, value: V) => Promise<void>)): Promise<void>;
    /**
     * Convert this instance to a native JavaScript object. Calls toNativeObject() method on instance.
     * @return {object} A native JavaScript object (JSON).
     */
    toJSON(): object;
    /**
     * Convert this instance to a native JavaScript object. Same as toJSON() function.
     * @return {object} A native JavaScript object (JSON).
     */
    toNativeObject(): object;
    /**
     * Convert this instance to a JSON string.
     * @return {string} A string with JSON encoding.
     */
    toString(): string;
    /**
     * Convert this instance to a ECMap instance.
     * @return {ECMap<K, V>} A new ECMap instance with the same internal data as the instance.
     */
    toMap(): ECMap<K, V>;
    /**
     * Convert this instance to a native Map instance.
     * @return {Map<K, V>} A new Map instance with the same internal data as the instance.
     */
    toNativeMap(): Map<K, V>;
    /**
     * Convert this instance to a ECDictionary instance.
     * @return {ECDictionary<K, V>} A new ECDictionary instance with the same internal data as the instance.
     */
    toDictionary(): ECDictionary<K, V>;
    /**
     * Set a value for a key.
     * @param {K} key A key to be added.
     * @param {V} value The value for the specified key.
     */
    set(key: K, value: V): void;
    /**
     * Remove the key and value for the specified key.
     * @param {K} key The key of the key value pair to be removed.
     */
    remove(key: K): void;
    /**
     * Remove all internal data from the instance.
     */
    removeAll(): void;
    /**
     * Remove the key and value for the specified value.
     * @param {V} value The value of the key value pair to be removed.
     */
    removeValue(value: V): void;
    /**
     * Create a new instance with keys and values.
     * @param {K[]} keys A native JavaScript array of keys.
     * @param {V[]} values A native JavaScript array of values.
     * @return {ECMap<K, V>} A new ECMap instance.
     */
    static initWithKeysAndValues<K, V>(keys: K[], values: V[]): ECMap<K, V>;
    /**
     * Create a new instance with keys and values.
     * @param {K[]} keys An ECArray instance containing keys.
     * @param {V[]} values An ECArray instance containing values.
     * @return {ECMap<K, V>} A new ECMap instance.
     */
    static initWithKeyArrayAndValueArray<K, V>(keys: ECArray<K>, values: ECArray<V>): ECMap<K, V>;
    /**
     * Create a new instance with a native JavaScript object.
     * @param {object} nativeObject A native JavaScript object.
     * @return {ECMap<string, V>} A new ECDictionary instance.
     */
    static initWithNativeObject<V>(nativeObject: object): ECMap<string, V>;
    /**
     * Create a new instance with a native Map instance.
     * @param {Map<K, V>} map A native Map instance.
     * @return {ECMap<K, V>} A new ECMap instance.
     */
    static initWithNativeMap<K, V>(map: Map<K, V>): ECMap<K, V>;
    /**
     * Create a new instance with a ECDictionary instance.
     * @param {ECDictionary<K, V>} dictionary An ECDictionary instance.
     * @return {ECMap<K, V>} A new ECMap instance.
     */
    static initWithDictionary<K, V>(dictionary: ECDictionary<K, V>): ECMap<K, V>;
}
