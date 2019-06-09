# 20. Valid Parentheses

## Problem

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

## Solution

匹配括号的问题，又没有内存的限制，自然是用栈的结构来处理最方便了。

1. 循环处理输入字符串
2. 开始括号直接入栈
3. 遇到结束括号， 出栈对比：
    - 匹配成功则继续
    - 失败直接 `return false` 并结束
4. 循环结束，栈是否为空即为是否完全匹配成功。

空字符串自然是符合的， 字符串长度不为偶数自然是不符合的。

实现如下：

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!s) return true;
    // 长度必定是偶数
    if (s.length % 2 !== 0) return false;

    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    const stack = [];
    let curr = '';
    const startReg = /[([{]/;

    for (let i = 0; i < s.length; i++) {
        curr = s[i];
        // 开始括号 入栈
        if (startReg.test(curr)) {
            stack.push(curr);
        } else {
            // 否则出栈对比
            if (map[stack.pop()] !== curr) {
                return false;
            }
        }
    }

    // 结束 栈应该为空
    return !stack.length;
};

// test
['()', '()[]{}', '(]', '([)]', '{[]}'].forEach(item => {
    console.log(isValid(item));
});
```
