## If statements with multiple conditions

```
//longhand
if (x === 'abc' || x === 'def' || x === 'ghi' || x ==='jkl') {
    //logic
}
//shorthand
if (['abc', 'def', 'ghi', 'jkl'].includes(x)) {
   //logic
}
```

## Check if a variable is an Array

`length` and `isArray` in `if` statements

```
const isArray = Array.isArray(arr);
const length = !arr.length | !!arr.length
if(isArray && length) {}
```