const Employee = require("./Employee");

class TeamManager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.role = "Team Manager";
    this.officeNumber = this.officeNumber;

  }

  getRole() {
    return this.role;
  }
  
  getOfficeNumber() {
    return this.officeNumber;
  }

}

module.exports = TeamManager;
