const Intern = require("../lib/Intern");

test("University test", () => {
  const testUni = "University";
  const employeeTester = new Intern(
    "Tommy",
    77,
    "TommyGnome@gmail.com",
    testUni
  );
  expect(employeeTester.uni).toBe(testUni);
});

test("Role test", () => {
  const returnValue = "Intern";
  const employeeTester = new Intern(
    "Tommy",
    77,
    "TommyGnome@gmail.com",
    "Uni Name"
  );
  expect(employeeTester.getRole()).toBe(returnValue);
});
