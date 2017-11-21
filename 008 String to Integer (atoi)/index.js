const INT_MAX = 2147483647
const INT_MIN = -2147483648
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    str = str.trim()
    // 非数值开始 或 非一个符号+数字开始则不用转化
    if (!/^(?:\d|[+-]\d)/.test(str)) return 0

    let r = parseInt(str, 10) || 0

    if (r > INT_MAX) return INT_MAX
    if (r < INT_MIN) return INT_MIN

    return r
};

module.exports = myAtoi
