/**
 * return a number that is reversed by input
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var MAX_NUM = Math.pow(2, 31) - 1;
    var MIN_NUM = -Math.pow(2, 31);

    let str = (x + '').split('').reverse().join('');
    let o = /-$/.test(str) ? parseInt(str.substr(-1) + str.substr(0), 10) : parseInt(str, 10);
    return (o > MAX_NUM || o < MIN_NUM) ? 0 : o;
};