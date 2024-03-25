# The `keyof` type operator
The `keyof` operator takes an object type and produces a string or numeric literal union of its keys. The following
type `P` is the same type as `type P = "x" | "y"`:
```
type Point = { x: number; y: number };
type P = keyof Point;
```
> type P = keyof Point

```
type Point = { x: number; y: number };
type P = keyof Point;
const x: P = "x"
const y: P = "y"
const z: P = "z" // Error: Type '"z"' is not assignable to type 'keyof Point'.
```

If the type has a `string` or `number` index signature, `keyof` will return those types instead:
```
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
    > type A = number

const arrayList1: A = 123
const arrayList2: A = "123" // Errror: Type 'string' is not assignable to type 'number'.
const arrayList3: A = [1123] // Error: Type 'number[]' is not assignable to type 'number'.
 
 
type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
    > type M = string | number

const mapis1: M = "123"
const mapis2: M = 123
const mapis3: M = true // Error: Type 'boolean' is not assignable to type 'string | number'.
```
Note that in this example, `M` is `string | number` — this is because JavaScript object keys are always coerced
to a string, so `obj[0]` is always the same as `obj["0"]`.

`keyof types become especially useful when combined with mapped types, which we’ll learn more about later.

# The `typeof`type operator

JavaScript already has a typeof operator you can use in an expression context:
```
console.log(typeof "Hello world"); // Prints "string"
```
```
TypeScript adds a typeof operator you can use in a type context to refer to the type of a variable or property:

let s = "hello";
let n: typeof s;
   > clet n: string

n = "hi" // OK
n = 123 // Error: Type 'number' is not assignable to type 'string'.
```
This isn’t very useful for basic types, but combined with other type operators, you can use `typeof` to conveniently 
express many patterns. For an example, let’s start by looking at the predefined type `ReturnType<T>`. It takes a function type and produces its return type:
```
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;

function isNumber<Predicate>(x: Predicate): K {
    return typeof x === "number"
}
console.log(isNumber(1)) // true
console.log(isNumber("Hello")) // false
console.log(isNumber(true)) // false
```

If we try to use `ReturnType` on a function name, we see an instructive error:
```
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<f>; // Error: 'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?
```
Remember that values and types aren’t the same thing. To refer to the type that the value f has, we use typeof:
```
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;
```
>```
> type P = {
>    x: number;
>    y: number;
> }
>```

# Indexed Access Types
```
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];
  > type Age = number
```

# Conditional Types
```
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}
 
type Example1 = Dog extends Animal ? number : string;
    > type Example1 = number
 
type Example2 = RegExp extends Animal ? number : string;
    > type Example2 = string
```
Conditional types take a form that looks a little like conditional expressions
(`condition ? trueExpression : falseExpression`) in JavaScript:
```
SomeType extends OtherType ? TrueType : FalseType;
```
```
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

type CreateLabel<T extends string | number> =
  T extends string ? NameLabel : IdLabel;

function createLabelImproved<T extends string | number>(nameOrId: T): CreateLabel<T> {
  return (typeof nameOrId === "string" ? { name: nameOrId } : { id: nameOrId }) as CreateLabel<typeof nameOrId> 

  // OR
  /* if (typeof nameOrId === "string") {
    return { name: nameOrId } as CreateLabel<typeof nameOrId>
  } else {
    return { id: nameOrId } as CreateLabel<typeof nameOrId>;
  } */
}

const label1: NameLabel = createLabelImproved("Alice");
const label2: IdLabel = createLabelImproved(123);
console.log(label1) // {name: Alice}
console.log(label2) // {id: 123}
```

# Mapped Types
```
type OnlyBoolsAndNumbers = {
  [key: string]: boolean | number;
};

const conforms: OnlyBoolsAndNumbers = {
  del: true,
  meta: false,
};


const conforms2: OnlyBoolsAndNumbers = {
  del: true,
  myNumber: 1232,
};


const conforms3: OnlyBoolsAndNumbers = {
  del: true,
  name: "name", // Error: Type 'string' is not assignable to type 'number | boolean'.
};
```

A mapped type is a generic type which uses a union of `PropertyKeys (frequently created
[via a keyof](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)) to iterate 
through keys to create a type:
```
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<Features>;

      //  type FeatureOptions = {
      //      darkMode: boolean;
      //      newUserProfile: boolean;
      //  }
```