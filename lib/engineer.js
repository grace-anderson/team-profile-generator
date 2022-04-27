const Employee = require("./employee");

class Engineer extends Employee {
  constructor(gitHub) {
    this.gitHub = gitHub;

    super(name, employeeId, email);
   
    this.name = engName;
    this.employeeId = engEmployeeId;
    this.email = engEmail;
  }
}

module.exports = Engineer;
