## The Arrow functions faster than the Normal functions

```
let count = 99999998;

function addNormal(x, y) {
  return x + y;
}

const addArrow = (x, y) => {
  return x + y;
};
```

```
console.time('normal function');

const aa = [];

for (let i = 0; i <= count; i++) {
  aa.push(addNormal(i, i));
}

console.timeEnd('normal function');
```

> normal function: 712.452ms

```
console.time('arrow function');

const bb = [];

for (let i = 0; i <= count; i++) {
  bb.push(addArrow(i, i));
}

console.timeEnd('arrow function');
```

> arrow function: 684.23ms

## Avoid string comparisons

```
// Bad
enum Position {
  TOP    = 'TOP',
  BOTTOM = 'BOTTOM',
}
// Good
enum Position {
  TOP,    // = 0
  BOTTOM, // = 1
}
```

```
// 1. string compare
const Position = {
  TOP: 'TOP',
  BOTTOM: 'BOTTOM',
};


// 2. int compare
const Position2 = {
  TOP: 0,
  BOTTOM: 1,
};
```

```
console.time('Position');

let aa = 0;
for (let i = 0; i < 1000000; i++) {
  let current = i % 2 === 0 ?
    Position.TOP : Position.BOTTOM;
  if (current === Position.TOP)
    aa += 1;
}

console.timeEnd('Position');
```

> Position: 2.65ms

```
console.time('Position2');

let bb = 0;
for (let i = 0; i < 1000000; i++) {
  let current = i % 2 === 0 ?
    Position2.TOP : Position2.BOTTOM;
  if (current === Position2.TOP)
    bb += 1;
}

console.timeEnd('Position2');
```

> Position2: 2.033ms

## Avoid indirection
```
console.time('proxy access');
const point = new Proxy({ x: 10, y: 20 }, { get: (t, k) => t[k] });

for (let _ = 0, i = 0; i < 100_000; i++) {
  _ += point.x;
}

console.timeEnd('proxy access');
```
> proxy access: 2.54ms
```
console.time('direct access');
const point2 = { x: 10, y: 20 };
const x = point2.x;
for (let _ = 0, i = 0; i < 100_000; i++) {
  _ += x;
}

console.timeEnd('direct access');
```
> direct access: 0.563ms