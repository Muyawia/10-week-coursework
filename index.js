const inquirer = require('inquirer');
const Employee = require("./lib/Employee.js");

teamArray = [];
ask();

function ask(){
    return inquirer.prompt([
        {
            type: 'list',
            name: 'job',
            message: 'What is your job?',
            choices: ['Manager', 'Engineer', 'Intern', 'Build the page'],
        }
    ])
    .then(function(input){
        switch (input.job) {
            case "Manager":
                addM();
                break;
            default:
                build();
        }
    });
}

function addM() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?",
        },

        {
            type: "input",
            name: "id",
            message: "What is the manager's ID?",
        },

        {
            type: "input",
            name: "email",
            message: "What is the manager's email?",
        },
    ])
    .then((answers) => {
        const manager = new Manager(
            answers.name,
            answers.id,
            answers.email
        );
        teamArray.push(manager)
        create();

    });
}