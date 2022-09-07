const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, id , email, uni) {
        super(name, id, email);
        this.uni = uni;
    }

    getUni() {
        return this.uni;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;