# 12. Integer to Roman

## Problem

Given an integer, convert it to a roman numeral.

Input is guaranteed to be within the range from 1 to 3999.

## Solution

由于罗马数字有自己的一套规则，直接转化是不现实了，但是固定写法就那几种，直接进行枚举即可。

```js
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
```
