```
class SampleClass {
  /*
    instead of:
    constructor() { this.publicID = 42; }
  */
  publicID = 42; // public field

  /*
    instead of:
    static get staticPublicField() { return -1 }
  */
  static staticPublicField = -1;

  // static private field
  static #staticPrivateField = "private";

  //private methods
  #privateMethod() {
  }

  // static block
  static {
    // executed when the class is created
  }
}
```
