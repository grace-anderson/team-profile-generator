const Engineer = require("../lib/engineer");
const InvalidEmailError = require("../exception/InvalidEmailError");
const InvalidIdError = require("../exception/InvalidIdError");
const InvalidGitHubUsernameError = require("../exception/InvalidGitHubUsernameError");

//1. Engineer class
describe("Engineer Test", () => {
  // Engineer should be a class
  test("if Engineer is a class", () => {
    const abc = new Engineer("helen", 1, "aa@aa.com", "helen-github");

    expect(abc).toBeInstanceOf(Object);
    expect(abc).toBeInstanceOf(Engineer);
  });

  // 2. getName()
  // TeamManager constructor should return name
  test("getName() should return name string", () => {
    const engineer = new Engineer(
      "Helen Anderson",
      "9876",
      "helen@me.com",
      "helen-github"
    );

    expect(engineer.getName()).toEqual(
      expect.stringContaining("Helen Anderson")
    );
  });

  // getId()
  // 3. Engineer constructor should only accept valid id
  it("getID() should not accept invalid id in the constructor", () => {
    const id = "aaa";

    expect(function () {
      const engineer = new Engineer(
        "helen",
        id,
        "helen@helen.com",
        "helen-github"
      );
    }).toThrow(InvalidIdError);
  });

  // 4. I should get the id that I set in the constructor
  test("getId() should return the id that was set in the constructor", () => {
    // define id source of truth
    const id = 123;
    // set up the environment to test
    const engineer = new Engineer("helen", id, "helen@helen.com", "helen-github");
    // execute the test code
    const result = engineer.getId();
    // compare result to constructor requirements (assert)
    expect(result).toBe(id);
  });

  // getEmail()
  // 5. Engineer constructor should only accept valid email
  it("getEmail() should not accept invalid email in the constructor", () => {
    const email = "aaa";

    expect(function () {
      const engineer = new Engineer("helen", 1, email, "helen-github");
    }).toThrow(InvalidEmailError);
  });

  // 6. I should get the email that I set in the constructor
  test("getEmail() should return the email that was set in the constructor", () => {
    // define email source of truth
    const email = "helen@helen.com";
    // set up the environment to test
    const engineer = new Engineer("helen", 1, email, "helen-github");
    // execute the test code
    const result = engineer.getEmail();
    // compare result to constructor requirements (assert)
    expect(result).toBe(email);
  });

  // getRole()
  // 7. I should get the role that I set in the constructor
  test("getRole() should return 'Engineer' for Engineer class", () => {
    const engineer = new Engineer(
      "Helen Anderson",
      "9876",
      "helen@me.com",
      "helen-github"
    );

    expect(engineer.getRole()).toEqual(
      expect.stringContaining("Engineer")
    );
  });

  // 8. Engineer constructor should only accept valid github username
  it("getGitHub() should not accept invalid github username in the constructor", () => {
    const gitHub = "helen - github";

    expect(function () {
      const engineer = new Engineer(
        "helen",
        123,
        "helen@helen.com",
        gitHub
      );
    }).toThrow(InvalidGitHubUsernameError);
  });

  // 9. I should get the gitHub username that I set in the constructor
  test("getGitHub() should return the GitHub username that was set in the constructor", () => {
    // define id source of truth
    const gitHub = "helen-github";
    // set up the environment to test
    const engineer = new Engineer(
      "helen",
      987,
      "helen@helen.com",
      gitHub
    );
    // execute the test code
    const result = engineer.getGitHub();
    // compare result to constructor requirements (assert)
    expect(result).toBe(gitHub);
  });
});
