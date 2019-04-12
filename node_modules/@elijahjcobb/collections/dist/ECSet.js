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
const ECArrayList_1 = require("./array/ECArrayList");
class ECSet {
    /**
     * The default constructor will only create an instance. Use the static method helpers to create new instances.
     */
    constructor(...objects) {
        this.list = new ECArrayList_1.ECArrayList();
    }
    /**
     * Add an object to the set.
     * @param {T} object The object to be added to the set.
     */
    add(object) {
        if (!this.list.contains(object))
            this.list.add(object);
    }
    /**
     * Remove an object from the set.
     * @param {T} object The object to be removed from the set.
     */
    remove(object) {
        this.list.removeValue(object);
    }
    /**
     * Create a new set from this set and another set.
     * @param {ECSet<T>} set Another set to unionize with this set.
     * @return {ECSet<T>} A new ECSet instance.
     */
    union(set) {
        let newSet = new ECSet();
        let list = new ECArrayList_1.ECArrayList();
        this.list.forEach((object) => { if (!list.contains(object))
            list.add(object); });
        set.list.forEach((object) => { if (!list.contains(object))
            list.add(object); });
        newSet.list = list;
        return newSet;
    }
    /**
     * Create a new set from the intersection of this set and another set.
     * @param {ECSet<T>} set Another set to intersect with this set.
     * @return {ECSet<T>} A new ECSet instance.
     */
    intersection(set) {
        let newSet = new ECSet();
        let list = new ECArrayList_1.ECArrayList();
        this.list.forEach((object) => { if (set.list.contains(object))
            list.add(object); });
        newSet.list = list;
        return newSet;
    }
    /**
     * Create a new set from the difference between this set and another set.
     * @param {ECSet<T>} set Another set to get the difference between.
     * @return {ECSet<T>} A new ECSet instance.
     */
    difference(set) {
        let newSet = new ECSet();
        let list = new ECArrayList_1.ECArrayList();
        this.list.forEach((object) => { if (!set.list.contains(object))
            list.add(object); });
        newSet.list = list;
        return newSet;
    }
    /**
     * Checks if a set is a subset of this set.
     * @param {ECSet<T>} set A possible subset.
     * @return {boolean} Whether the specified set is a subset of this set.
     */
    subset(set) {
        for (let i = 0; i < this.list.size(); i++)
            if (!set.list.contains(this.list.get(i)))
                return false;
        return true;
    }
    /**
     * Create a new ECSet instance from specific values.
     * @param {T} values The values to add to the new instance.
     * @return {ECSet<T>} A new ECSet instance.
     */
    static initWithValues(...values) {
        let set = new ECSet();
        set.list = ECArrayList_1.ECArrayList.initFromNativeArray(values);
        return set;
    }
    /**
     * Create a new ECSet from a native JavaScript array.
     * @param {T[]} nativeArray The array of values to add to this instance.
     * @return {ECSet<T>} A new ECSet instance.
     */
    static initFromNativeArray(nativeArray) {
        let set = new ECSet();
        set.list = ECArrayList_1.ECArrayList.initFromNativeArray(nativeArray);
        return set;
    }
    /**
     * Create a new ECSet from a ECArray.
     * @param {ECArray<T>} array The ECArray whose values should be added to this instance.
     * @return {ECSet<T>} A new ECSet instance.
     */
    static initFromArray(array) {
        let set = new ECSet();
        set.list = ECArrayList_1.ECArrayList.initFromArray(array);
        return set;
    }
    /**
     * Create a new ECSet from a ECArrayList.
     * @param {ECArrayList<T>} arrayList The ECArrayList whose values should be added to this instance.
     * @return {ECSet<T>} A new ECSet instance.
     */
    static initFromArrayList(arrayList) {
        let set = new ECSet();
        set.list = arrayList;
        return set;
    }
}
exports.ECSet = ECSet;
