const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, employeeId, email, gitHub) {
    super(name, employeeId, email);
   
    this.gitHub = gitHub;
    this.role = 'Engineer';
  }

  returnRole() {
    return this.role;
  }
  
  returnGitHub() {
    return this.gitHub;
  }

}

module.exports = Engineer;
