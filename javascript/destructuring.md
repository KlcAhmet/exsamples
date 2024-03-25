```
[x, y] = [y, x]; 
console.log(x); //13
const [first, second] = [1, 2, 3];
```
```
const test1 = {
  first: 1,
  second: 2,
  third: 3,
};
const { first, second } = test1;
console.log(first, second); // 1 2
```
```
const { first: f, ...remaining } = {
 first: "Jane", 
 last: "Doe", age: 43 
 };
console.log(f); // Jane
console.log(remaining); // { last: 'Doe', age: 43 }
```
## Spread
```
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; // [ 1, 2, 3, 4, 5, 6 ]
```
```
const [head, ...tail] = ["a", "b", "c"];
console.log(head); // a
console.log(tail); // [ 'b', 'c']
```