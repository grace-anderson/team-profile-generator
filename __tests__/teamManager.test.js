const TeamManager = require("../lib/TeamManager");
const InvalidEmailError = require("../exception/InvalidEmailError");
const InvalidIdError = require("../exception/InvalidIdError");
const InvalidOfficeNumberError = require("../exception/InvalidOfficeNumberError");

//1. TeamManager class
describe("TeamManager Test", () => {
  // TeamManager should be a class
  test("if Team Manager is a class", () => {
    const newTeamManager = new TeamManager(
      "Ninfa Cadenhead",
      101,
      "ninfa@galacticroster.com",
      12345
    );
    expect(newTeamManager).toBeInstanceOf(Object);
    expect(newTeamManager).toBeInstanceOf(TeamManager);
  });

  // 2. getName()
  // TeamManager constructor should return name
  test("getName() should return name string", () => {
    const teamManager = new TeamManager(
      "Ninfa Cadenhead",
      101,
      "ninfa@galacticroster.com",
      12345
    );
    expect(teamManager.getName()).toEqual(
      expect.stringContaining("Ninfa Cadenhead")
    );
  });

  // getId()
  // 3. TeamManager constructor should only accept valid id
  it("getID() should not accept invalid id in the constructor", () => {
    const id = "aaa";
    expect(function () {
      const teamManager = new TeamManager(
        "Ninfa Cadenhead",
        id,
        "ninfa@galacticroster.com",
        12345
      );
    }).toThrow(InvalidIdError);
  });

  // 4. I should get the id that I set in the constructor
  test("getId() should return the id that was set in the constructor", () => {
    const id = 101;
    const teamManager = new TeamManager(
      "Ninfa Cadenhead",
      id,
      "ninfa@galacticroster.com",
      12345
    );
    const result = teamManager.getId();
    expect(result).toBe(id);
  });

  // getEmail()
  // 5. Employee constructor should only accept valid email
  it("getEmail() should not accept invalid email in the constructor", () => {
    const email = "aaa";

    expect(function () {
      const teamManager = new TeamManager("Ninfa Cadenhead", 101, email, 12345);
    }).toThrow(InvalidEmailError);
  });

  // 6. I should get the email that I set in the constructor
  test("getEmail() should return the email that was set in the constructor", () => {
    const email = "ninfa@galacticroster.com";
    const teamManager = new TeamManager("Ninfa Cadenhead", 101, email, 12345);
    const result = teamManager.getEmail();
    expect(result).toBe(email);
  });

  // getRole()
  // 7. I should get the role that I set in the constructor
  test("getRole() should return 'Team Manager' for TeamManager class", () => {
    const teamManager = new TeamManager(
      "Ninfa Cadenhead",
      101,
      "ninfa@galacticroster.com",
      12345
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
        "Ninfa Cadenhead",
        101,
        "ninfa@galacticroster.com",
        officeNumber
      );
    }).toThrow(InvalidOfficeNumberError);
  });

  // 9. I should get the office number that I set in the constructor
  test("getOfficeNumber() should return the officeNumber that was set in the constructor", () => {
    const officeNumber = 12345;
    const teamManager = new TeamManager(
      "Ninfa Cadenhead",
      101,
      "ninfa@galacticroster.com",
      officeNumber
    );
    const result = teamManager.getOfficeNumber();
    expect(result).toBe(officeNumber);
  });
});
