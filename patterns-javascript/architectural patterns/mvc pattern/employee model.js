module.exports = class EmployeeModel {
  constructor(name, designation, id) {
    this.name = name;
    this.designation = designation;
    this.id = id;
  }

  getDesignation() {
    return this.designation;
  }

  getID() {
    return this.id;
  }

  getName() {
    return this.name;
  }
};