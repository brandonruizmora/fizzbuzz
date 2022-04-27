const Reader = require("../../../lib/utils/Reader");

describe("Reader class test suit", () => {
    test("El archivo se esta leyendo correctamente", () => {
        const explorers = Reader.readJsonFile("./explorers.json");
        expect(explorers).not.toBe(undefined);
    });
});