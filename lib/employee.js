class Employee {
  constructor(name, employeeId, email) {
    this.name = name;
    this.employeeId = employeeId;
    this.email = email;
    this.role = "employee"
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
