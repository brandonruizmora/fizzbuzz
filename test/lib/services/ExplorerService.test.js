const ExplorerService = require("../../../lib/services/ExplorerService");

describe("ExplorerService class test suit", () => {
    test("Se filtra los explorers por la mision", () => {
        const explorers = [
            { githubUsername: "brandonruizmora", mission: "node" },
            { githubUsername: "carlo", mission: "node" },
            { githubUsername: "ferch", mission: "java" },
        ];
        const filteredExplorers = ExplorerService.filterByMission(explorers, "node");
        expect(filteredExplorers.length).toBe(2);
        expect(filteredExplorers).toEqual([
            { githubUsername: "brandonruizmora", mission: "node" },
            { githubUsername: "carlo", mission: "node" },
        ]);
    });
    test("Se obtiene la cantidad de explorers por mision", () => {
        const explorers = [
            { githubUsername: "brandonruizmora", mission: "node" },
            { githubUsername: "carlo", mission: "node" },
            { githubUsername: "ferch", mission: "java" },
        ];
        const amount = ExplorerService.getAmountOfExplorersByMission(explorers, "java");
        expect(amount).toBe(1);
    });
    test("Se obtiene una lista de los nombres de usuarios por la mision", () => {
        const explorers = [
            { githubUsername: "brandonruizmora", mission: "node" },
            { githubUsername: "carlo", mission: "node" },
            { githubUsername: "ferch", mission: "java" },
        ];
        const explorersUsername = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorersUsername.length).toBe(2);
        expect(explorersUsername[1]).toBe("carlo");
    });
});
