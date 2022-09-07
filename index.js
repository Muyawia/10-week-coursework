const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const inquirer = require("inquirer");
const pageBuilder = require("./pageBuilder.js");
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
            "Manager",
            "Engineer",
            "Intern",
            "Finish",
          ],
        },
      ])
      .then(function (userInput) {
        switch (userInput.addEmployeePrompt) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          case "Manager":
            addManager();
            break;

          default:
            newHtml();
        }
      });
  }

  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "Please enter the employees name",
        },

        {
          type: "input",
          name: "managerId",
          message: "What is the employees ID?",
        },

        {
          type: "input",
          name: "managerEmail",
          message: "Then their email address",
        },
        {
          type: "input",
          name: "managerOffice",
          message: "Finally, what is their office number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOffice,
        );
        allArray.push(manager);
        buildTeam();
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "Please enter the employees name",
        },

        {
          type: "input",
          name: "engineerId",
          message: "What is the employees ID?",
        },

        {
          type: "input",
          name: "engineerEmail",
          message: "Then their email address",
        },
        {
          type: "input",
          name: "engineerGit",
          message: "Finally, their github username",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGit
        );
        allArray.push(engineer);
        buildTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "Please enter the employees",
        },

        {
          type: "input",
          name: "internId",
          message: "What is the employee's ID?",
        },

        {
          type: "input",
          name: "internEmail",
          message: "Then their email address",
        },
        {
          type: "input",
          name: "internUni",
          message: "Finally, the school the graduated from.",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internUni,
        );
        allArray.push(intern);
        buildTeam();
      });
  }
  function newHtml() {
    console.log("The page has been generated!");

    fs.writeFileSync(outputPath, pageBuilder(allArray));
  }

  buildTeam();
}

init();