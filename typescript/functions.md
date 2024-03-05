# Call Signatures
In JavaScript, functions can have properties in addition to being callable. However, the function type expression 
syntax doesn’t allow for declaring properties. If we want to describe something callable with properties, we can 
write a call signature in an object type:

```
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

myFunc.description = "Default description";

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number) {
  return someArg > 3;
}

doSomething(myFunc); // "Default description returned true" 
```

# Construct Signatures
JavaScript functions can also be invoked with the `new` operator. TypeScript refers to these as constructors because 
they usually create a `new` object. You can write a construct signature by adding the new keyword in front of a call 
signature:
```
type SomeObject = any;

type SomeConstructor = {
  new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}

// Define a concrete constructor
class MyClass {
  constructor(public Name: string) {}
}

// Now you can call the function
const result = fn(MyClass);
console.log(result); // MyClass: { "Name": "hello" } 
console.log(result.Name); // "hello"
console.log(result.Surname); // undefined
```

# Generic Functions
```
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
// declaretion looks like "function firstElement<string>(arr: string[]): string | undefined"
const s = firstElement(["a", "b", "c"]);
// declaretion looks like function firstElement<number>(arr: number[]): number | undefined
const n = firstElement([1, 2, 3]);
// declaretion looks like function firstElement<never>(arr: never[]): undefined
const u = firstElement([]);
```
## Inference
```
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}
 
// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
```
## Constraints
Let’s write a function that returns the longer of two values. To do this, we need a `length` property that’s a number.
We constrain the type parameter to that type by writing an `extends clause:
```
function longest<Type extends { length: number }>(a: Type, b: Type) {
    return a.length >= b.length ? a : b;
}
const longerArray = longest([1, 2], [1, 2, 3]); // longerArray is of type 'number[]'
const longerString = longest("alice", "bob"); // longerString is of type 'alice' | 'bob'
const notOK = longest(10, 100); // Error! Numbers don't have a 'length' property
```
> Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.

### Using Type Parameters in Generic Constraints
```
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
 
let x = { a: 1, b: 2, c: 3, d: 4 };
 
getProperty(x, "a");
> getProperty(x, "m");
```
> Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.

## Specifying Type Arguments
```
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return [...arr1, ...arr2]
}


const arr = combine<string | number>([1, 2, 3], ["hello"]); // arr = [1, 2, 3, "hello"] 
```

```
// Good
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}
```

## Declaring `this` in a Function
TypeScript will infer what the this should be in a function via code flow analysis, for example in the following:
```
const user = {
  id: 123,
 
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};

interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}
 
const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});
```
```
const admins = db.filterUsers(() => this.admin);
> The containing arrow function captures the global value of 'this'.
  Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.
```

## Other Types
* `void`: represents the return value of functions which don’t return a value.
  * >void is not the same as undefined.
* `object`: The special type object refers to any value that isn’t a primitive (`string`, `number`, `bigint`, `boolean`,
`symbol`, `null`, or `undefined`). This is different from the empty object type `{ }`, and also different from the 
  global type `Object`. It’s very likely you will never use `Object`.
  * > object is not Object. Always use object!
  * Note that in JavaScript, function values are objects: They have properties, have `Object.prototype` in their 
  prototype chain, are `instanceof Object`, you can call `Object.keys` on them, and so on. For this reason, 
  function types are considered to be `objects in TypeScript.
* `unknown`: The `unknown type represents `any value. This is similar to the any type, but is safer because it’s not legal to do
anything with an unknown` value:
* `never`: The `never type represents values which are never observed. In a return type, this means that the function 
throws an exception or terminates execution of the program.
* `Function`: The global type `Function` describes properties like `bind`, `call`, `apply`, and others present on all
function values in JavaScript. It also has the special property that values of type `Function` can always be called;
these calls return `any

## Parameter Destructuring
```
function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}
```
```
// Same as prior example
type ABC = { a: number; b: number; c: number };
function sum({ a, b, c }: ABC) {
  console.log(a + b + c);
}
```