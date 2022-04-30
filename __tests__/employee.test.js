const Employee = require("../lib/employee");
const InvalidEmailError = require("../exception/InvalidEmailError");
const InvalidIdError = require("../exception/InvalidIdError");

describe("Employee Test", () => {
  // Employee should be a class
  test("if Employee is a class", () => {
    const abc = new Employee("helen", 1, "aa@aa.com");

    expect(abc).toBeInstanceOf(Object);
    expect(abc).toBeInstanceOf(Employee);
  });

  // getRole()
  // Employee constructor should set role as "employee"
  test(`getRole() should return "Employee" for Employee class, when role not overridden by sub-class role`, () => {
    const employee = new Employee("Helen Anderson", "9876", "helen@me.com");

    expect(employee.getRole()).toEqual(expect.stringContaining("Employee"));
  });

  // getId()
  // Employee constructor should only accept valid id
  it("should not accept invalid id in the constructor", () => {
    const id = "aaa";

    expect(function () {
      const employee = new Employee("helen", id, "helen@helen.com");
    }).toThrow(InvalidIdError);
  });

  // I should get the id that I set in the constructor
  test("getId() should return the id that was set in the constructor", () => {
    // define id source of truth
    const id = 123;
    // set up the environment to test
    const employee = new Employee("helen", id, "helen@helen.com");
    // execute the test code
    const result = employee.getId();
    // compare result to constructor requirements (assert)
    expect(result).toBe(id);
  });

  // getName()
  // i should get the name that i set in the constructor

  // getEmail()
  // Employee constructor should only accept valid email
  it("should not accept invalid email in the constructor", () => {
    const email = "aaa";

    expect(function () {
      const employee = new Employee("helen", 1, email);
    }).toThrow(InvalidEmailError);
  });

  // I should get the email that I set in the constructor
  test("getEmail() should return the email that was set in the constructor", () => {
    // define email source of truth
    const email = "helen@helen.com";
    // set up the environment to test
    const employee = new Employee("helen", 1, email);
    // execute the test code
    const result = employee.getEmail();
    // compare result to constructor requirements (assert)
    expect(result).toBe(email);
  });
});
