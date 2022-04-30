const InvalidEmailError = require('../exception/InvalidEmailError');
const Employee = require('../lib/employee');

describe("Employee Test", () => {


  // Employee should be a classs
  test('if Employee is a class', () => {
    const abc = new  Employee('helen', 1, 'aa@aa.com');

    expect(abc).toBeInstanceOf(Object);
    expect(abc).toBeInstanceOf(Employee);
  })
  
  // Constructor should take in 3 args

  it("should not take in invalid email in the constructor", () => {

    const email = 'aaa';

    expect(function(){
      const employee = new Employee('helen', 1, email);
    }).toThrow(InvalidEmailError)

  });
  
  // getEmail()
  // i should get the email that i set in the constructor
  test("getEmail() should return the email that was set in the constructor", () => {
    // define the source of truth
    const email = 'heln@helen.com'
    // set up the env
    const employee = new Employee('helen', 1, email);


    // exe the code
    const result = employee.getEmail();

    // compare (assert)
    expect(result).toBe(email);

  });
  
  // get Id
  // i should get the id that i set in the constructor
  
  // getName()
  // i should get the name that i set in the constructor


})


