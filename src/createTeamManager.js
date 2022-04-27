//require packages
const inquirer = require("inquirer");

//require local modules
const requiredQuestions = require("./requiredQuestions");
const addTeamMembers = require("./addTeamMembers");

//classes
const teamManager = require("../lib/team-manager");

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
    .then(({ mgrName, mgrEmployeeId, mgrEmail, mgrOfficeNo }) => {
      let newTeamManager = new teamManager(mgrName, mgrEmployeeId, mgrEmail, mgrOfficeNo);
      teamOnRoster.push(newTeamManager);
      addTeamMembers();
    });
};

module.exports = createTeamManager;