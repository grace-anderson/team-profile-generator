const Employee = require("../lib/employee");
const InvalidEmailError = require("../exception/InvalidEmailError");
const InvalidIdError = require("../exception/InvalidIdError");

//1. Employee class
describe("Employee Test", () => {
  // Employee should be a class
  test("if Employee is a class", () => {
    const newEmployee = new Employee(
      "Ninfa Cadenhead",
      101,
      "ninfa@galacticroster.com"
    );

    expect(newEmployee).toBeInstanceOf(Object);
    expect(newEmployee).toBeInstanceOf(Employee);
  });

  // 2. getName()
  // Employee constructor should return name
  test("getName() should return name string", () => {
    const employee = new Employee(
      "Ninfa Cadenhead",
      101,
      "ninfa@galacticroster.com"
    );

    expect(employee.getName()).toEqual(
      expect.stringContaining("Ninfa Cadenhead")
    );
  });

  // getId()
  // 3. Employee constructor should only accept valid id
  it("getID() should not accept invalid id in the constructor", () => {
    const id = "aaa";
    expect(function () {
      const employee = new Employee(
        "Ninfa Cadenhead",
        id,
        "ninfa@galacticroster.com"
      );
    }).toThrow(InvalidIdError);
  });

  // 4. I should get the id that I set in the constructor
  test("getId() should return the id that was set in the constructor", () => {
    const id = 101;
    const employee = new Employee(
      "Ninfa Cadenhead",
      id,
      "ninfa@galacticroster.com"
    );
    const result = employee.getId();
    expect(result).toBe(id);
  });

  // getEmail()
  // 5. Employee constructor should only accept valid email
  it("getEmail() should not accept invalid email in the constructor", () => {
    const email = "aaa";
    expect(function () {
      const employee = new Employee("Ninfa Cadenhead", 101, email);
    }).toThrow(InvalidEmailError);
  });

  // 6. I should get the email that I set in the constructor
  test("getEmail() should return the email that was set in the constructor", () => {
    const email = "ninfa@galacticroster.com";
    const employee = new Employee("Ninfa Cadenhead", 101, email);
    const result = employee.getEmail();
    expect(result).toBe(email);
  });

  // getRole()
  // 7. I should get the role that I set in the constructor
  test("getRole() should return 'Employee' for Employee class", () => {
    const employee = new Employee(
      "Ninfa Cadenhead",
      101,
      "ninfa@galacticroster.com"
    );
    expect(employee.getRole()).toEqual(expect.stringContaining("Employee"));
  });
});
