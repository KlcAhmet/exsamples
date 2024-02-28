```
function test() {
  // this refers to the window (global scope object in the browser)
  console.log(this);
  
  /*
    <ref *1> Object [global] {
      global: [Circular *1],
      clearInterval: [Function: clearInterval],
      clearTimeout: [Function: clearTimeout],
      setInterval: [Function: setInterval],
      setTimeout: [Function: setTimeout] {
        [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
      },
      queueMicrotask: [Function: queueMicrotask],
      clearImmediate: [Function: clearImmediate],
      setImmediate: [Function: setImmediate] {
        [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
      }
    }
  */
}
```
```
const test = {
  first: 1,
  second: 2,
  third: 3,
  fullInfo() {
    console.log(this);
    /*
      fullInfo {
      first: 1,
      second: 2,
      third: 3,
      fullInfo: [Function: fullInfo],
      fullInfo2: [Function: fullInfo2],
      getFirst: [Function: getFirst]
      }
    */
  },
  fullInfo2() {
    const { first, second, third } = this; // 1 2 3
  },
  getFirst() {
    this.first // 1
  },
  aerofunction: () => {
    /*
      aero function objenin referansını dönmez ve parent object'a ulaşamayız.
      Bu yüzden obje içinde kullanılması uygun görülmemektedir.
    */
    console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
  },
};
```