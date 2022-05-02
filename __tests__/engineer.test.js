const Engineer = require("../lib/engineer");
const InvalidEmailError = require("../exception/InvalidEmailError");
const InvalidIdError = require("../exception/InvalidIdError");
const InvalidGitHubUsernameError = require("../exception/InvalidGitHubUsernameError");

//1. Engineer class
describe("Engineer Test", () => {
  // Engineer should be a class
  test("if Engineer is a class", () => {
    const newEngineer = new Engineer(
      "Hank Sreaves",
      999,
      "hank@galacticroster.com",
      "fabpot"
    );
    expect(newEngineer).toBeInstanceOf(Object);
    expect(newEngineer).toBeInstanceOf(Engineer);
  });

  // 2. getName()
  // TeamManager constructor should return name
  test("getName() should return name string", () => {
    const engineer = new Engineer(
      "Hank Sreaves",
      999,
      "hank@galacticroster.com",
      "fabpot"
    );

    expect(engineer.getName()).toEqual(expect.stringContaining("Hank Sreaves"));
  });

  // getId()
  // 3. Engineer constructor should only accept valid id
  it("getID() should not accept invalid id in the constructor", () => {
    const id = "aaa";
    expect(function () {
      const engineer = new Engineer(
        "Hank Sreaves",
        id,
        "hank@galacticroster.com",
        "Hank Sreaves"
      );
    }).toThrow(InvalidIdError);
  });

  // 4. I should get the id that I set in the constructor
  test("getId() should return the id that was set in the constructor", () => {
    const id = 999;
    const engineer = new Engineer(
      "Hank Sreaves",
      id,
      "hank@galacticroster.com",
      "fabpot"
    );
    const result = engineer.getId();
    expect(result).toBe(id);
  });

  // getEmail()
  // 5. Engineer constructor should only accept valid email
  it("getEmail() should not accept invalid email in the constructor", () => {
    const email = "aaa";
    expect(function () {
      const engineer = new Engineer("Hank Sreaves", 999, email, "fabpot");
    }).toThrow(InvalidEmailError);
  });

  // 6. I should get the email that I set in the constructor
  test("getEmail() should return the email that was set in the constructor", () => {
    const email = "hank@galacticroster.com";
    const engineer = new Engineer("Hank Sreaves", 999, email, "fabpot");
    const result = engineer.getEmail();
    expect(result).toBe(email);
  });

  // getRole()
  // 7. I should get the role that I set in the constructor
  test("getRole() should return 'Engineer' for Engineer class", () => {
    const engineer = new Engineer(
      "Hank Sreaves",
      999,
      "hank@galacticroster.com",
      "fabpot"
    );
    expect(engineer.getRole()).toEqual(expect.stringContaining("Engineer"));
  });

  // 8. Engineer constructor should only accept valid github username
  it("getGitHub() should not accept invalid github username in the constructor", () => {
    const gitHub = "fab - pot";
    expect(function () {
      const engineer = new Engineer(
        "Hank Sreaves",
        999,
        "hank@galacticroster.com",
        gitHub
      );
    }).toThrow(InvalidGitHubUsernameError);
  });

  // 9. I should get the gitHub username that I set in the constructor
  test("getGitHub() should return the GitHub username that was set in the constructor", () => {
    const gitHub = "fabpot";
    const engineer = new Engineer(
      "Hank Sreaves",
      999,
      "hank@galacticroster.com",
      gitHub
    );
    const result = engineer.getGitHub();
    expect(result).toBe(gitHub);
  });
});
