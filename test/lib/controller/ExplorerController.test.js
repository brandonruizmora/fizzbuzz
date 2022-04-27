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
});