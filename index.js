// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleIn => {
            if (titleIn) {
                return true;
            } else {
                console.log('\nPlease enter the title of your project to continue!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        validate: descriptionIn => {
            if (descriptionIn) {
                return true;
            } else {
                console.log('\nPlease describe the project to continue!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'How do you install and run the project?',
        validate: inputIn => {
            if (inputIn) {
                return true;
            } else {
                console.log('\nPlease say how to intall and run your project to continue!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: 'How do you use this application?',
        validate: usageIn => {
            if (usageIn) {
                return true;
            } else {
                console.log('\nPlease enter how to use your project to continue!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Who and what third-party assets attributed to this application',
        validate: contributionIn => {
            if (contributionIn) {
                return true;
            } else {
                console.log('\nPlease enter the contributors and any third-party assets for your project to continue!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test your project?',
        validate: testIn => {
            if (testIn) {
                return true;
            } else {
                console.log('\nPlease enter the testing procedure of your project to continue!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What licenses were used for the project?',
        choices: ['Apache', 'GNU GPL v3', 'MIT', 'ISC', 'Mozilla', 'Unlicense'],
        validate: licenseIn => {
            if (licenseIn) {
                return true;
            } else {
                console.log('\nPlease pick one license of your project to continue!(do unlicense for no license)');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
        validate: githubIn => {
            if (githubIn) {
                return true;
            } else {
                console.log('\nPlease enter your github to continue!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email address?',
        validate: emailIn => {
            if (emailIn) {
                return true;
            } else {
                console.log('\nPlease enter your email to continue!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
         err ? console.log(err) : console.log('\nSuccess your ReadMe File has been written!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data)
        writeToFile("README.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
