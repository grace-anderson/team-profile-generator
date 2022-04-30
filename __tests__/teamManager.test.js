const TeamManager = require("../lib/TeamManager");
const InvalidEmailError = require("../exception/InvalidEmailError");
const InvalidIdError = require("../exception/InvalidIdError");
const InvalidOfficeNumberError = require("../exception/InvalidOfficeNumberError");

//1. TeamManager class
describe("TeamManager Test", () => {
  // TeamManager should be a class
  test("if Team Manager is a class", () => {
    const abc = new TeamManager("helen", 1, "aa@aa.com", 999);

    expect(abc).toBeInstanceOf(Object);
    expect(abc).toBeInstanceOf(TeamManager);
  });

  // 2. getName()
  // TeamManager constructor should return name
  test("getName() should return name string", () => {
    const teamManager = new TeamManager(
      "Helen Anderson",
      "9876",
      "helen@me.com",
     999
    );

    expect(teamManager.getName()).toEqual(
      expect.stringContaining("Helen Anderson")
    );
  });

  // getId()
  // 3. TeamManager constructor should only accept valid id
  it("getID() should not accept invalid id in the constructor", () => {
    const id = "aaa";

    expect(function () {
      const teamManager = new TeamManager("helen", id, "helen@helen.com", 999);
    }).toThrow(InvalidIdError);
  });

  // 4. I should get the id that I set in the constructor
  test("getId() should return the id that was set in the constructor", () => {
    // define id source of truth
    const id = 123;
    // set up the environment to test
    const teamManager = new TeamManager("helen", id, "helen@helen.com", 999);
    // execute the test code
    const result = teamManager.getId();
    // compare result to constructor requirements (assert)
    expect(result).toBe(id);
  });

  // getEmail()
  // 5. Employee constructor should only accept valid email
  it("getEmail() should not accept invalid email in the constructor", () => {
    const email = "aaa";

    expect(function () {
      const teamManager = new TeamManager("helen", 1, email, 999);
    }).toThrow(InvalidEmailError);
  });

  // 6. I should get the email that I set in the constructor
  test("getEmail() should return the email that was set in the constructor", () => {
    // define email source of truth
    const email = "helen@helen.com";
    // set up the environment to test
    const teamManager = new TeamManager("helen", 1, email, 999);
    // execute the test code
    const result = teamManager.getEmail();
    // compare result to constructor requirements (assert)
    expect(result).toBe(email);
  });

  // getRole()
  // 7. I should get the role that I set in the constructor
  test("getRole() should return 'Team Manager' for TeamManager class", () => {
    const teamManager = new TeamManager(
      "Helen Anderson",
      "9876",
      "helen@me.com",
      999
    );

    expect(teamManager.getRole()).toEqual(
      expect.stringContaining("Team Manager")
    );
  });

  // 8. TeamManager constructor should only accept valid office number
  it("getOfficeNumber() should not accept invalid office number in the constructor", () => {
    const officeNumber = "aaa";

    expect(function () {
      const teamManager = new TeamManager(
        "helen",
        123,
        "helen@helen.com",
        officeNumber
      );
    }).toThrow(InvalidOfficeNumberError);
  });

  // 9. I should get the office number that I set in the constructor
  test("getOfficeNumber() should return the officeNumber that was set in the constructor", () => {
    // define id source of truth
    const officeNumber = 123;
    // set up the environment to test
    const teamManager = new TeamManager(
      "helen",
      987,
      "helen@helen.com",
      officeNumber
    );
    // execute the test code
    const result = teamManager.getOfficeNumber();
    // compare result to constructor requirements (assert)
    expect(result).toBe(officeNumber);
  });

});
