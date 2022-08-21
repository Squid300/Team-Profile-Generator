const inquirer = require('inquirer');
const fs = require('fs');
const { generateHTML } = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const initialQuestion = [
  {
    type: 'input',
    name: 'teamName',
    message: 'What is your team name?'
  }
]

const newQuestion = [
  {
    type: 'list',
    name: 'add',
    message: 'What type of employee would you like to add?',
    choices: ['Engineer', 'Intern', 'I am done adding employees']
  }
]

const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the manager\'s name?'
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the manager\'s id?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the manager\'s email?'
  },
  {
    type: 'input',
    name: 'office',
    message: 'What is the manager\'s office number?'
  }
];

const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the engineer\'s name?'
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the engineer\'s id?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the engineer\'s email?'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is the engineer\'s github username?'
  }
];

const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the intern\'s name?'
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the intern\'s id?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the intern\'s email?'
  },
  {
    type: 'input',
    name: 'school',
    message: 'What is the intern\'s school?'
  }
];

const answers = {
  teamName: '',
  manager: [],
  engineers: [],
  interns: []
}

function addEmployees() {
  inquirer
  .prompt(newQuestion)
  .then((response) => {
    if (response.add === "I am done adding employees") {
      console.log(answers);
      console.log('complete');
      writeToFile('dist/index.html', answers);
    } else if (response.add === 'Engineer') {
      inquirer
      .prompt(engineerQuestions)
      .then((response) => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        answers.engineers.push(engineer)
        addEmployees();
      })
    } else {
      inquirer
      .prompt(internQuestions)
      .then((response) => {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        answers.interns.push(intern)
        addEmployees();
      })
    }
  addEmployees})
}

function init() {
  inquirer
  .prompt(initialQuestion)
  .then((response) => {
    answers.teamName = response.teamName;
    inquirer
    .prompt(managerQuestions)
    .then((response) => {
      console.log(response);
      const manager = new Manager(response.name, response.id, response.email, response.office);
      answers.manager.push(manager);
      addEmployees();
    })
  });
}


function writeToFile(fileName, data) {
  const teamHTML = generateHTML(data);
  fs.writeFile(fileName, teamHTML, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
};
  // .then((response) => {
  //     writeToFile('./dist/index.html', response);
  // });

init();