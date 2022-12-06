// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require ("fs")
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter a title for your project:",
        name: "title",
    },
    {
        type: "input",
        message: "Enter a description for your project:",
        name: "description"
    },
    {
        type: "input",
        message: "Enter installation instructions for your project:",
        name: "installation_instructions"
    },
    {
        type: "input",
        message: "Enter usage information for your project:",
        name: "usage_information"
    },
    {
        type: "input",
        message: "Enter contribution guidelines for your project:",
        name: "contribution_guidelines"
    },
    {
        type: "input",
        message: "Enter test instructions for your project:",
        name: "test_instructions"
    },
    {
        type: "list",
        message: "What license does your project use:",
        name: "license",
        choices: [ "Apache" , "BSD" , "MIT" , "GNU" , "No License" ]
    },
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "github_user",
    },
    {
        type: "input",
        message: "Enter your email adress:",
        name: "email_adress",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(`${fileName}.md`, data, (err) => {
    if (err) console.log(err);
    else {
        console.log("\nFile written successfully");
        console.log("The new file data looks like this:\n")}
        console.log(fs.readFileSync(`${fileName}.md`, "utf8"))
})
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            // console.log(generateMarkdown(response))
            writeToFile(response.title, generateMarkdown(response))
        })
}

// Function call to initialize app
init();
