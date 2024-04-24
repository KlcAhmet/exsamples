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

## Mapped with Conditions

```
// bad
const arr = someArray.map((item) => {
    if (item === 0) {
      return 0
    } else if (item === 1) {
      return 1
    }
    
    return item;
  });
```

```
// good
const arr = someArray.map((item) => {
    let result = item;
    if (item === 0) {
      result = 0
    } else if (item === 1) {
      result = 1
    }

    return result;
  });
```

## Convert a String to a Number

```
const toNumber = (str) => Number(str);
// or
const toNumber = (str) => +str;
```

## Easy Defaults with OR

```
const result = (undefined || null || false) || "guest"      // result = "guest"
```