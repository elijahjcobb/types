# Error
An in depth error handling package.

## Included Structures
| Class | Description |
| --- | --- |
| [`ECError`](https://github.com/elijahjcobb/error/blob/master/dist/ECError.d.ts) | The actual error object. Holds the stack, type, origin, and message. |
| [`ECErrorStack`](https://github.com/elijahjcobb/error/blob/master/dist/ECErrorStack.d.ts) | A collection of `ECError` instances. Contains helper methods for creating `ECError` instances and helpful tools to tack on general messages to hide information from end user. |
| [`ECErrorType`](https://github.com/elijahjcobb/error/blob/master/dist/ECErrorTypes.d.ts) | An enum for different types of errors. |
| [`ECErrorOriginType`](https://github.com/elijahjcobb/error/blob/master/dist/ECErrorTypes.d.ts) | An enum for different possible origins of errors. |

## Import
#### Separately
```typescript
import { ECError, ECErrorStack, ECErrorOriginType, ECErrorType } from "@elijahjcobb/error";
```

#### Together
```typescript
import ECError = require("@elijahjcobb/error");
let error: ECError.ECError = new ECError.ECError();
let stack: ECError.ECErrorStack = ECError.ECErrorStack.newWithMessageAndType();
```

## Usage
### `ECError`
The `ECError` class holds a origin, type, and native JavaScript `Error` instance. Pass those along in the constructor. The origin and type are to be of type `ECErrorOriginType` and `ECErrorType`. Passing a native JavaScript `Error` instance allows `ECError` to follow the stack of the error which is obviously very helpful when debugging.
### `ECErrorStack`
The `ECErrorStack` class holds a collection of `ECError` instances. There are static factory helper methods to create instances easier like with a predefined `ECError` instance. You get get the top most error, add a general error to hide errors during production and a lot more.

## Documentation
Everything is completely documented. You can view the [declaration files](https://github.com/elijahjcobb/error/tree/master/dist) or even the [source code](https://github.com/elijahjcobb/error/tree/master/ts) on GitHub. Click a class from the table in the _"Classes"_ section to view its declaration file.

## Bugs
If you find any bugs please [create an issue on GitHub](https://github.com/elijahjcobb/error/issues) or if you are old fashioned email me at [elijah@elijahcobb.com](mailto:elijah@elijahcobb.com).