//require packages
const inquirer = require("inquirer");

//require local modules
const createEngineer = require("./createEngineer");
const createIntern = require("./createIntern");

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
        console.log(`\n -----teamOnRoster array----- \n`)
        console.log(teamOnRoster)
      }
    })
}

module.exports = addTeamMembers;