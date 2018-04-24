/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let jewels = {};
    for (var i = J.length - 1; i >= 0; i--) {
    	jewels[J[i]] = true;
    }
    let result = 0;
    for (var i = S.length - 1; i >= 0; i--) {
    	if (jewels[S[i]]) {
    		result++;
    	}
    }
    return result;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));