const allTeam = (data) => {
const generateEmployee = (employee) => {
return `<div>
    <h2>${employee.eName()}</h2>
    <h3>${employee.eRole()}</h3>
    <h3>${employee.eId()}</h3>
    <h4>${employee.eEmail()}</h4>
</div>
    `;
  };

  const HTML = [];

  HTML.push(
    data
    .map((employee) => generateEmployee(employee))
  );
  return HTML.join("");
};

// export function to generate entire page
module.exports = (data) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Generator</title>
  </head>
  <body>
    <div>
        ${allTeam(data)}
    </div>
</body>
</html>
    `;
};