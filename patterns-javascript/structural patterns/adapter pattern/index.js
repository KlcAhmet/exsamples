class SimpleEarphones {
  constructor() {
    this.attach = function() {
      console.log("Use Earphones with Type C phone");
    };
  }

}

class Adapter extends SimpleEarphones {
  constructor(typeCphone) {
    super();
    this.attach = function() {
      typeCphone.attach();
    };
  }
}

class TypeCPhone {
  constructor() {
    this.attach = function() {
      console.log("Earphpnes attached to Type C phone");
    };
  }
}

var typeCphone = new TypeCPhone();
var adapter = new Adapter(typeCphone);
adapter.attach();