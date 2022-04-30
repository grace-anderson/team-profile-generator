const Employee = require("./Employee");

const { validateGitHub } = require("../src/validate");
const InvalidGitHubUsernameError = require("../exception/InvalidGitHubUsernameError");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
   
    this.gitHub = gitHub;

    // ensure gitHub username is valid
    const ifGitHubUsernameValid = validateGitHub(gitHub);

    if (!ifGitHubUsernameValid) {
      throw new InvalidGitHubUsernameError();
    }

    //role override
    this.role = 'Engineer';
  }

  getRole() {
    return this.role;
  }
  
  getGitHub() {
    return this.gitHub;
  }

}

module.exports = Engineer;
