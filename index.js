// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMd = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project? (Required)',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter a project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide information on how to use the application.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select licenses (Check all that apply)',
        choices: ['MIT', 'ISC', 'Apache 2.0', 'None']
    },
    {
        type: 'input',
        name: 'contribution',
        message: "What are your contribution guidelines?"
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test the application?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please provide your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

function readMe() {
    inquirer.prompt(questions).then(answers => {
        fs.writeFile('./dist/README.md', generateMd(answers), (error) => {
            if (error) {
                console.log(error);
                return;
            } else {
                console.log('Success! Your README.md file has been generated!');
            }
        });
    });
}

readMe();