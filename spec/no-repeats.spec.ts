import {NoRepeats} from "../src/no-repeats"
describe("function name", ()=> {
    it("should return true", ()=> {
        expect(true).toBe(true);
    });
    it("should return true", ()=> {
        let sample: NoRepeats = new NoRepeats();
        expect(sample.true()).toBe(true);
    });
    it("should return 1 combination for 1 letter", ()=> {
        let noRepeats = new NoRepeats();
        expect(noRepeats.countPermutations("a")).toBe(1);
    });
    it("should return 0 combinations for 2 same letters", ()=> {
        let noRepeats = new NoRepeats();
        expect(noRepeats.countPermutations("aa")).toBe(0);
    });
    it("should return 0 combinations for 2 same letters", ()=> {
        let noRepeats = new NoRepeats();
        expect(noRepeats.countPermutations("bb")).toBe(0);
    });
    it("should return 2 combinations for 2 letters", ()=> {
        let noRepeats = new NoRepeats();
        expect(noRepeats.countPermutations("ab")).toBe(2);
    });
    it("should return 2 combinations for 3 characters of 2 different letters", ()=> {
        let noRepeats = new NoRepeats();
        expect(noRepeats.countPermutations("aab")).toBe(2);
    });
    it("should return 2 combinations for 3 characters of 2 different letters in different order", ()=> {
        let noRepeats = new NoRepeats();
        expect(noRepeats.countPermutations("baa")).toBe(2);
    });
    it("should return 8 combinations for 4 characters of 2 different letters", ()=> {
        let noRepeats = new NoRepeats();
        expect(noRepeats.countPermutations("aabb")).toBe(8);
    });
    xit("should return 12 combinations for aaabb", ()=> {
        let noRepeats = new NoRepeats();
        expect(noRepeats.countPermutations("aaabb")).toBe(12);
    });
});