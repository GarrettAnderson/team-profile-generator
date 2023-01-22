const inquirer = require('inquirer');
const fs = require('fs');
var HTMLParser = require('node-html-parser');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


let managerAnswerResutls = []
let teamMemberTypeAnswerResults = []

let teamMembers = []

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
    </header>
    
    <main class="employee-info">
        <div class="card" style="width: 18rem;">
            <div class="card-header">
            ${name}
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employeeID}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">Office Number: ${officeNumber}</li>
            </ul>
        </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </body>
    </html>

  `;


const employeeTypeCardHTML = ({ name, employeeID, email, github }) => 
`
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${name}
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employeeID}</li>
        <li class="list-group-item">Email: ${email}</li>
        <li class="list-group-item">Github: ${github}</li>
        </ul>
    </div>

`

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
        name: 'role',
        message: 'What type of employee would you like to add?',
        choices: ['engineer', 'intern']
      },
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
        name: 'github',
        message: 'What is your Github username?',
      }
  ]


  function addTeamMemberType() {
    inquirer.prompt(employeeTypeQuestions)
        .then((teamMemberTypeAnswers) => {
            teamMemberTypeAnswerResults = teamMemberTypeAnswers
            console.log(teamMemberTypeAnswerResults)
            // console.log(managerAnswerResutls)

            if (teamMemberTypeAnswerResults.role === 'engineer') {
                let engineer = new Engineer(teamMemberTypeAnswerResults.role, teamMemberTypeAnswerResults.name, teamMemberTypeAnswerResults.email, teamMemberTypeAnswerResults.github)
                teamMembers.push(engineer)
                console.log(teamMembers)
            } else {
                let intern = new Intern(teamMemberTypeAnswerResults.role, teamMemberTypeAnswerResults.name, teamMemberTypeAnswerResults.email, teamMemberTypeAnswerResults.github)
                teamMembers.push(intern)
                console.log(teamMembers)
            }

            console.log('add team member type prompt')

            // prompt to add a team member
            promptAddTeamMember()
        })
        .catch((error) => {
            if(error.isTtyError) {
                console.log(error)
            } else {
                console.log(error)
            }
        })
  }

  function promptAddTeamMember() {
    inquirer.prompt(addTeamMember)
        .then((confirmedAnswer) => {

            if (confirmedAnswer.addTeamMember === true) {
                // console.log('y was chosen')
                // console.log(confirmedAnswer)

               
                // if manager already exists in the array, dont make new manager
    
                    // console.log(teamMembers)
                    // if yes, continue with asking to add an engineer or intern
                    // after adding an enginer or intern, prompt to add another team member
                    // if chose not to add another team member, break prompt and break cycle
                    addTeamMemberType()
                
            } else {
                // if no, break the prompt and generate html with the manager card and extra employees if there are any
                console.log('n was chosen')
                // if no, manager is still created
                console.log(teamMembers)
                const htmlPageContent = generateHTML(managerAnswerResutls)

                const htmlToAddForEmployee = employeeTypeCardHTML(teamMemberTypeAnswerResults)

                for(var i = 0; i < teamMembers.length; i++) {

                }

                // Print HTML
                // fs.writeFile('index.html', htmlPageContent, (err) =>
                // err ? console.log(err) : console.log('Successfully created a manager but no one else!')
                // );

                // appendEmployeeData()
            }

        })
        .catch((error) => {
            if(error.isTtyError) {
                console.log(error)
            } else {
                console.log(error)
            }
        })
  }

  function appendEmployeeData() {

    // const employeeDataTag = querySelector()
    // fs.readFile('index.html', htmlToAddForEmployee, (err) => 
    // err ? console.log(err) : console.log('Successfully created index.html!')
    // );
    fs.readFile('index.html', 'utf8', (err,html)=>{
        if(err){
           throw err;
        }
     
        const root = HTMLParser.parse(html);
        const body = root.querySelector('body');
        //body.set_content('<div id = "asdf"></div>');
        body.appendChild('<div id = "asdf"></div>');
     
        console.log(root.toString()); // This you can write back to file!
      });

  }


  function promptQuestions() {
    inquirer.prompt(managerQuestions)
        .then((managerAnswers) => {
        managerAnswerResutls = managerAnswers;
        // if yes, create a new manager object and add to teamMembers array
        // let manager = new Manager('jon doe', 1, 'email@email.com', 12345)
        let manager = new Manager(managerAnswerResutls.name, managerAnswerResutls.employeeID,managerAnswerResutls.email, managerAnswerResutls.officeNumber)
        console.log(manager)
        teamMembers.push(manager)
        promptAddTeamMember()
        
    
    
    
        // fs.writeFile('index.html', htmlPageContent, (err) =>
        //   err ? console.log(err) : console.log('Successfully created index.html!')
        // );
      })
      .catch((error) => {
        if(error.isTtyError) {
            console.log(error)
        } else {
            console.log(error)
        }
    })
  }

  promptQuestions()


