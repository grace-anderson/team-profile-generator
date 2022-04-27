//prompts to collect data from user

//require packages needed for applicationn
const inquirer = require("inquirer");
const fs = require("fs");

//require local modules
const requiredQuestions = require("./src/requiredQuestions");
const { listenerCount } = require("process");

//array of questions for user input
const questions = () => {
  return inquirer.prompt([
    //team manager data input
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
    //end team manager input
    // choice to 1. enter engineer 2. enter intern 3. finish building team
    // need to work out how to return to this after engineer and intern complete data input
    {
      type: "list",
      name: "nextEntry",
      message:
        "Choose to enter an engineer or an intern or to finish building the team",
      choices: ["Engineer", "Intern", "Finish"],
    },
    //1. enter engineer
    {
      type: "input",
      name: "engName",
      message: `What is the engineer's name? (Required)`,
      when(answer) {
        return answer.nextEntry === "Engineer";
      },
      validate: requiredQuestions("Engineer's name is required"),
    },
    {
      type: "input",
      name: "engEmployeeId",
      message: `What is the engineer's employee ID? (Required, numbers only)`,
      when(answer) {
        return answer.nextEntry === "Engineer";
      },
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
      when(answer) {
        return answer.nextEntry === "Engineer";
      },
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
      when(answer) {
        return answer.nextEntry === "Engineer";
      },
      validate: requiredQuestions("Github username is required"),
    },
    /////end engineer
    
    //2. enter intern
    {
      type: "input",
      name: "internName",
      message: `What is the intern's name? (Required)`,
      when(answer) {
        return answer.nextEntry === "Intern";
      },
      validate: requiredQuestions("Intern's name is required"),
    },
    {
      type: "input",
      name: "internEmployeeId",
      message: `What is the intern's employee ID? (Required, numbers only)`,
      when(answer) {
        return answer.nextEntry === "Intern";
      },
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
      when(answer) {
        return answer.nextEntry === "Intern";
      },
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
      when(answer) {
        return answer.nextEntry === "Intern";
      },
      validate: requiredQuestions("Intern's school is required"),
    },
    /////end intern
  ]);
};

// initialize app, then use user input to write readme file
const init = () => {
  questions()
    .then((answers) => fs.writeFileSync(`README.md`, generateMarkdown(answers)))
    .then(() => console.log("Successfully created README.md"))
    .catch((err) => console.error(err));
};

// kick off (initialize) app
init();
