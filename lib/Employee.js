class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    eName() {
      return this.name;
    }
  
    eId() {
      return this.id;
    }
  
    eEmail() {
      return this.email;
    }
  
    eRole() {
      return "Employee";
    }
  }
  
  module.exports = Employee;