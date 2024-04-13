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

```
console.time('arrow function');

const bb = [];

for (let i = 0; i <= count; i++) {
  bb.push(addArrow(i, i));
}

console.timeEnd('arrow function');
```

> normal function: 712.452ms
>
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

> Position: 2.65ms
>
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

```
console.time('direct access');
const point2 = { x: 10, y: 20 };
const x = point2.x;
for (let _ = 0, i = 0; i < 100_000; i++) {
  _ += x;
}

console.timeEnd('direct access');
```

> proxy access: 2.54ms
>
> direct access: 0.563ms

## String, classname

```
const classNames = ['primary', 'selected', 'active', 'medium'];
```

```
console.time('mutation');

const result =
  classNames
    .map(c => `button--${c}`)
    .join(' ');
    
console.timeEnd('mutation');
```

```
console.time('concatenation');

const result2 =
  classNames
    .map(c => 'button--' + c)
    .reduce((acc, c) => acc + ' ' + c, '');
    
console.timeEnd('concatenation');

```

> mutation: 0.038ms
>
> concatenation: 0.011ms

## Array vs Set

```
const userIds = Array.from({ length: 1_000 }).map((_, i) => i);
const adminIdsArray = userIds;
const adminIdsSet = new Set(adminIdsArray);
```

```
console.time('array');
let aa = 0;
for (let i = 0; i < userIds.length; i++) {
  if (adminIdsArray.includes(userIds[i])) {
    aa += 1;
  }
}
console.timeEnd('array');
```

```
console.time('set');
let bb = 0;
for (let i = 0; i < userIds.length; i++) {
  if (adminIdsSet.has(userIds[i])) {
    bb += 1;
  }
}
console.timeEnd('set');
```

> array: 0.172ms
>
> set: 0.115ms

## The Equeal Operator vs The Includes in if statements

```
const x = null;

console.time('operator');
if (x === 'abc' || x === 'def' || x === 'ghi' || x === 'jkl') {
  //logic
}
console.timeEnd('operator');

console.time('array-includes');
if (['abc', 'def', 'ghi', 'jkl'].includes(x)) {

}
console.timeEnd('array-includes');
```

> operator: 0.03ms
>
> array-includes: 0.003ms
