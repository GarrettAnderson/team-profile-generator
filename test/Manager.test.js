const Manager = require('../lib/Manager')

describe("Manager", () => {
    describe("Get Role", () => {
        it("should return the given role", () => {
        const role = "Manager";
        const result = new Manager().getRole(role);
        expect(result).toEqual(role);
        });
    });
});