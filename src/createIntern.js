//require packages
const inquirer = require("inquirer");

const requiredQuestions = require("./requiredQuestions");
const addTeamMembers = require("./addTeamMembers");
const intern = require("../lib/intern");

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
      let newIntern = new intern(internName, internEmployeeId, internEmail, internSchool);
      teamOnRoster.push(newIntern);
      addTeamMembers();
    });
  };

  module.exports = createIntern;