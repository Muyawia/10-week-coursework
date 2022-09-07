const Employee = require("../lib/Employee");

test("Name test", () => {
  const name = "Tommy";
  const tester = new Employee(name);
  expect(tester.name).toBe(name);
});

test("ID test", () => {
  const id = 2;
  const tester = new Employee("Tommy", id);
  expect(tester.id).toBe(id);
});

test("Email test", () => {
  const email = "TommyGnome@gmail.com";
  const tester = new Employee("Tommy", 77, email);
  expect(tester.email).toBe(email);
});

