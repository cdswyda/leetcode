/**
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

    var reverse = 0;

    // 回文 判断一半进行比较即可
    while (x > reverse) {
        reverse = (reverse * 10 + (x % 10)) >> 0;
        x = (x / 10) >> 0;
    }

    // 长度为奇数的情况，需要处理
    return reverse === x || (reverse / 10) >> 0 == x;
};

module.exports = isPalindrome;
