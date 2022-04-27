const Employee = require("./employee");

class TeamManager extends Employee {
  constructor(officeNo) {
    this.officeNo = officeNo;

    super(name, employeeId, email);
   
    this.name = mgrName;
    this.employeeId = mgrEmployeeId;
    this.email = mgrEmail;
  }
}

module.exports = TeamManager;
