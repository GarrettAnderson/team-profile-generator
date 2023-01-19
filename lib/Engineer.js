const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        this.github = github
    }
    getGithub = function() {
        return this.github
    }
    getRole = function() {
        return 'Engineer'
    }
}

module.exports = Engineer