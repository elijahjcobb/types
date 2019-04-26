# Types
A runtime type checker built with and for TypeScript.

## Example
```typescript
try {

	let validator: ECTValidator = new ECTValidator({
		arr: ECTItem.array([ECTItem.string()]),
		str: ECTItem.string(),
		boo: ECTItem.boolean(),
		num: ECTItem.number(),
		obj: ECTItem.object({
			str: ECTItem.string(),
			num: ECTItem.number()
		}),
		allObj: ECTItem.object({
			"*": ECTItem.string()
		})
	});

	validator.verify({
		arr: [
			"Hello",
			12
		],
		str: 2309,
		boo: "fq23",
		num: false,
		obj: {
			str: 12,
			num: "f2elj"
		},
		allObj: {
			foo: 89,
			bar: 87123
		}
	});

} catch (e) {

	e.print();

}


/*

Value '12' for key 'arr' is incorrect type (expected: 'array<string>' actual: 'array<number>').
Value '2309' for key 'str' is incorrect type (expected: 'string' actual: 'number').
Value 'fq23' for key 'boo' is incorrect type (expected: 'boolean' actual: 'string').
Value 'false' for key 'num' is incorrect type (expected: 'number' actual: 'boolean').
Value '12' for key 'str' in object 'obj' is incorrect type (expected: 'string' actual: 'number').
Value 'f2elj' for key 'num' in object 'obj' is incorrect type (expected: 'number' actual: 'string').
Value '89' for key 'foo' in object 'allObj' is incorrect type (expected: 'string' actual: 'number').

*/
```

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
	firstName: ECTItem.string(true), // allows string but is optional
	lastName: ECTItem.string(), // allows string
	age: ECTItem.number(), // allows number
	agreesItIsTimeToGetIll: ECTItem.boolean(), // allows boolean
	tags: ECTItem.array(false, ECTItem.string(), ECTItem.number()), // allows string or number as values of an array and is required
	options: ECTItem.object({
	    darkMode: ECTItem.boolean(), // allows boolean
	    timeout: ECTItem.number() // allows number
	}, false) // checks each key in the object and is required
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
	options: { darkMode: true, timeout: 123 }
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
instead of the value you provided, it will be an object with the attributes in the example below. On an object type it will respond each key with the format below.
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
