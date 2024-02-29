## Export
```
function absolute (num: number) {
  if (num < 0) return num * -1
  return num
}

module.exports = {
  pi: 3.14,
  squareTwo: 1.41,
  phi: 1.61,
  absolute
}
```
## Import
```
const maths = require('./commonjs-module-export')
console.log(maths) // { pi: 3.14, squareTwo: 1.41, phi: 1.61, absolute: [Function: absolute] }

console.log(maths.pi) // 3.14
```
Or you can simplify a bit using the destructuring feature in JavaScript:
```
const { squareTwo } = require('./commonjs-module-export')
console.log(squareTwo) // 1.41
````