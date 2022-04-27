const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, employeeId, email, gitHub) {
    this.gitHub = gitHub;

    super(name, employeeId, email);
  }
}

module.exports = Engineer;
