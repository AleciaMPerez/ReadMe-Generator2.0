// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = ([
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?",
      },
      {
        type: 'input',
        name: 'tableOfContents',
        message: 'List a table of contents',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Advise the steps required to install your project',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Proide instructions and examples of use',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Cite credits',
      },
      {
        type: 'input',
        name: 'license',
        message: 'list license',
      },

]);



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
