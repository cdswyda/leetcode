# 7. Reverse Integer

## Problem

Given a 32-bit signed integer, reverse digits of an integer.

**Example 1:**

Input: 123
Output:  321

**Example 2:**

Input: -123
Output: -321

**Example 3:**

Input: 120
Output: 21

**Note:**

Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

## 解决方案

实际就是将一个数字像字符串一样逆序输出而已。

JavaScript 中字符串没有逆序的 `reverse` 方法，但是数组上有，因此将数值转化为字符串，再转化为数组，逆序后再转化回来即可。

```js
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
```

需要注意对32位范围的处理。