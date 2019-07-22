/**
 * isPalindrome
 * @param {string} str
 * @return {boolean}
 */
function isPalindrome2(str) {
    var l = str.length;
    var m2 = (l / 2) >>> 0;
    var isOdd = l % 2 !== 0;
    var m1 = isOdd ? m2 : m2 - 1;

    if (!isOdd && str[m1] !== str[m2]) {
        return false;
    }

    var result = true;
    var offset = 1;

    while (offset <= m1) {
        if (str[m1 - offset] !== str[m2 + offset]) {
            result = false;
            break;
        }
        offset++;
    }

    return result;
}

/**
 * isPalindrome
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x === 0) {
        return true;
    }
    // 负数肯定不是
    // 小于0 或者非零能被10整除肯定也不是
    if (x < 0 || x % 10 === 0) {
        return false;
    }

    return isPalindrome2(x + '');
};

module.exports = isPalindrome;
