const generateAll = (all) => {
  const generateManager = (manager) => {
    return `
<div class="card">
    <div>
        <h2>${manager.getName()}</h2>
        <h2>${manager.getRole()}</h2>
        <p>ID: ${manager.getId()}</p>
        <p>Email: ${manager.getEmail()}</p>
        <p>Office number: ${manager.getOffice()}</p>
    </div>
`;
  };

  const generateEngineer = (engineer) => {
    return `
<div class="card">
    <div>
        <h2>${engineer.getName()}</h2>
        <h2>${engineer.getRole()}</h2>
        <p>ID: ${engineer.getId()}</p>
        <p>Email: ${engineer.getEmail()}</p>
        <p>GitHub: ${engineer.getGit()}</p>
    </div>
`;
  };

  const generateIntern = (intern) => {
    return `
<div class="card">
    <div>
        <h2>${intern.getName()}</h2>
        <h2>${intern.getRole()}</h2>
        <p>ID: ${intern.getId()}</p>
        <p>Email: ${intern.getEmail()}</p>
        <p>School: ${intern.getUni()}</p>
    </div>
`;
  };

  const html = [];

  html.push(
    all
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  html.push(
    all
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer)).join("")
  );
  html.push(
    all
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern)).join("")
  );

  return html.join("");
};

// export function to generate entire page
module.exports = (all) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Company Team Page</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
${generateAll(all)}
</body>
</html>
    `;
};
