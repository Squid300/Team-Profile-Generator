const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const generateCards = function (employeeArray) {
  if (employeeArray.length > 0) {
    let cardHTML = ``;
    for (i = 0; i < employeeArray.length; i++) {
      let type = {name: '', response: ''}
      if (employeeArray[i] instanceof Manager) {
        type.name = 'Office';
        type.response = employeeArray[i].office;
      };
      if (employeeArray[i] instanceof Engineer) {
        type.name = 'Github';
        type.response = `<a href="https://www.github.com/${employeeArray[i].github}" target="_blank">${employeeArray[i].github}</a>`;
      };
      if (employeeArray[i] instanceof Intern) {
        type.name = 'School';
        type.response = employeeArray[i].school;
      };
      cardHTML += `
        <div class="card m-3" style="width: 18rem;">
          <div class="card-header">
            <h3>${employeeArray[i].name}</h3>
            <h4>${employeeArray[i].getRole()}</h4>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employeeArray[i].id}</li>
            <li class="list-group-item">Email: <a href="mailto:${employeeArray[i].email}">${employeeArray[i].email}</a></li>
            <li class="list-group-item">${type.name}: ${type.response}</li>
          </ul>
        </div>

      `
    }
    return cardHTML;
  }
};

const generateHTML = function (data) {
  const managerCard = generateCards(data.manager);
  const engineerCards = generateCards(data.engineers);
  const internCards = generateCards(data.interns);
  return `
  <!DOCTYPE html>

  <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Team Profile</title>
      <meta name="description" content="software dev team profile">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
      <link rel="stylesheet" href="./style.css">
    </head>
    <body>
      <header class="p-5 border rounded-3 bg-info">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">${data.teamName}</h1>
          <h3 class="display-7 fw-bold">Team Profile</h3>
        </div>
      </header>

      <section class="mt-3">
        <div class="d-flex flex-wrap justify-content-center">
          ${managerCard}
        </div>
        <div class="d-flex flex-wrap justify-content-center">
          ${engineerCards}
        </div>
        <div class="d-flex flex-wrap justify-content-center">
          ${internCards}
        </div>
      </section>  
    </body>
  </html>
  `
};

module.exports = { generateHTML };