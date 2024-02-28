const EmployeeView = require("./employee view");
const EmployeeController = require("./employee controller");


const view = new EmployeeView();
const controller = new EmployeeController();

view.registerWith(controller);

console.log("Hiring a new employee Rachel");
view.hire("Rachel", "Team Lead");
console.log("Hiring a new employee Jack");
view.hire("Jack", "Software Engineer");
console.log("Updating the name of employee with id 0");
view.editName(0, "Monica");
console.log("Updating the name of an employee with id 7");
view.editName(7, "Joey");