const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ name, employeeID, email, officeNumber }) =>
  `
  <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <title>Document</title>
    </head>
    <body>
    <header class="p-5 mb-4 header bg-light">
        <div class="container">
        <h1 class="display-4">My Team</h1>
        </div>
        <div class="card" style="width: 18rem;">
            <div class="card-header">
            ${name}
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">${employeeID}</li>
            <li class="list-group-item">${email}</li>
            <li class="list-group-item">${officeNumber}</li>
            </ul>
        </div>
    </header>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </body>
    </html>

  `;

const managerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'employeeID',
      message: 'What is your employee ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is your office number?',
    }
  ]

  const addTeamMember = [
    {
        type: 'confirm',
        name: 'addTeamMember',
        message: 'Would you like to add an engineer or an intern?'
      }
  ]

  const employeeTypeQuestions = [
    {
        type: 'list',
        name: 'name',
        message: ['engineer', 'intern']
      },
      {
        type: 'input',
        name: 'employeeID',
        message: 'What is your employee ID?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
      }
  ]

  function promptAddTeamMember() {
    inquirer.prompt(addTeamMember)
        .then((confirmedAnswer) => {

            if (confirmedAnswer.addTeamMember === 'Yes') {
                console.log('y was chosen')
            }
            console.log('n was chosen')
        })
  }


  function promptQuestions() {
    inquirer.prompt(managerQuestions)
        .then((managerAnswers) => {
        const htmlPageContent = generateHTML(managerAnswers);
            
        promptAddTeamMember()
        
    
    
    
        // fs.writeFile('index.html', htmlPageContent, (err) =>
        //   err ? console.log(err) : console.log('Successfully created index.html!')
        // );
      });
  }

  promptQuestions()


