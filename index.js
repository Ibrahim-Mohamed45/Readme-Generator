const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
const filename = 'README.md';

// array of questions for user
const questions = [
      {
          type: 'input',
          name: 'githubUsername',
          message: 'Enter your GitHub username',
      },
      {
          type: 'input',
          name: 'email',
          message: 'Enter your email address',   
      },
      {
          type: 'input',
          name: 'title',
          message: 'Enter the title of your project',
      },
      {
          type: 'input',
          name: 'description',
          message: 'Write a description of your project',
      },
      {
          type: 'input',
          name: 'installation',
          message: 'Enter installation instructions',
      },
      {
          type: 'input',
          name: 'usage',
          message: 'Enter information on how to use and examples',
      },
      {
          type: 'input',
          name: 'tests',
          message: 'Write tests for your application and examples on how to run them',
      },
      {
          type: 'input',
          name: 'contributing',
          message: 'Enter guidelines for others to contribute to your project',
      },
      {
          type: 'input',
          name: 'credits',
          message: 'List collaborators (gitHub profile links) and any resources or assets that need attributtion',
      },
      {
          type: 'list',
          name: 'license',
          message: 'What license do you want for your project?',
          choices: ['MIT', 'Apache_2.0', 'GPL_v3', 'GPL_v2', 'LGPL_v3', 'BSD_3--Clause', 'BSD_2--Clause', 'ISC', 'Unlicense', 'WTFPL'],
      }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, data, (err) => {
        err ? console.log(err) : console.log('README file created');
    });
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        writeToFile(filename, generateMarkdown(data));
    })
}

// function call to initialize program
init();