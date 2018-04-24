/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function(N, K) {
    let quad = K % 4;
    //K--;
    let ks = [];
    let kh = [];
    //let half = quad < 3 ? 0 : 1;
    //K = Math.round(K / 2);
    for (var i = N; i > 1; i--) {
        kh.push((K - 1) % 2);
        K = Math.round(K / 2);
    }
    let sym = 0;
    let dict = {0: {0: 0, 1: 1}, 1: {0: 1, 1: 0}};
    for (var i = kh.length - 1; i >= 0; i--) {
        sym = dict[sym][kh[i]];
    }
    return sym;
};