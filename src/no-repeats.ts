export class NoRepeats {
    true() {
        return true;
    }

    countPermutations(str: string): number {
        let chars: any = str.split('');
        let count = 0;
        let permutations = this.getPermutations(str);
        if (chars.length == 1) {
            return 1;
        }
        if (chars.length == 2) {
            if (chars[0] !== chars[1]) {
                return 2;
            }
            return 0;
        }

        for(let perm of permutations) {
            let currentPermutation = perm;
            // console.log(currentPermutation);
            for(var i = 0; i < perm.length-1; i++) {
                if(currentPermutation[i] !== currentPermutation[i+1]) {

                    count += 1;
                }
            }
            // if(currentPermutation[0] !== currentPermutation[1] && currentPermutation[1] !== currentPermutation[2] && currentPermutation[2] !== currentPermutation[3]) {
            //     count += 1;
            //     console.log(count);
            // }
        }
        return count;
    }


    getPermutations(str) {
        var permutations = [],  //generated permutations stored here
            nextWord = [],      //next word builds up in here
            chars = []          //collection for each recursion level
            ;

        //split words or numbers into an array of characters
        if (typeof str === 'string') chars = str.split('');
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
    }
}
