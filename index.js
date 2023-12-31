// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = ([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
    {
        type: 'input',
        name: 'email',
        message: 'Provide your email address',
      },

      {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
      },
   
   
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?",
      },
      {
        type: 'input',
        name: 'description',
        message: "Provide a brief description of your project",
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Advise the steps required to install your project',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples of use',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Cite credits',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Select the license you would like to include',
        choices: ['MIT License', 'the Unlicense', 'Apache License 2.0'],
        when: ({confirmLicense}) => {
            if (confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    },



]);



// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
return inquirer.createPromptModule(questions)
}

// Function call to initialize app
init();