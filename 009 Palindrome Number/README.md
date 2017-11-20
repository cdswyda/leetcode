# 9. Palindrome Number

## Problem

Determine whether an integer is a palindrome. Do this without extra space.

判断一个整数是否为回文， 不要使用额外空间。

**Some hints:**

Could negative integers be palindromes? (ie, -1)

负数可能是回文吗？ （如：-1）

If you are thinking of converting the integer to string, note the restriction of using extra space.

如果你考虑将整数转化为字符串，请注意额外空间的限制。

You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?

你也可以尝试反转一个整数。但是，如果你已经解决了 Reverse Integer 这个问题， 你应该知道可能溢出的问题，如何处理这种情况？

There is a more generic way of solving this problem.

有一种更通用的方法来解决这个问题

## Solution

> Do this without extra space.

不理解这句话的意思，不使用额外空间，不用感觉是无解的。 它的提示中说转化为字符串要注意空间的限制，我暂且就认为这个 **extra space** 是值其他类型的空间吧。

不用字符串，那就用个数值吧。

做循环，依次取最后一位，“拼接”成类似反转字符串的数值，比较即可。

由于是回文，循环一半即可，反转数值依次“拼接”，原数组依次减少。

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x === 0) {
        return true
    }
    // 负数肯定不是
    // 小于0 或者非零能被10整除肯定也不是
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false
    }

    var revser = 0;

    // 回文 判断一半进行比较即可
    while (x > revser ) {
        revser = revser * 10 + x % 10 >> 0
        x = x / 10 >> 0
    }

    // 长度为奇数的情况，需要处理
    return (revser === x || (revser / 10 >> 0) == x)
};

module.exports = isPalindrome
```
