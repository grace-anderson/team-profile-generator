//require packages
const inquirer = require("inquirer");

const requiredQuestions = require("./requiredQuestions");
const addTeamMembers = require("./addTeamMembers");
const engineer = require("../lib/engineer");

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
      let newEngineer = new engineer(engName, engEmployeeId, engEmail, github);
      teamOnRoster.push(newEngineer);
      addTeamMembers();
    });
  };

  module.exports = createEngineer;