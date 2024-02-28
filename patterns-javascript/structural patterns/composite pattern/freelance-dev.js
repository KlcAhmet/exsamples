const Employee = require("./employee");

//Leaf subclass
class FreeLanceDev extends Employee {
  constructor(name, position, progress) {
    super(name, position, progress);
  }

  getProgress() {
    return this.progress();
  }
}

module.exports = FreeLanceDev;