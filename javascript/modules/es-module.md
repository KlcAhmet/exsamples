## Export 1
```
// A file can declare a main export via export default:
const Name = 'John'

function sayHello () {
  console.log('Hello!')
}

function sayBY () {
  console.log('BY BY!')
}

export default Name
export { sayHello, sayBY }

/*
export default: export default ifadesi, bir modül dosyasında yalnızca bir değeri veya fonksiyonu
varsayılan olarak dışa aktarmak için kullanılır.
Bu ifade, dışa aktarılan değere ad atama gerektirmez ve içe aktarıldığında herhangi bir ad
kullanmadan doğrudan erişilebilir.

Yani, export ifadesiyle birden fazla değer veya fonksiyon dışa aktarılırken,
export default ifadesiyle yalnızca bir varsayılan değer veya fonksiyon dışa aktarılır.
İçe aktarırken export ifadesiyle dışa aktarılan değeri belirli bir adla içe aktarırken,
export default ifadesiyle dışa aktarılan değeri doğrudan kullanabilirsiniz.
*/
```

## Export 2
```
// A file can declare a main export via export default:
export var pi = 3.14
export const squareTwo = 1.41
export const phi = 1.61

export default class RandomNumberGenerator {
}

export function absolute (num: number) {
  if (num < 0) return num * -1
  return num
}
```
## Import 1
```
// This is then imported via:
import customName, { sayBY, sayHello } from './es-module-syntax-export1'

console.log(customName) // John
sayHello() // Hello!
sayBY() // BY BY!
```
## Import 2
```
// You can take all of the exported objects and put them into a single namespace using * as name:
import RandomNGenerator, * as math from './es-module-syntax-export2'
import { absolute, phi, pi as pi2 } from './es-module-syntax-export2'

console.log(pi2) // 3.14
console.log(absolute(phi)) // 1.61
console.log(RandomNGenerator) // [class RandomNumberGenerator]

console.log(math.pi) // 3.14
console.log(math.absolute(math.phi)) // 1.61
```

## Embrace Tree Shaking
Tree shaking is a technique that removes dead code during the bundling process. Utilize modern ES6 syntax, including 
import and export statements, to enable tree shaking and eliminate unused code from your application.

Example:

Suppose you have a utility file with multiple functions:
```
// utils.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// main.js
import { add } from './utils';
const result = add(3, 4);
```

- Configure Webpack to enable optimization settings for production mode:
```
// webpack.config.js
module.exports = {
  mode: 'production',
  optimization: {
    usedExports: true,
   },
 };
```