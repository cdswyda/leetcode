# 13. Roman to Integer

## Problem

Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.

## Solution

准备好每个罗马字符所代表的数字，遍历累加即可。 so easy, but it's wrong.

因为这个罗马数字的计数方法是这样的：

> 罗马数字共有七个，即I(1)，V(5)，X(10)，L(50)，C(100)，D(500)，M(1000)。按照下面的规则可以表示任意正整数。
>
> 重复数次：一个罗马数字重复几次，就表示这个数的几倍。
>
> 右加左减：在一个较大的罗马数字的右边记上一个较小的罗马数字，表示大数字加小数字。在一个较大的数字的左边记上一个较小的罗马数字，表示大数字减小数字。但是，左减不能跨越等级。比如，99不可以用IC表示，用XCIX表示。
>
> 加线乘千：在一个罗马数字的上方加上一条横线或者在右下方写M，表示将这个数字乘以1000，即是原数的1000倍。同理，如果上方有两条横线，即是原数的1000000倍。
>
> 单位限制：同样单位只能出现3次，如40不能表示为XXXX，而要表示为XL。

有影响的规则为 **左加右减** 要对这个情况进行处理。

```js
const CHAR_VALUES = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}
/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function (s) {
    let r = 0
    let arr = s.split('')
    let len = arr.length
    let v, next_V
    for (let i = 0; i < len - 1; ++i) {
        v = CHAR_VALUES[arr[i]]
        next_V = CHAR_VALUES[arr[i + 1]]
        if (next_V > v) {
            r -= v
        } else {
            r += v
        }
    }
    return r + CHAR_VALUES[arr[len - 1]]
}
```