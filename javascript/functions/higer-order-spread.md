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
function test(...args) {
  return args;
}

console.log(test(...arr1)); //  [1, 2, 3 ]
console.log(test(...arr1, "c")); //  [ 1, 2, 3, 'c' ]
console.log(test({ ...{ a: 1, b: 2 }, c: 3 })); //  [ { a: 1, b: 2, c: 3 } ]
```