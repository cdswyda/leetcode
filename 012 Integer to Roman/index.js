// 0 - 4 * 1000
const thousands = ['', 'M', 'MM', 'MMM', 'MMMM']
// 0 - 9 * 100
const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
// 0 - 9 * 10
const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
// 0 - 9 * 1
const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']

/**
 * @param {number} num
 * @return {string}
 */
let intToRoman = function (num) {
    return thousands[num / 1000 >> 0] + hundreds[(num % 1000) / 100 >> 0] + tens[(num % 100) / 10 >> 0] + ones[num % 10 >> 0]
}

module.exports = intToRoman
