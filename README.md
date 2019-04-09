# Types
A runtime type checker built with and for TypeScript.

## Import
```typescript
import {
	ECTValidator,
	ECTItem,
	ECTOutput 
} from "@elijahjcobb/types";
```

## Defining A Structure
```typescript
import { ECTValidator, ECTItem } from "@elijahjcobb/types";

let validator: ECTValidator = new ECTValidator({
	firstName: ECTItem.string(), // allows string
	lastName: ECTItem.string(), // allows string
	age: ECTItem.number(), // allows number
	agreesItIsTimeToGetIll: ECTItem.boolean(), // allows boolean
	tags: ECTItem.array(ECTItem.string(), ECTItem.number()), // allows string or number as values of an array
	options: ECTItem.object(ECTItem.boolean()) // allows boolean as values of an object
});
```

## Validating Object with Structure
```typescript
import { ECTValidator, ECTItem, ECTOutput } from "@elijahjcobb/types";

// make a validator ...

let exampleValues: object = {
	firstName: "Elijah",
	lastName: "Cobb",
	birthYear: 1999,
	agreesItIsTimeToGetIll: true,
	tags: [ 1, "two"],
	options: { darkMode: true }
};

let output: ECTOutput = validator.inspect(exampleValues);
```

## Get Only Failures
```typescript
let output: ECTOutput = validator.getFailures(exampleValues);
```

## Check if it Fails
```typescript
let res: boolean = validator.doesFail(exampleValues);
```

## Output Structure
The `ECTOutput` will return an object with the same keys as the one you give it. However,
instead of the value you provided, it will be an object with the attributes in the example below.
```
{
    firstName: {
	    expected: string,
	    data: any,
	    index?: number,
	    key?: string,
	    actual: string,
	    passed: boolean
    }
}
```

## Documentation
Everything is completely documented. You can view the [declaration files](https://github.com/elijahjcobb/types/tree/master/dist) or even the [source code](https://github.com/elijahjcobb/types/tree/master/ts) on GitHub.

## Bugs
If you find any bugs please [create an issue on GitHub](https://github.com/elijahjcobb/types/issues) or if you are old fashioned email me at [elijah@elijahcobb.com](mailto:elijah@elijahcobb.com).
