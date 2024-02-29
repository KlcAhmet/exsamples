# Type Annotations on Variables
When you declare a variable using const, var, or let, you can optionally add a type annotation to explicitly specify the type of the variable:
- let
- const
- var

```
let myName: string = "Alice"
let myAge: number = 30
let isValid: boolean = false
```
In most cases, though, this isn’t needed. Wherever possible, TypeScript tries to automatically infer the types in your code. For example, the type of a variable is inferred based on the type of its initializer:
```
// No type annotation needed -- 'myName' inferred as type 'string'
let myName = "Alice"
```

# Type Annotations on Functions

## Parameter Type Annotations
When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts. Parameter type annotations go after the parameter name:
```
// Parameter type annotation
function greet(name: string) {
  console.log("Hello,", name); // Hello, Alice
}
```
## Return Type Annotations
You can also add return type annotations. Return type annotations appear after the parameter list:
```
function getFavoriteNumber(): number {
  return 26;
}
```

## Functions Which Return Promises
If you want to annotate the return type of a function which returns a promise, you should use the `Promise` type:
- `Promise<number>`: The function returns a promise which resolves to a number.
- `Promise<>` is a utility type that takes a type argument and returns a new type which represents a promise that resolves to that type.
  - You can use with [Awaited](https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype) to get the type that a promise resolves to.
```
async function getFavoriteNumber(): Promise<number> {
  return 26;
}
```
## Anonymous Functions
Anonymous functions are a little bit different from function declarations. When a function appears in a place where TypeScript can determine how it’s going to be called, the parameters of that function are automatically given types.

Here’s an example:

`const names = ["Alice", "Bob", "Eve"];`
 ```
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});
```
Even though the parameter `s` didn’t have a type annotation, TypeScript used the types of the `forEach` function, 
along with the inferred type of the array, to determine the type `s` will have.

# Union Types
```
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });
Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
```
For example, TypeScript knows that only a string value will have a typeof value "string":
```
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
```
Another example is to use a function like Array.isArray:
```
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}
```
You can actually use a type alias to give a name to any type at all, not just an object type. For example,
a type alias can name a union type:

`type ID = number | string;`

# Differences Between Type Aliases and Interfaces
Type aliases and interfaces are very similar, and in many cases you can choose between them freely. 
Almost all features of an `interface` are available in `type`, the key distinction is that a type cannot be re-opened 
to add new properties vs an interface which is always extendable.

## Interface
Extending an interface
```
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;
```

## Type
Extending a type via intersections
```
type Animal = {
  name: string;
}

type Bear = Animal & { 
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;
```

# Type Assertions
Sometimes you will have information about the type of a value that TypeScript can’t know about.

For example, if you’re using `document.getElementById`, TypeScript only knows that this will return some kind of
`HTMLElement`, but you might know that your page will always have an `HTMLCanvasElement with a given ID.

In this situation, you can use a type assertion to specify a more specific type:

```
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```
Try
Like a type annotation, type assertions are removed by the compiler and won’t affect the runtime behavior of your code.

You can also use the angle-bracket syntax (except if the code is in a `.tsx` file), which is equivalent:
```
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```
>Reminder: Because type assertions are removed at compile-time, there is no runtime checking associated with a 
type assertion. There won’t be an exception or null generated if the type assertion is wrong.

Sometimes this rule can be too conservative and will disallow more complex coercions that might be valid. 
If this happens, you can use two assertions, first to `any` (or `unknown, which we’ll introduce later),
then to the desired type:
```
const b = expr as any as T;
```
```
const a = expr as string;
```

# Literal Types
In addition to the general types string and number, we can refer to specific strings and numbers in type positions.

One way to think about this is to consider how JavaScript comes with different ways to declare a variable. 
Both var and let allow for changing what is held inside the variable, and const does not. 
This is reflected in how TypeScript creates types for literals.

```
type Easing = "ease-in" | "ease-out" | "ease-in-out";
// OK
const transition: Easing = "ease-in";
// Error
const transition: Easing = "uneasy";
> Argument of type '"uneasy"' is not assignable to parameter of type '"ease-in" | "ease-out" | "ease-in-out"'.
```
You can combine these with non-literal types:
```
type Easing = "ease-in" | "ease-out" | "ease-in-out";
type ExtendedEasing = Easing | number;
// OK
const transition: ExtendedEasing = 123;
// OK
const transition: ExtendedEasing | boolean = true;
// Error
const transition: ExtendedEasing = true;
```

