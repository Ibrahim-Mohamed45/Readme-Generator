const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'somename',
    },
    {
      type: 'input',
      message: 'For whom do you work?',
      name: 'company'
    }
])  
.then((response) =>
console.log(`${response.somename} of ${response.company}: Successful!`
));