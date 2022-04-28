const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, employeeId, email, school) {
    super(name, employeeId, email);

    this.school = school;
    this.role = 'intern';
  }

  returnRole() {
    return this.role;
  }
  
  returnSchool() {
    return this.school;
  }

}

module.exports = Intern;
