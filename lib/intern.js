const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, employeeId, email, school) {
    this.school = school;

    super(name, employeeId, email);
  }
}

module.exports = Intern;
