const Employee = require("./Employee");

class Manager {
    constructor(officeNumber) {
        this.officeNumber = officeNumber
    }
    getRole = function() {
        return 'Manager'
    }
}