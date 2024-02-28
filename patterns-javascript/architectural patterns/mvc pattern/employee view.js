module.exports = class EmployeeView {
  constructor() {
    this.controller = null;
  }

  registerWith(controller) {
    this.controller = controller;
    this.controller.addView(this);
  }

  printEmployeeInfo(name, designation, id) {
    console.log(`Employee info:\nName is: ${name}\nID is: ${id}\nDesignation is: ${designation}`);
  }

  hire(name, designation) {
    this.controller.hire(name, designation);
  }

  editName(id, name) {
    this.controller.setEmployeeName(id, name);
  }
};