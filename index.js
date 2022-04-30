//prompts to collect data from user

//require packages
const inquirer = require("inquirer");
const fs = require("fs");

//require local modules
const requiredQuestions = require("./src/requiredQuestions");
const createHTML = require("./src/createHTML");

//import sub-classes
const TeamManager = require("./lib/TeamManager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const { validateEmail } = require("./src/validate");
const { validateId } = require("./src/validate");

//count to enforce entry of only one team manager
let count = 0;

// Prompt class collects questions and pushes them onto teamRoster array
class Prompt {
  constructor() {
    this.teamRoster = [];
  }

  /**
   * @returns array
   */

  getTeamRoster() {
    return this.teamRoster;
  }

  questions() {
    inquirer
      .prompt({
        type: "list",
        name: "employeeType",
        message:
          "Choose one employee type to add or select Exit to generate roster.",
        choices: ["Team Manager", "Engineer", "Intern", "Exit"],
      })
      .then((choice) => {
        if (choice.employeeType === "Team Manager" && count == 0) {
          //add one to count
          count++;
          inquirer
            .prompt([
              {
                type: "input",
                name: "name",
                message: `What is the team manager's name? (Required)`,
                validate: requiredQuestions("Team manager's name is required"),
              },
              {
                type: "input",
                name: "id",
                message: `What is the team manager's employee ID? (Required, numbers only)`,
                validate: validateId,
              },
              {
                type: "input",
                name: "email",
                message: `What is the team manager's email address? (Valid email required)`,
                validate: (emailInput) => {
                  const validRegex =
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                  if (emailInput) {
                    if (emailInput.match(validRegex)) {
                      return true;
                    } else {
                      console.log(
                        `: ${emailInput} is an invalid email address!`
                      );
                      return false;
                    }
                  } else {
                    console.log("Email address is required");
                    return false;
                  }
                },
              },
              {
                type: "input",
                name: "officeNumber",
                message: `What is the team manager's office number? (Required, numbers only)`,
                validate: (officeNumber) => {
                  const numberRegex = /^\d+$/;
                  if (officeNumber) {
                    if (officeNumber.match(numberRegex)) {
                      return true;
                    } else {
                      console.log(
                        `: ${officeNumber} is an invalid office number. The office number should contain numbers only`
                      );
                      return false;
                    }
                  } else {
                    console.log("Team manager's office number is required");
                    return false;
                  }
                },
              },
            ])
            // Push new team manager onto teamRoster array
            .then((answers) => {
              let newTeamManager = new TeamManager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber,
              );
              this.teamRoster.push(newTeamManager);
              // Sends user back to menu
              this.questions();
            });
        } else if (choice.employeeType === "Team Manager" && count > 0) {
          console.log(
            "One team manager only is required. Select Engineer or Intern"
          );
          this.questions();
        } else if (choice.employeeType === "Engineer") {
          inquirer
            .prompt([
              {
                type: "input",
                name: "name",
                message: `What is the engineer's name? (Required)`,
                validate: requiredQuestions("Engineer's name is required"),
              },
              {
                type: "input",
                name: "id",
                message: `What is the engineer's employee ID? (Required, numbers only)`,
                validate: (id) => {
                  const numberRegex = /^\d+$/;
                  if (id) {
                    if (id.match(numberRegex)) {
                      return true;
                    } else {
                      console.log(
                        `: ${id} is an invalid employee ID. The employee ID should contain numbers only`
                      );
                      return false;
                    }
                  } else {
                    console.log("Employee ID is required");
                    return false;
                  }
                },
              },
              {
                type: "input",
                name: "email",
                message: `What is the engineers's email address? (Valid email required)`,
                validate: validateEmail,
              },
              {
                type: "input",
                name: "github",
                message: `What is the engineer's GitHub username?`,
                validate: (githubInput) => {
                  const githubRegex =
                    /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

                  if (githubInput) {
                    if (githubInput.match(githubRegex)) {
                      return true;
                    } else {
                      console.log(
                        `: ${githubInput} is an invalid GitHub username!`
                      );
                      return false;
                    }
                  } else {
                    console.log("GitHub username is required");
                    return false;
                  }
                },
              },
              // Pushes new engineer onto teamRoster array
            ])
            .then((answers) => {
              const newEngineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github
              );
              this.teamRoster.push(newEngineer);
              // Sends user back to menu
              this.questions();
            });
        } else if (choice.employeeType === "Intern") {
          inquirer
            .prompt([
              {
                type: "input",
                name: "name",
                message: `What is the intern's name? (Required)`,
                validate: requiredQuestions("Intern's name is required"),
              },
              {
                type: "input",
                name: "id",
                message: "Please enter the intern's employee id",
                type: "input",
                name: "id",
                message: `What is the intern's employee ID? (Required, numbers only)`,
                validate: (id) => {
                  const numberRegex = /^\d+$/;
                  if (id) {
                    if (id.match(numberRegex)) {
                      return true;
                    } else {
                      console.log(
                        `: ${id} is an invalid employee ID. The employee ID should contain numbers only`
                      );
                      return false;
                    }
                  } else {
                    console.log("Employee ID is required");
                    return false;
                  }
                },
              },
              {
                type: "input",
                name: "email",
                message: `What is the intern's email address? (Valid email required)`,
                validate: (emailInput) => {
                  const validRegex =
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                  if (emailInput) {
                    if (emailInput.match(validRegex)) {
                      return true;
                    } else {
                      console.log(
                        `: ${emailInput} is an invalid email address!`
                      );
                      return false;
                    }
                  } else {
                    console.log("Email address is required");
                    return false;
                  }
                },
              },
              {
                type: "input",
                name: "school",
                message: `What is the intern's school (Required)`,
                validate: requiredQuestions("Intern's school is required"),
              },
              // Push new intern onto teamRoster array
            ])
            .then((answers) => {
              const newIntern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
              );
              this.teamRoster.push(newIntern);
              // Sends user back to menu
              this.questions();
            });
        } else if (choice.employeeType === "Exit") {
          if (count === 0) {
            console.log(
              "One team manager is required. Select Team Manager to add"
            );
            this.questions();
          } else {
            //write html
            const html = createHTML(this.getTeamRoster());
            fs.writeFile("./dist/index.html", html, (err) => {
              if (err) throw new Error(err);
              console.log("index.html created");
            });
          }
        }
      });
  }
}

const prompt = new Prompt();
prompt.questions();
