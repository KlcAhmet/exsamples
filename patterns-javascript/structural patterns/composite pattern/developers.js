const Employee = require("./employee");

//Leaf subclass
class Developers extends Employee {
  constructor(name, position, progress) {
    super(name, position, progress);
  }

  getProgress() {
    return this.progress;
  }
}

module.exports = Developers