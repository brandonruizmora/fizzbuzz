const ExplorerController = require("../../../lib/controller/ExplorerController");

describe("ExplorerController class test suit", () => {
    test("getExplorersByMission esta regresando la lista correctamente", () => {
        const explorerInNode = ExplorerController.getExplorersByMission("node");
        expect(explorerInNode.length).toBe(10);
    });
    test("getExplorersUsernamesByMission esta regresando la lista correctamente", () => {
        const explorerInNode = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorerInNode.length).toBe(10);
        expect(explorerInNode[0]).toBe("ajolonauta1");
    });
    test("getExplorersAmonutByMission esta regresando el numero correctamente", () => {
        const totalExplorerInNode = ExplorerController.getExplorersAmonutByMission("node");
        expect(totalExplorerInNode).toBe(10);
    });
    test("getValidationInNumber esta regresando la validación correctamente", () => {
        const fizzbuzz = ExplorerController.getValidationInNumber(1);
        expect(fizzbuzz).toBe(1);
        const fizzbuzz2 = ExplorerController.getValidationInNumber(15);
        expect(fizzbuzz2).toBe("FIZZBUZZ");
    });
});