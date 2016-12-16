"use strict";
var NoRepeats = (function () {
    function NoRepeats() {
    }
    NoRepeats.prototype.countPermutations = function (str) {
        var permutations = this.getPermutations(str);
        var characters = str.split('');
        if (characters.length == 1) {
            return 1;
        }
        if (characters.length == 2) {
            if (characters[0] !== characters[1]) {
                return 2;
            }
            return 0;
        }
        var goodPermutations = permutations.filter(function (permutation) {
            for (var i = 0; i < permutation.length - 1; i++) {
                if (permutation.substring(i, i + 1) === permutation.substring(i + 1, i + 2)) {
                    return false;
                }
            }
            return true;
        });
        return goodPermutations.length;
    };
    NoRepeats.prototype.getPermutations = function (str) {
        var permutations = [];
        var nextPermutation = [];
        var characters = [];
        if (typeof str === 'string')
            characters = str.split('');
        permutate(characters);
        return permutations;
        function permutate(characters) {
            if (characters.length === 0) {
                permutations.push(nextPermutation.join(''));
            }
            for (var i = 0; i < characters.length; i++) {
                characters.push(characters.shift());
                nextPermutation.push(characters[0]);
                permutate(characters.slice(1));
                nextPermutation.pop();
            }
        }
    };
    return NoRepeats;
}());
exports.NoRepeats = NoRepeats;
//# sourceMappingURL=no-repeats.js.map