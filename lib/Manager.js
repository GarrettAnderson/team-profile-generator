const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber
    }
    getRole = function() {
        return 'Manager'
    }
}

module.exports = Manager