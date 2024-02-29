## Functions in the "for of" loop
```
function add(x, y) {
  return x + y;
}

const subtract = (x, y) => {
  return x - y;
};

const multiply = (x, y) => {
  return x * y;
};

const divide = (x, y) => {
  return x / y;
};

const operations = [add, subtract, multiply, divide];

for (let func of operations) {
  console.log(func(2, 30));
  /*
    32
    -28
    60
    0.06666666666666667
  */
}
```
## Objects in the "for in" loop
```
const object = { a: 1, b: 2, c: 3 };

for (const key in object) {
  console.log(`${key}:`, object[key])
  /*
    a: 1
    b: 2
    c: 3
  */
}
console.log(object); // { a: 1, b: 2, c: 3 }
```
## Spread
```
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; // [ 1, 2, 3, 4, 5, 6 ]
```
```
const arr = [1, 2, 3, 4];

function test(...x) {
  console.log(x);
}
test(...arr); // [ 1, 2, 3, 4 ]
```
```
const arr = [1, 2, 3, 4];

function test(x) {
  console.log(x);
}
test(...arr); // 1
```
```
function test(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}
test(...arr);
/*
  a 1
  b 2
  c 3
  d 4
 */
```
```
function test(first, ...remaining) {
  return { first, remaining };
}

const arr = [1, 2, 3];
test(1, 2, 3) // { first: 1, remaining: [ 2, 3 ] }
test(arr) // { first: [ 1, 2, 3 ], remaining: [] }
```
```
const [head, ...tail] = ["a", "b", "c"];
console.log(head); // a
console.log(tail); // [ 'b', 'c']
```
```
const { first: f, ...remaining } = { first: "Jane", last: "Doe", age: 43 };
console.log(f); // Jane
console.log(remaining); // { last: 'Doe', age: 43 }
```
```
function test(...args) {
  return args;
}

console.log(test(...arr1)); //  [1, 2, 3 ]
console.log(test(...arr1, "c")); //  [ 1, 2, 3, 'c' ]
console.log(test({ ...{ a: 1, b: 2 }, c: 3 })); //  [ { a: 1, b: 2, c: 3 } ]
```