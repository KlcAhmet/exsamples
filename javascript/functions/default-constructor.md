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