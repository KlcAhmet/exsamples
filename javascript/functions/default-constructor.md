## Constructor
```
function Test(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}
new Test(1, 2, 3); // Test { a: 1, b: 2, c: 3 }

Test.prototype.testFunction = (a, b, c) => {
  return { a, b, c };
};
new Test().testFunction(4, 5, 6); // { a: 4, b: 5, c: 6 }
```
## Default
```
function test(x = 1) {
  console.log(x);
}
test(); // 1
```
```
function test({ x = 2 } = {}) {
  console.log(x);
}
test(); // 2
test({ x: 3 }); // 3
```

## arguments
```
function test() {
  const argsArr = [...arguments]; // [ 1, 2, 3 ]
  
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }
  console.log(...arguments); // 1 2 3
}
test(1, 2, 3);
```