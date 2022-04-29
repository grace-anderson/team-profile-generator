const Employee = require("./Employee");

class TeamManager extends Employee {
  constructor(name, employeeId, email, officeNo) {
    super(name, employeeId, email);

    this.role = "Team Manager";
    this.officeNo = officeNo;

  }

  returnRole() {
    return this.role;
  }
  
  returnOfficeNo() {
    return this.officeNo;
  }

}

module.exports = TeamManager;
