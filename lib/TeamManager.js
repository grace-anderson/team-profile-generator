const Employee = require("./Employee");

const { validateNo } = require("../src/validate");
const InvalidOfficeNumberError = require("../exception/InvalidOfficeNumberError");

class TeamManager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    //office number
    this.officeNumber = officeNumber;
    // ensure officeNumber is valid
    const isOfficeNumberValid = validateNo(officeNumber);

    if (!isOfficeNumberValid) {
      throw new InvalidOfficeNumberError();
    }

    //role override
    this.role = "Team Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return this.role;
  }
}

module.exports = TeamManager;
