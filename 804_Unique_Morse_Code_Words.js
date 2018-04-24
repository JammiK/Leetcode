/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let dictionary = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let result = [];
    let startCode = "a".charCodeAt(0);
    for (var i = words.length - 1; i >= 0; i--) {
        let  morseCode = "";
        for (var j = 0; j < words[i].length; j++) {
            morseCode += dictionary[words[i][j].charCodeAt(0) - startCode];
        }
        if (result.indexOf(morseCode) == -1) {
            result.push(morseCode);
        }
    }
    return result.length;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));