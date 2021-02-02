//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown.js');

//array of questions for user input
const questions = [

    {
        type: 'input',
        default: 'Project Title',
        message: 'What is the name of your Project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please provide the name of the repository you use on GitHub for your project (case-sensitive)',
        name: 'repo'
    },
    {
        type: 'input',
        message: 'Please briefly describe your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What does the user need to install to use your project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What are the instructions for using your project?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Did anyone else contribute to your project? List their names here',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'Have you run any tests on your project?',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Choose a license for your project',
        choices: ['GNUAGPLv3', 'GNUGPLv3', 'GNULGPLv3', 'Mozilla', 'Apache2.0', 'MIT', 'Boost1.0', 'Unlicense'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What is your GitHub username? (do not need a "@")',
        name: 'gitname'
    },
    {
        type: 'input',
        message: 'What is an e-mail the user can contact you at?',
        name: 'email'
    }
];

//a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            return console.log(err);
        }

        console.log("Success! The README.md file for your project is generated")
    });
};

const writeFileAsync = util.promisify(writeToFile);

// a function to initialize app
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const markdown = generateMarkdown(answers);
        console.log(markdown);

        await writeFileAsync('README.md', markdown);
    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();
