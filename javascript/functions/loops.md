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
# Functions in the "for of" loop
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