## Constructor
```
class Test {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    console.log("Inside Constructor", this);
  }

  hello() {
    console.log("hello", this);
  }
}

const variable = new Test(1, 2, 3); // Inside Constructor 1 2 3
variable.hello(); // hello Test { a: 1, b: 2, c: 3 }
```

## extends keyword
```
class Pet {
  constructor(name) {
    this.name = name;
  }

  petName() {
    console.log("pet name", this.name);
  }
}

class Cat extends Pet {
  constructor(name, type = "this is a cat") {
    super(name);
    this.type = type;
  }

  meow() {
    console.log(this.name, "say meow!");
  }

  sayType() {
    console.log(this.type);
  }
}

const variable = new Cat();
variable1 // Cat {name: undefined, type: 'this is a cat'}

variable1.name = "Alex";
variable1.petName(); // pet name Alex
variable1.meow(); // Alex say meow!
variable1.sayType(); // this is a cat
```