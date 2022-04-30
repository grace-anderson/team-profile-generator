const InvalidEmailError = require("../exception/InvalidEmailError");
const InvalidIdError = require("../exception/InvalidIdError");
const { validateEmail, validateNo } = require("../src/validate");

class Employee {
  constructor(name, id, email) {
    //name
    this.name = name;
    //id
    this.id = id;
    //ensure id is valid
    const isIdValid = validateNo(id);

    if (!isIdValid) {
      throw new InvalidIdError();
    }
    //email
    this.email = email;

    //ensure email is valid
    const isEmailValid = validateEmail(email);

    if (!isEmailValid) {
      throw new InvalidEmailError();
    }
    //role
    this.role = "Employee";
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

  getRole() {
    return this.role;
  }
}

module.exports = Employee;
