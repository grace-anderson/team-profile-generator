const InvalidEmailError = require("../exception/InvalidEmailError");
const { validateEmail } = require("../src/validate");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;

    //  validate emaol, ensure it is a valid email
    const isEmailValid = validateEmail(email);
    

    if(!isEmailValid){
      throw new InvalidEmailError();
    }
    this.email = email;
    this.role = "Employee"
  }

  getRole() {
    return this.role;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }
}

module.exports = Employee;
