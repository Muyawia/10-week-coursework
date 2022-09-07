const Manager = require("../lib/Manager");

test("Office number test", () => {
  const retrieveValue = 77;
  const employeeTester = new Manager(
    "Tommy",
    77,
    "TommyGnome@gmail.com",
    retrieveValue
  );
  expect(employeeTester.office).toBe(retrieveValue);
});

test("Role test", () => {
  const retrieveValue = "Manager";
  const employeeTester = new Manager("Tommy", 77, "TommyGnome@gmail.com", 77);
  expect(employeeTester.getRole()).toBe(retrieveValue);
});
