const InvalidEmailError = require("../exception/InvalidEmailError");
const InvalidIdError = require("../exception/InvalidIdError");
const { validateEmail, validateId } = require("../src/validate");

class Employee {
  constructor(name, id, email) {
    this.name = name;

    //ensure id is valid
    const isIdValid = validateId(id);

    if (!isIdValid) {
      throw new InvalidIdError();
    }

    //ensure email is valid
    const isEmailValid = validateEmail(email);

    if (!isEmailValid) {
      throw new InvalidEmailError();
    }

    this.email = email;
    this.role = "Employee";
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
