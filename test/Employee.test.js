const Employee = require('../lib/Employee')

describe("Employee", () => {
    describe("Get Name", () => {
        it("should return the given name", () => {
        const name = "Garrett";
        const result = new Employee(name).getName();
        expect(result).toEqual(name);
        });
    });
});