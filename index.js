const Employee = require("./lib/Employee.js");
const inquirer = require("inquirer");
const generateTeam = require("./generateHTML.js");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");

allArray = [];

function init() {
  function buildTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Please enter information about your employee",
          name: "addEmployeePrompt",
          choices: [
            "Employee",
            "Manager",
            "Engineer",
            "Intern",
            "Finish",
          ],
        },
      ])
      .then(function (userInput) {
        switch (userInput.addEmployeePrompt) {
          case "Employee":
            addEmployee();
            break;
        case "Manager":
            break;
          case "Engineer":
            break;
          case "Intern":
            break;

          default:
            newHtml();
        }
      });
  }

  function addEmployee() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please enter the employee's",
        },

        {
          type: "input",
          name: "id",
          message: "What is the employee's ID?",
        },

        {
          type: "input",
          name: "email",
          message: "Then their email address",
        },
      ])
      .then((answers) => {
        const employee = new Employee(
          answers.employeeName,
          answers.employeeId,
          answers.employeeEmail,
        );
        allArray.push(employee);
        buildTeam();
      });
  }
  function newHtml() {
    console.log("The page has been generated!");

    fs.writeFileSync(outputPath, generateTeam(allArray));
  }

  buildTeam();
}

init();