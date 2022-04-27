const Employee = require("./employee");

class TeamManager extends Employee {
  constructor(name, employeeId, email, officeNo) {
    this.officeNo = officeNo;

    super(name, employeeId, email);
  }
}

module.exports = TeamManager;
