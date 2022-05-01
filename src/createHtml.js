// filter team array by each role, push filtered role onto cards array.
// createEmployeeCards renders cards on html
const createEmployeeCards = (teamRoster) => {
  let cards = [];
  const teamManagerRole = teamRoster.filter((team) => {
    return team.getRole() === "Team Manager";
  });
  const engineerRole = teamRoster.filter((team) => {
    return team.getRole() === "Engineer";
  });
  const internRole = teamRoster.filter((team) => {
    return team.getRole() === "Intern";
  });
  if (teamManagerRole) {
    cards.push(createTeamManager(teamManagerRole));
  }
  if (engineerRole) {
    cards.push(createEngineer(engineerRole));
  }
  if (internRole) {
    cards.push(createIntern(internRole));
  }
  return cards.join("");
};

//create html card returning as each employee role
//which is rendered onto main page html by createEmployeeCards
const createTeamManager = (teamManagerRole) => {
  return teamManagerRole
    .map((teamManager) => {
      return `
      <div class="col d-flex justify-content-center pe-0 me-4 ps-0 ms-4">
        <div class="card shadow-lg mb-5" style="width: 18rem;">
          <div class="card-body pt-0 ps-0 pe-0">
            <div class="text-white bg-success px-4 pt-1 pb-2">
              <h2 class="card-title lh-base">${teamManager.getName()}</h2>
              <h4 class="card-title"><i class="bi bi-briefcase-fill"></i>  Team Manager</h4>
            </div>
            <ul class="list-group list-group-flush px-2">
              <li class="list-group-item">Id: ${teamManager.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:">${teamManager.getEmail()}</a></li>
              <li class="list-group-item">Office number: ${teamManager.getOfficeNumber()}</li>
            </ul>
          </div>
        </div>
      </div>`;
    })
    .join("");
};

const createEngineer = (engineerRole) => {
  return engineerRole
    .map((engineer) => {
      return `
      <div class="col d-flex justify-content-center pe-0 me-4 ps-0 ms-4">
        <div class="card shadow-lg mb-5" style="width: 18rem;">
          <div class="card-body pt-0 ps-0 pe-0">
            <div class="text-white bg-info px-4 pt-1 pb-2">
              <h2 class="card-title lh-base">${engineer.getName()}</h2>
              <h4 class="card-title"><i class="bi bi-gear-fill"></i>  Engineer</h4>
            </div>
            <ul class="list-group list-group-flush px-2">
              <li class="list-group-item">Id: ${engineer.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:">${engineer.getEmail()}</a></li>
              <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
            </ul>
          </div>
        </div>
      </div>`;
    })
    .join("");
};

const createIntern = (internRole) => {
  return internRole
    .map((intern) => {
      return `
      <div class="col d-flex justify-content-center pe-0 me-4 ps-0 ms-4">
        <div class="card shadow-lg mb-5" style="width: 18rem;">
          <div class="card-body pt-0 ps-0 pe-0">
            <div class="text-white bg-danger px-4 pt-1 pb-2">
              <h2 class="card-title lh-base">${intern.getName()}</h2>
              <h4 class="card-title"><i class="bi bi-book-fill"></i>  Intern</h4>
            </div>
            <ul class="list-group list-group-flush px-2">
              <li class="list-group-item">Id: ${intern.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:">${intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
          </div>
        </div>
      </div>`;
    })
    .join("");
};

//export card for use by createEmployeeCards to create
module.exports = (cards) => {
  return ` 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Roster</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
  </head>
  <body>
    <header class="container-fluid bg-primary py-1">
        <h1 class="display-3 text-center fw-bolder lh-lg text-white">TEAM ROSTER</h1>
    </header>
    <main class="container-fluid d-flex justify-content-center my-5">
      <div class="row ms-0 me-0">
          ${createEmployeeCards(cards)}
      </div>
    </main> 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  </body>
</html>
    `;
};