const FizzbuzzService = require("../../../lib/services/FizzbuzzService");

describe("FizzbuzzService class test suit", () => {
    test("Se esta validando correctamente y se esta agregando su nuevo campo", () => {
        let explorer1 = { name: "Explorer1", score: 1 };
        explorer1 = FizzbuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1} 
        expect(explorer1.trick).not.toBe(undefined);
        expect(explorer1.trick).toBe(1);

        let explorer3 = { name: "Explorer3", score: 3 };
        explorer3 = FizzbuzzService.applyValidationInExplorer(explorer3); // {name: "Explorer3", score: 3, trick: "FIZZ"}
        expect(explorer3.trick).not.toBe(undefined);
        expect(explorer3.trick).toBe("FIZZ");

        let explorer5 = { name: "Explorer5", score: 5 };
        explorer5 = FizzbuzzService.applyValidationInExplorer(explorer5); // {name: "Explorer5", score: 5, trick: "BUZZ"}
        expect(explorer5.trick).not.toBe(undefined);
        expect(explorer5.trick).toBe("BUZZ");

        let explorer15 = { name: "Explorer15", score: 15 };
        explorer15 = FizzbuzzService.applyValidationInExplorer(explorer15); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
        expect(explorer15.trick).not.toBe(undefined);
        expect(explorer15.trick).toBe("FIZZBUZZ");

    });
    test("applyValidationInNumber se esta devolviendo el valor correctamente", () => {
        let score = 1;
        score = FizzbuzzService.applyValidationInNumber(score);
        expect(score).toBe(1);
        let score2 = 3;
        score2 = FizzbuzzService.applyValidationInNumber(score2);
        expect(score2).toBe("FIZZ");
        let score3 = 5;
        score3 = FizzbuzzService.applyValidationInNumber(score3);
        expect(score3).toBe("BUZZ");
        let score4 = 15;
        score4 = FizzbuzzService.applyValidationInNumber(score4);
        expect(score4).toBe("FIZZBUZZ");
    });
});