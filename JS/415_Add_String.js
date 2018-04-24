/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let result = "";
    let zeroChar = "0".charCodeAt(0);
    let additionalPoint = 0;
    if (num1.length < num2.length) {
        let num3 = num2;
        num2 = num1;
        num1 = num3;
    }
    let lengthDiff = num1.length - num2.length;
    for (var i = num1.length - 1; i >= 0; i--) {
        //console.log(i - lengthDiff + 1);
        let sum = num1.charCodeAt(i) - zeroChar + additionalPoint;
        if (i - lengthDiff >= 0) {
             sum += num2.charCodeAt(i - lengthDiff) - zeroChar;
        }
        additionalPoint = sum >= 10 ? 1 : 0;
        result = (sum % 10) + result;
    }
    if (additionalPoint == 1) {
        return "1" + result;
    }
    return result;
};