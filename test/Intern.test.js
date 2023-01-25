const Intern = require('../lib/Intern')

describe("Intern", () => {
    describe("Get Role", () => {
        it("should return the given role", () => {
        const role = "Intern";
        const result = new Intern().getRole(role);
        expect(result).toEqual(role);
        });
    });
});