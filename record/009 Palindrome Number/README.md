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

**方案1：**

做循环，依次取最后一位，“拼接”成类似反转字符串的数值，原输入值依次移除最后一位缩小，两者比较即可。

当输入值小于反转后的数值时，循环结束。

如果是数值长度为偶数，则恰好反转的数值和输入值相等。

如果是奇数，则反转后的数值被 10 整除的结果和输入值相等。

如 `1221` => `122` : `1` => `12` : `12` => `true`

如 `12321` => `1232` : `1` => `123` : `12` => `12` : `123` => `true`

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
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
```

[code](./index.js)

**方案2：**

将数值转化为字符串，从字符串中点开始像两端逐个字符比较即可。

```js
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
```

[code](./solution2.js)
