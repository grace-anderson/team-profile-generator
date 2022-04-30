const Intern = require("../lib/intern");
const InvalidEmailError = require("../exception/InvalidEmailError");
const InvalidIdError = require("../exception/InvalidIdError");

//1. Intern class
describe("Intern Test", () => {
  // Intern should be a class
  test("if Intern is a class", () => {
    const abc = new Intern("helen", 1, "aa@aa.com", "University of Sydney");

    expect(abc).toBeInstanceOf(Object);
    expect(abc).toBeInstanceOf(Intern);
  });

  // 2. getName()
  // Intern constructor should return name
  test("getName() should return name string", () => {
    const intern = new Intern(
      "Helen Anderson",
      "9876",
      "helen@me.com",
      "University of Sydney"
    );

    expect(intern.getName()).toEqual(expect.stringContaining("Helen Anderson"));
  });

  // getId()
  // 3. Intern constructor should only accept valid id
  it("getID() should not accept invalid id in the constructor", () => {
    const id = "aaa";

    expect(function () {
      const intern = new Intern(
        "helen",
        id,
        "helen@helen.com",
        "University of Sydney"
      );
    }).toThrow(InvalidIdError);
  });

  // 4. I should get the id that I set in the constructor
  test("getId() should return the id that was set in the constructor", () => {
    // define id source of truth
    const id = 123;
    // set up the environment to test
    const intern = new Intern(
      "helen",
      id,
      "helen@helen.com",
      "University of Sydney"
    );
    // execute the test code
    const result = intern.getId();
    // compare result to constructor requirements (assert)
    expect(result).toBe(id);
  });

  // getEmail()
  // 5. Intern constructor should only accept valid email
  it("getEmail() should not accept invalid email in the constructor", () => {
    const email = "aaa";

    expect(function () {
      const intern = new Intern("helen", 1, email, "University of Sydney");
    }).toThrow(InvalidEmailError);
  });

  // 6. I should get the email that I set in the constructor
  test("getEmail() should return the email that was set in the constructor", () => {
    // define email source of truth
    const email = "helen@helen.com";
    // set up the environment to test
    const intern = new Intern("helen", 1, email, "University of Sydney");
    // execute the test code
    const result = intern.getEmail();
    // compare result to constructor requirements (assert)
    expect(result).toBe(email);
  });

  // getRole()
  // 7. I should get the role that I set in the constructor
  test("getRole() should return 'Intern' for Intern class", () => {
    const intern = new Intern(
      "Helen Anderson",
      "9876",
      "helen@me.com",
      "University of Sydney"
    );

    expect(intern.getRole()).toEqual(expect.stringContaining("Intern"));
  });

  // getSchool()
  // 8. I should get the school that I set in the constructor
  test("getSchool() should return school string", () => {
    const intern = new Intern(
      "Helen Anderson",
      "9876",
      "helen@me.com",
      "University of Sydney"
    );

    expect(intern.getSchool()).toEqual(
      expect.stringContaining("University of Sydney")
    );
  });
});
