const Intern = require("../lib/intern");
const InvalidEmailError = require("../exception/InvalidEmailError");
const InvalidIdError = require("../exception/InvalidIdError");

//1. Intern class
describe("Intern Test", () => {
  // Intern should be a class
  test("if Intern is a class", () => {
    const newIntern = new Intern("France Bi", 222, "france@galacticroster.com", "Pomona College");

    expect(newIntern).toBeInstanceOf(Object);
    expect(newIntern).toBeInstanceOf(Intern);
  });

  // 2. getName()
  // Intern constructor should return name
  test("getName() should return name string", () => {
    const intern = new Intern(
      "France Bi",
      222,
      "france@galacticroster.com",
      "Pomona College"
    );

    expect(intern.getName()).toEqual(expect.stringContaining("France Bi"));
  });

  // getId()
  // 3. Intern constructor should only accept valid id
  it("getID() should not accept invalid id in the constructor", () => {
    const id = "aaa";

    expect(function () {
      const intern = new Intern(
        "France Bi",
        id,
        "france@galacticroster.com",
        "Pomona College"
      );
    }).toThrow(InvalidIdError);
  });

  // 4. I should get the id that I set in the constructor
  test("getId() should return the id that was set in the constructor", () => {
    // define id source of truth
    const id = 222;
    // set up the environment to test
    const intern = new Intern(
      "France Bi",
      id,
      "france@galacticroster.com",
      "Pomona College"
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
      const intern = new Intern("France Bi", 222, email, "Pomona College");
    }).toThrow(InvalidEmailError);
  });

  // 6. I should get the email that I set in the constructor
  test("getEmail() should return the email that was set in the constructor", () => {
    // define email source of truth
    const email = "france@galacticroster.com";
    // set up the environment to test
    const intern = new Intern("France Bi", 222, email, "Pomona College");
    // execute the test code
    const result = intern.getEmail();
    // compare result to constructor requirements (assert)
    expect(result).toBe(email);
  });

  // getRole()
  // 7. I should get the role that I set in the constructor
  test("getRole() should return 'Intern' for Intern class", () => {
    const intern = new Intern(
      "France Bi",
      222,
      "france@galacticroster.com",
      "Pomona College"
    );

    expect(intern.getRole()).toEqual(expect.stringContaining("Intern"));
  });

  // getSchool()
  // 8. I should get the school that I set in the constructor
  test("getSchool() should return school string", () => {
    const intern = new Intern(
      "France Bi",
      222,
      "france@galacticroster.com",
      "Pomona College"
    );

    expect(intern.getSchool()).toEqual(
      expect.stringContaining("Pomona College")
    );
  });
});
