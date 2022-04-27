const Employee = require("./employee");

class TeamManager extends Employee {
  constructor(name, employeeId, email, officeNo) {
    super(name, employeeId, email);

    this.officeNo = officeNo;

  }
}

module.exports = TeamManager;
