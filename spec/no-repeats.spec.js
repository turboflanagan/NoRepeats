"use strict";
var no_repeats_1 = require("../src/no-repeats");
describe("function name", function () {
    it("should return 1 combination for 1 letter", function () {
        var noRepeats = new no_repeats_1.NoRepeats();
        expect(noRepeats.countPermutations("a")).toBe(1);
    });
    it("should return 0 combinations for 2 same letters", function () {
        var noRepeats = new no_repeats_1.NoRepeats();
        expect(noRepeats.countPermutations("aa")).toBe(0);
    });
    it("should return 0 combinations for 2 same letters", function () {
        var noRepeats = new no_repeats_1.NoRepeats();
        expect(noRepeats.countPermutations("bb")).toBe(0);
    });
    it("should return 2 combinations for 2 letters", function () {
        var noRepeats = new no_repeats_1.NoRepeats();
        expect(noRepeats.countPermutations("ab")).toBe(2);
    });
    it("should return 2 combinations for 3 characters of 2 different letters", function () {
        var noRepeats = new no_repeats_1.NoRepeats();
        expect(noRepeats.countPermutations("aab")).toBe(2);
    });
    it("should return 2 combinations for 3 characters of 2 different letters in different order", function () {
        var noRepeats = new no_repeats_1.NoRepeats();
        expect(noRepeats.countPermutations("baa")).toBe(2);
    });
    it("should return 8 combinations for 4 characters of 2 different letters", function () {
        var noRepeats = new no_repeats_1.NoRepeats();
        expect(noRepeats.countPermutations("aabb")).toBe(8);
    });
    it("should return 12 combinations for aaabb", function () {
        var noRepeats = new no_repeats_1.NoRepeats();
        expect(noRepeats.countPermutations("aaabb")).toBe(12);
    });
    it("should return 3600 combinations for abcdefa", function () {
        var noRepeats = new no_repeats_1.NoRepeats();
        expect(noRepeats.countPermutations("abcdefa")).toBe(3600);
    });
    it("should return 2640 combinations for abfdefa", function () {
        var noRepeats = new no_repeats_1.NoRepeats();
        expect(noRepeats.countPermutations("abfdefa")).toBe(2640);
    });
    it("should return 0 combinations for aaab", function () {
        var noRepeats = new no_repeats_1.NoRepeats();
        expect(noRepeats.countPermutations("aaab")).toBe(0);
    });
    it("should return 0 combinations for zzzzzzzz", function () {
        var noRepeats = new no_repeats_1.NoRepeats();
        expect(noRepeats.countPermutations("zzzzzzzz")).toBe(0);
    });
});
//# sourceMappingURL=no-repeats.spec.js.map