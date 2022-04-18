// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMd = require('./utils/generateMarkdown');
const fs = require('fs');

console.log('Hello there!!!!');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
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
        type: 'checkbox',
        name: 'license',
        message: 'Select licenses (Check all that apply)',
        choices: ['MIT', 'ISC', 'GPL-3.0', 'None']
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Please name any contributors:"
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test the application?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

inquirer.prompt(questions).then(answers => {
    fs.writeFile('./README.md', generateMd(answers), (error) => {
        if (error) {
            console.log(error);
            return;
        } else {
            console.log('Success! Your README.md file has been generated!');
        }
    });
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
