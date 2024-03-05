# Object Types
## `readonly` Properties
```
interface Home {
  readonly resident: { name: string; age: number };
}
 
function visitForBirthday(home: Home) {
  // We can read and update properties from 'home.resident'.
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.age++;
}
 
function evict(home: Home) {
  // But we can't write to the 'resident' property itself on a 'Home'.
  home.resident = {
    > Cannot assign to 'resident' because it is a read-only property.
    name: "Victor the Evictor",
    age: 42,
  };
}
```
## Index Signatures
```
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}
```
## Generic Object Types
```
interface Box<Type> {
  contents: Type;
}
interface StringBox {
  contents: string;
}
 
let boxA: Box<string> = { contents: "hello" };
boxA.contents;
   > (property) Box<string>.contents: string
 
let boxB: StringBox = { contents: "world" };
boxB.contents;
   > (property) StringBox.contents: string
```
### The `Array` Type
```
function doSomething(value: Array<string>) {
  // ...
}
 
let myArray: string[] = ["hello", "world"];
```
### The `ReadonlyArray` Type
> function doStuff(values: `ReadonlyArray<string>`)
```
function doStuff(values: ReadonlyArray<string>) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);
 
  // ...but we can't mutate 'values'.
  values.push("hello!");
   > Property 'push' does not exist on type 'readonly string[]'.
}
```
```
const roArray: ReadonlyArray<string> = ["red", "green", "blue"];
```
```
let x: readonly number[] = [];
let z: readonly number[] = [1,2,3];
let y: number[] = [];


x = z;
y = x; // error
    > Type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.
```

## Tuple Types
```
type StringNumberPair = [string, number];
```
```
function doSomething(pair: [string, number]) {
  > const a = pair[0];
       
const a: string
  > const b = pair[1];
       
const b: number
  // ...
}
 
doSomething(["hello", 42]);
```
```
function doSomething(stringHash: [string, number]) {
  const [inputString, hash] = stringHash;
 
  console.log(inputString); // const inputString: string
 
  console.log(hash); // const hash: number
}
```
```
type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];
```

