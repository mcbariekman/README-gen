const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please enter a description of your project:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Please enter installation instructions for your project:',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Please enter usage information for your project:',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Please enter contribution guidelines for your project:',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Please enter test instructions for your project:',
    name: 'tests',
  },
  {
    type: 'list',
    message: 'Please choose a license for your project:',
    name: 'license',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('README.md generated successfully!');
  });
}

function init() {
  inquirer.prompt(questions).then(data => {
    const readmeData = `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.tests}

## License
![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
This application is covered under the ${data.license} license.

## Questions
For any questions or feedback, please contact me at ${data.email}. You can also follow me on [GitHub](https://github.com/${data.username}/).
`;

    writeToFile('README.md', readmeData);
  });
}

init(); // calling the init function here
