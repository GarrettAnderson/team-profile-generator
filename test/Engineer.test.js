const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
    describe("Get Role", () => {
        it("should return the given role", () => {
        const role = "Engineer";
        const result = new Engineer().getRole(role);
        expect(result).toEqual(role);
        });
    });
});