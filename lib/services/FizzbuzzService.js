class FizzbuzzService {
    static applyValidationInExplorer(explorer) {
        if (explorer.score % 5 === 0 && explorer.score % 3 === 0) {
            explorer.trick = "FIZZBUZZ";
            return explorer;
        } else if (explorer.score % 5 === 0) {
            explorer.trick = "BUZZ";
            return explorer;
        } else if (explorer.score % 3 === 0) {
            explorer.trick = "FIZZ";
            return explorer;
        } else {
            explorer.trick = explorer.score;
            return explorer;
        }
    }
    static applyValidationInNumber(number) {
        let validation = {};
        validation[[true, true]] = "FIZZBUZZ";
        validation[[true, false]] = "FIZZ";
        validation[[false, true]] = "BUZZ";
        validation[[false, false]] = false;
        const fb_validation = validation[[number%3===0, number%5===0]];
        if (fb_validation) {
            return fb_validation;
        } else {
            return number;
        }
    }

}

module.exports = FizzbuzzService;