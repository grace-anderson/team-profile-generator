const Employee = require("./employee");

class Intern extends Employee {
  constructor(school) {
    this.school = school;

    super(name, employeeId, email);
   
    this.name = internName;
    this.employeeId = internEmployeeId;
    this.email = internEmail;
  }
}

module.exports = Intern;