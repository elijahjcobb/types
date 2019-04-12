# Collections
A collection of generic structures written in TypeScript.

## Classes 
| Class | Description |
| --- | --- |
| [`ECArray`](https://github.com/elijahjcobb/af-collections/blob/master/dist/array/ECArray.d.ts) | An immutable generic class representing a list of values. |
| [`ECArrayList`](https://github.com/elijahjcobb/af-collections/blob/master/dist/array/ECArrayList.d.ts) | A mutable generic class representing a list of values. |
| [`ECDictionary`](https://github.com/elijahjcobb/af-collections/blob/master/dist/map/ECDictionary.d.ts) | An immutable generic class representing a group of key value pairs. |
| [`ECMap`](https://github.com/elijahjcobb/af-collections/blob/master/dist/map/ECMap.d.ts) | A mutable generic class representing a group of key value pairs. | |
| [`ECIterator`](https://github.com/elijahjcobb/af-collections/blob/master/dist/ECIterator.d.ts) | A generic iterator to iterate through provided values. |
| [`ECCSV`](https://github.com/elijahjcobb/af-collections/blob/master/dist/ECCSV.d.ts) | A helper class to generate a `CSV` endoded `string` from an `ECArray` instance. |
| [`ECEnum`](https://github.com/elijahjcobb/af-collections/blob/master/dist/ECEnum.d.ts) | A helper class to generate both `ECArray` and `ECArrayList` instances from a typescript `enum `. |
| [`ECQueue`](https://github.com/elijahjcobb/af-collections/blob/master/dist/ECQueue.d.ts) | A mutable generic class representing a queue. |
| [`ECStack`](https://github.com/elijahjcobb/af-collections/blob/master/dist/ECStack.d.ts) | A mutable generic class representing a stack. |

## Full Documentation

### Source Code
If you want to poke around the source code for fun it is all located in the [`ts` directory](https://github.com/elijahjcobb/collections/tree/master/ts). 

### TypeScript Declaration Files
I have completely documented everything. In the table at the top each link on class each names directs to the declaration file for the class on GitHub. By installing with NPM you will also get all my type files.


## Import
All the structures are packages on `@elijahjcobb/collections`. Just import it like normal and you can use any structure of the package.
#### All Together
```typescript
import ECCollections = require("@elijahjcobb/collections");
let array: ECCollections.ECArray<any>;
```

#### Separate
```typescript
import { ECArray } from "@elijahjcobb/collections";
let array: ECArray;
```

## Generics
Yes, literally everything is generic. I wrote this for a huge project and made sure everything I made was generic.

## Error Handling
Most classes throw errors when you do something that is a "no-no". This package is using a error handling package of mine called `error`. Check out the package [`@elijahjcobb/error`](https://www.npmjs.com/package/@elijahjcobb/error) for all the documentation. Any errors will be thrown as an instance of an `ECErrorStack`.  

## Bugs
If you find any bugs please [create an issue on GitHub](https://github.com/elijahjcobb/collections/issues) or if you are old fashioned email me at [elijah@elijahcobb.com](mailto:elijah@elijahcobb.com).