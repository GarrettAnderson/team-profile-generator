const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ name, location, github, linkedin }) =>
  `
  
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

  managerQuestions.then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });


