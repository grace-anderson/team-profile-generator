const InvalidEmailError = require("../exception/InvalidEmailError");
const { validateEmail } = require("../src/validate");

class Employee {
  constructor(name, employeeId, email) {
    this.name = name;
    this.employeeId = employeeId;

    //  validate emaol, ensure it is a valid email
    const isEmailValid = validateEmail(email);
    

    if(!isEmailValid){
      throw new InvalidEmailError();
    }
    this.email = email;
    this.role = "Employee"
  }

  returnRole() {
    return this.role;
  }

  returnName() {
    return this.name;
  }

  returnEmployeeId() {
    return this.employeeId;
  }

  returnEmail() {
    return this.email;
  }
}

module.exports = Employee;
