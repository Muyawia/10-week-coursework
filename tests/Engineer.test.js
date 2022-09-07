const Engineer = require("../lib/Engineer");

test("Github test", () => {
  const testGit = "Tommy";
  const employeeTester = new Engineer(
    "Tommy",
    77,
    "TommyGnome@gmail.com",
    testGit
  );
  expect(employeeTester.git).toBe(testGit);
});

test("Role test", () => {
  const retrieveValue = "Engineer";
  const employeeTester = new Engineer(
    "Tommy",
    77,
    "TommyGnome@gmail.com",
    "Tommy"
  );
  expect(employeeTester.getRole()).toBe(retrieveValue);
});