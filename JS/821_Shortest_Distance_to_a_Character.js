/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    const arr = S.split('');
    let result = [];
    let last = 0;
    let ind = arr.indexOf(C, last);
    let isFirst = true;
    while (ind != -1) {
    	for (var i = last; i < ind; i++) {
    		if (isFirst) {
				result.push(Math.abs(i-ind));
    		} else {
		    	result.push(Math.min(Math.abs(i-last), Math.abs(i-ind)));
		    }
	    }
	    isFirst = false;
	    last = ind;
	    ind = arr.indexOf(C, last + 1)
    }
    for (var i = last; i < S.length; i++) {
    	result.push(i-last);
    }
    return result;
};

// console.log(shortestToChar("baab", "b"));
console.log(shortestToChar("loveleetcodet", "e"));