"use strict";
var NoRepeats = (function () {
    function NoRepeats() {
    }
    NoRepeats.prototype.true = function () {
        return true;
    };
    NoRepeats.prototype.countPermutations = function (str) {
        var chars = str.split('');
        var count = 0;
        var permutations = this.getPermutations(str);
        if (chars.length == 1) {
            return 1;
        }
        if (chars.length == 2) {
            if (chars[0] !== chars[1]) {
                return 2;
            }
            return 0;
        }
        for (var _i = 0, permutations_1 = permutations; _i < permutations_1.length; _i++) {
            var perm = permutations_1[_i];
            var currentPermutation = perm;
            // console.log(currentPermutation);
            for (var i = 0; i < perm.length - 1; i++) {
                if (currentPermutation[i] !== currentPermutation[i + 1]) {
                    count += 1;
                }
            }
        }
        return count;
    };
    NoRepeats.prototype.getPermutations = function (str) {
        var permutations = [], //generated permutations stored here
        nextWord = [], //next word builds up in here
        chars = [];
        //split words or numbers into an array of characters
        if (typeof str === 'string')
            chars = str.split('');
        else if (typeof str === 'number') {
            str = str + "";
            chars = str.split('');
        }
        permutate(chars);
        return permutations;
        function permutate(chars) {
            if (chars.length === 0) {
                permutations.push(nextWord.join(''));
            }
            for (var i = 0; i < chars.length; i++) {
                chars.push(chars.shift());
                nextWord.push(chars[0]);
                permutate(chars.slice(1));
                nextWord.pop();
            }
        }
    };
    return NoRepeats;
}());
exports.NoRepeats = NoRepeats;
//# sourceMappingURL=no-repeats.js.map