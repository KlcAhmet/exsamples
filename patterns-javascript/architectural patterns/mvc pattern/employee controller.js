const EmployeeModel = require("./employee model");

module.exports = class EmployeeController {
  constructor() {
    this.model = null;
    this.view = null;
    this.empList = [];
  }

  addView(view) {
    this.view = view;
  }

  addModel(model) {
    this.model = model;
  }

  setEmployeeName(id, name) {
    if (this.empList[id]) {
      this.empList[id].name = name;
      this.updateView();
    } else {
      console.log("Incorrect id");
    }
  }

  updateView() {
    console.log("List of employees:");

    for (let i in this.empList)
      this.view.printEmployeeInfo(this.empList[i].getName(), this.empList[i].getDesignation(), this.empList[i].getID());
    console.log("\n");
  }

  hire(name, designation) {
    this.empList.push(new EmployeeModel(name, designation, this.empList.length));
    this.updateView();
  }
};