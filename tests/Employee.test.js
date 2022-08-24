const Employee = require("../lib/Employee");

test("Name test", () => {
  const name = "Tommy";
  const instance = new Employee(name);
  expect(instance.name).toBe(name);
});

test("ID test", () => {
  const id = 2;
  const instance = new Employee("Tommy", id);
  expect(instance.id).toBe(id);
});

test("Email test", () => {
  const email = "TommyGnome@gmail.com";
  const instance = new Employee("Tommy", 77, email);
  expect(instance.email).toBe(email);
});

