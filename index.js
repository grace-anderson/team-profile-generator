//prompts to collect data from user

//require packages needed for applicationn
const inquirer = require("inquirer");
const fs = require("fs");

//require local modules
const requiredQuestions = require("./src/requiredQuestions");
// const createTeamManager = require("./src/createTeamManager");
const teamManager = require("./lib/team-manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

//array collects all the new instances of each sub-class created by user
const teamOnRoster = [];

//After teamManager triggered by init, addTeamMembers function called once teamManager then by engineer and intern to handle repeated selection of engineer or intern until Finish selected by user (which will trigger creation of html file)
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
    ]).then((selected) => {
      if (selected.nextEntry === "Engineer") {
        createEngineer();
      } else if (selected.nextEntry === "Intern") {
        createIntern();
      } else {
        //triggers creation of html file
        console.log(`TODO - create html file`)
      }
    })
}

const createTeamManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "mgrName",
        message: `What is the team manager's name? (Required)`,
        validate: requiredQuestions("Team manager's name is required"),
      },
      {
        type: "input",
        name: "mgrEmployeeId",
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
        name: "mgrEmail",
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
        name: "mgrOfficeNo",
        message: `What is the team manager's office number? (Required, numbers only)`,
        validate: (mgrOfficeNo) => {
          const numberRegex = /^\d+$/;
          if (mgrOfficeNo) {
            if (mgrOfficeNo.match(numberRegex)) {
              return true;
            } else {
              console.log(
                `: ${mgrOfficeNo} is an invalid employee ID. The office number should contain numbers only`
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
    .then(({ mgrName, mgrEmployeeId, mgrEmail, mgrOfficeNo }) => {
      const newTeamManager = new teamManager(mgrName, mgrEmployeeId, mgrEmail, mgrOfficeNo);
      teamOnRoster.push(newTeamManager);
      addTeamMembers();
    });
};


const createEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "engName",
      message: `What is the engineer's name? (Required)`,
      validate: requiredQuestions("Engineer's name is required"),
    },
    {
      type: "input",
      name: "engEmployeeId",
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
      name: "engEmail",
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
  .then(({ engName, engEmployeeId, engEmail, github }) => {
    const newEngineer = new engineer(engName, engEmployeeId, engEmail, github);
    teamOnRoster.push(newEngineer);
    addTeamMembers();
  });
};

const createIntern = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: `What is the intern's name? (Required)`,
      validate: requiredQuestions("Intern's name is required"),
    },
    {
      type: "input",
      name: "internEmployeeId",
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
      name: "internEmail",
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
      name: "internSchool",
      message: `What is the intern's school (Required)`,
      validate: requiredQuestions("Intern's school is required"),
    },
  ])
  .then(({ internName, internEmployeeId, internEmail, internSchool }) => {
    const newIntern = new intern(internName, internEmployeeId, internEmail, internSchool);
    teamOnRoster.push(newIntern);
    addTeamMembers();
  });
};

// initialize app, which calls createTeamManager
const init = () => {
  createTeamManager();
  // questions()
  //   .then((answers) => fs.writeFileSync(`README.md`, generateMarkdown(answers)))
  //   .then(() => console.log("Successfully created README.md"))
  //   .catch((err) => console.error(err));
};

// kick off (initialize) app
init();
