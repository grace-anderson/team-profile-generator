//prompts to collect data from user

//require packages
const inquirer = require("inquirer");
const fs = require("fs");

//require local modules
const requiredQuestions = require("./src/requiredQuestions");
const createHtml = require("./src/createHtml");

//import sub-classes
const teamManager = require("./lib/team-manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

//array collects all the new instances of each sub-class created by user
const teamOnRoster = [];

// After teamManager triggered by init, addTeamMembers function called to handle repeated selection of engineer or intern until Finish selected by user (which will trigger creation of html file)
const addTeamMembers = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "nextEntry",
        message:
          "Select to add engineer or an intern or finish to finish building the team roster",
        choices: ["Engineer", "Intern", "Finish"],
      },
    ])
    .then((selected) => {
      if (selected.nextEntry === "Engineer") {
        createEngineer();
      } else if (selected.nextEntry === "Intern") {
        createIntern();
      } else {
        //triggers creation of html file
        console.log(`TODO - create html file`);
        console.log(`\n -----teamOnRoster array----- \n`);
        console.log(teamOnRoster);
        console.log(`\n -----teamOnRoster parsed to JSON----- \n`);
        const teamJSONString = JSON.stringify(teamOnRoster);

        const parsedTeamOnRoster = JSON.parse(teamJSONString);
        console.log(parsedTeamOnRoster);

        console.log(`\n -----teamOnRoster parsed to JSON----- \n`);
        fs.writeFileSync("./team.json", JSON.stringify(teamOnRoster));

        const teamJsonFile = JSON.parse(fs.readFileSync("./team.json", "utf8"));
        console.log("Team file", teamJsonFile);
        //create html file

        // fs.writeFileSync("./dist/index.html", createHtml(teamJsonFile));
        // console.log(`\n -----teamOnRoster write JSON file----- \n`);
        // fs.writeFile('file.json', teamJSONString);
        //TODO - use below when generating html file
        // questions()
        //   .then((answers) => fs.writeFileSync(`README.md`, generateMarkdown(answers)))
        //   .then(() => console.log("Successfully created README.md"))
        //   .catch((err) => console.error(err));
      }
    });
};

//first create team manager, at end calls addTeamMembers for user to select engineer, intern or finish
const createTeamManager = () => {
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
        name: "employeeId",
        message: `What is the team manager's employee ID? (Required, numbers only)`,
        validate: (employeeId) => {
          const numberRegex = /^\d+$/;
          if (employeeId) {
            if (employeeId.match(numberRegex)) {
              return true;
            } else {
              console.log(
                `: ${employeeId} is an invalid employee ID. The employee ID should contain numbers only`
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
        message: `What is the team manager's email address? (Valid email required)`,
        validate: (emailInput) => {
          const validRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if (emailInput) {
            if (emailInput.match(validRegex)) {
              return true;
            } else {
              console.log(`: ${emailInput} is an invalid email address!`);
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
        name: "officeNo",
        message: `What is the team manager's office number? (Required, numbers only)`,
        validate: (mgrOfficeNo) => {
          const numberRegex = /^\d+$/;
          if (mgrOfficeNo) {
            if (mgrOfficeNo.match(numberRegex)) {
              return true;
            } else {
              console.log(
                `: ${mgrOfficeNo} is an invalid office number. The office number should contain numbers only`
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
    .then(({ name, employeeId, email, officeNo }) => {
      let newTeamManager = new teamManager(name, employeeId, email, officeNo);
      teamOnRoster.push(newTeamManager);
      addTeamMembers();
    });
};

const createEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `What is the engineer's name? (Required)`,
        validate: requiredQuestions("Engineer's name is required"),
      },
      {
        type: "input",
        name: "employeeId",
        message: `What is the engineer's employee ID? (Required, numbers only)`,
        validate: (employeeId) => {
          const numberRegex = /^\d+$/;
          if (employeeId) {
            if (employeeId.match(numberRegex)) {
              return true;
            } else {
              console.log(
                `: ${employeeId} is an invalid employee ID. The employee ID should contain numbers only`
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
        validate: (emailInput) => {
          const validRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if (emailInput) {
            if (emailInput.match(validRegex)) {
              return true;
            } else {
              console.log(`: ${emailInput} is an invalid email address!`);
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
        name: "github",
        message: `What is the engineer's Github username? (Required)`,
        validate: requiredQuestions("Github username is required"),
      },
    ])
    .then(({ name, employeeId, email, github }) => {
      let newEngineer = new engineer(name, employeeId, email, github);
      teamOnRoster.push(newEngineer);
      addTeamMembers();
    });
};

const createIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `What is the intern's name? (Required)`,
        validate: requiredQuestions("Intern's name is required"),
      },
      {
        type: "input",
        name: "employeeId",
        message: `What is the intern's employee ID? (Required, numbers only)`,
        validate: (employeeId) => {
          const numberRegex = /^\d+$/;
          if (employeeId) {
            if (employeeId.match(numberRegex)) {
              return true;
            } else {
              console.log(
                `: ${employeeId} is an invalid employee ID. The employee ID should contain numbers only`
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
              console.log(`: ${emailInput} is an invalid email address!`);
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
    ])
    .then(({ name, employeeId, email, school }) => {
      let newIntern = new intern(name, employeeId, email, school);
      teamOnRoster.push(newIntern);
      addTeamMembers();
    });
};

// initialize app, which calls createTeamManager
const init = () => {
  createTeamManager();
};

// kick off (initialize) app
init();
