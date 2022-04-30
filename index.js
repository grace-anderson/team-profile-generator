//prompts to collect data from user

//require packages
const inquirer = require("inquirer");
const fs = require("fs");

//require local modules
const requiredQuestions = require("./src/requiredQuestions");
const createHTML = require("./src/createHTML");
const { validateEmail } = require("./src/validate");
const { validateNo } = require("./src/validate");
const { validateGitHub } = require("./src/validate");

//import sub-classes
const TeamManager = require("./lib/teamManager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

//count to enforce entry of one team manager only
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

  teamManagerQuestions() {
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
          validate: validateNo,
        },
        {
          type: "input",
          name: "email",
          message: `What is the team manager's email address? (Valid email required)`,
          validate: validateEmail,
        },
        {
          type: "input",
          name: "officeNumber",
          message: `What is the team manager's office number? (Required, numbers only)`,
          validate: validateNo,
        },
      ])
      // Push new team manager onto teamRoster array
      .then((answers) => {
        let newTeamManager = new TeamManager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );
        this.teamRoster.push(newTeamManager);
        // Sends user to menu to select engineer or intern
        this.questions();
      });
  }

  questions() {
    inquirer
      .prompt({
        type: "list",
        name: "employeeType",
        message:
          "Choose one employee type to add or select Exit to generate roster.",
        choices: ["Engineer", "Intern", "Exit"],
      })
      .then((choice) => {
        if (choice.employeeType === "Engineer") {
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
                validate: validateNo,
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
                validate: validateGitHub,
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
                message: `What is the intern's employee ID? (Required, numbers only)`,
                validate: validateNo,
              },
              {
                type: "input",
                name: "email",
                message: `What is the intern's email address? (Valid email required)`,
                validate: validateEmail,
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
        } else {
          const html = createHTML(this.getTeamRoster());
          new Promise((res, rej) => {
            fs.writeFile("./dist/index.html", html, (err) => {
              if (err) {
                rej(err);
                return;
              }
              res({
                ok: true,
                message: console.log(
                  `Team roster created. Go to dist/index.html to view.`
                ),
              });
            });
          });
        }
      });
  }
}

const prompt = new Prompt();
prompt.teamManagerQuestions();
