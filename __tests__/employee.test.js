const Employee = require("../lib/employee");
const InvalidEmailError = require("../exception/InvalidEmailError");
const InvalidIdError = require("../exception/InvalidIdError");

//1. Employee class
describe("Employee Test", () => {
  // Employee should be a class
  test("if Employee is a class", () => {
    const abc = new Employee("helen", 1, "aa@aa.com");

    expect(abc).toBeInstanceOf(Object);
    expect(abc).toBeInstanceOf(Employee);
  });

  // 2. getName()
  // Employee constructor should return name
  test("getName() should return name string", () => {
    const employee = new Employee("Helen Anderson", "9876", "helen@me.com");

    expect(employee.getName()).toEqual(expect.stringContaining("Helen Anderson"));
  });

  // getId()
  // 3. Employee constructor should only accept valid id
  it("getID() should not accept invalid id in the constructor", () => {
    const id = "aaa";

    expect(function () {
      const employee = new Employee("helen", id, "helen@helen.com");
    }).toThrow(InvalidIdError);
  });

  // 4. I should get the id that I set in the constructor
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

  // getEmail()
  // 5. Employee constructor should only accept valid email
  it("getEmail() should not accept invalid email in the constructor", () => {
    const email = "aaa";

    expect(function () {
      const employee = new Employee("helen", 1, email);
    }).toThrow(InvalidEmailError);
  });

  // 6. I should get the email that I set in the constructor
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

  // getRole()
  // 7. I should get the role that I set in the constructor
  test("getRole() should return 'Employee' for Employee class", () => {
    const employee = new Employee("Helen Anderson", "9876", "helen@me.com");

    expect(employee.getRole()).toEqual(expect.stringContaining("Employee"));
  });
});