# `null` and `undefined`
TypeScript has two corresponding types by the same names. 
How these types behave depends on whether you have the
[strictNullChecks](https://www.typescriptlang.org/tsconfig#strictNullChecks) option on.
- default: **true**

### strictNullChecks `off`
With [strictNullChecks](https://www.typescriptlang.org/tsconfig#strictNullChecks) `off`, values that might be `null` or
`undefined` can still be accessed normally, and the values null and undefined can be assigned to a property of any type.
This is similar to how languages without null checks (e.g. C#, Java) behave. 
The lack of checking for these values tends to be a major source of bugs; we always recommend people turn
[strictNullChecks](https://www.typescriptlang.org/tsconfig#strictNullChecks) `on`if it’s practical to do so in their codebase.

### [strictNullChecks](https://www.typescriptlang.org/tsconfig#strictNullChecks) `on`
With [strictNullChecks](https://www.typescriptlang.org/tsconfig#strictNullChecks) `on`, when a value is `null` or
`undefined`, you will need to test for those values before using methods or properties on that value. 
Just like checking for `undefined before using an optional property, we can use narrowing to check for values that 
might be `null`:
```
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
```
### Non-null Assertion Operator (Postfix `!`)
TypeScript also has a special syntax for removing `null` and `undefined` from a type without doing any explicit checking.
Writing `!` after any expression is effectively a type assertion that the value isn’t `null` or `undefined`:
```
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```
Just like other type assertions, this doesn’t change the runtime behavior of your code, so it’s important to only
use `!` when you know that the value can’t be `null` or `undefined.

# typeof Type Guards
As we’ve seen, JavaScript supports a `typeof` operator which can give very basic information about the type of 
values we have at runtime. TypeScript expects this to return a certain set of strings:

* "string"
* "number"
* "bigint"
* "boolean"
* "symbol"
* "undefined"
* "object"
* "function"

In TypeScript, checking against the value returned by `typeof` is a type guard. Because TypeScript encodes how `typeof` 
operates on different values, it knows about some of its quirks in JavaScript. For example, notice that in the list 
above, `typeof doesn’t return the string `null`. Check out the following example:
```
function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    for (const s of strs) { // 'strs' is possibly 'null'.
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}
```

In the `printAll` function, we try to check if `strs` is an object to see if it’s an array type (now might be a good 
time to reinforce that arrays are object types in JavaScript). But it turns out that in JavaScript, `typeof null` 
is actually `"object"`! This is one of those unfortunate accidents of history.

Users with enough experience might not be surprised, but not everyone has run into this in JavaScript; luckily, 
TypeScript lets us know that `strs` was only narrowed down to `string[] | null` instead of just `string[].

This might be a good segue into what we’ll call “truthiness” checking.

## Equality narrowing
TypeScript also uses `switch` statements and equality checks like `===`, `!==`, `==`, and `!=` to narrow types.

For example:
```
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
          > (method) String.toUpperCase(): string
          
    y.toLowerCase();
          > (method) String.toLowerCase(): string
  } else {
    console.log(x);
          > (parameter) x: string | number
          
    console.log(y);
          > (parameter) y: string | boolean
  }
}
```

### The `in` operator narrowing
```
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}
```
Or
```
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
 
function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    animal;
      > (parameter) animal: Fish | Human
      
  } else {
    animal;
      > (parameter) animal: Bird | Human
  }
}
```

### `instanceof` narrowing
they can still be useful for most values that can be constructed with new. As you might have guessed, `instanceof` is 
also a type guard, and TypeScript narrows in branches guarded by `instanceof`s.
```
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
        > (parameter) x: Date
        
  } else {
    console.log(x.toUpperCase());
        > (parameter) x: string
  }
}
```
### Using type predicates
`pet is Fish` is our type predicate in this example. A predicate takes the form `parameterName is Type`,
where `parameterName must be the name of a parameter from the current function signature.
```
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

isFish({ swim: ()=> {} }) // true
isFish({ fly: ()=> {} }) // false
```

## The `never` type
When narrowing, you can reduce the options of a union to a point where you have removed all possibilities and have
nothing left. In those cases, TypeScript will use a `never` type to represent a state which shouldn’t exist.

## Exhaustiveness checking
```
type Shape = Circle | Square;
 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
```
Then adding new type on Shape
```
interface Triangle {
  kind: "triangle";
  sideLength: number;
}
 
type Shape = Circle | Square | Triangle;
 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":   // type circle was here
      return Math.PI * shape.radius ** 2;
    case "square":   // type square was here
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
            > Error: Type 'Triangle' is not assignable to type 'never'.
      return _exhaustiveCheck;
  }
}
```