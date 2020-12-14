# 10. Regular Expression Matching

## Problem

Implement regular expression matching with support for '.' and '*'.

```
'.' Matches any single character.
'*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "a*") → true
isMatch("aa", ".*") → true
isMatch("ab", ".*") → true
isMatch("aab", "c*a*b") → true
```

## Solution

不知道这个题有什么好做的，两个字符串 `.` 和 `*` 要实现的功能和正则表达式中是一样的，那直接用好了。应该没有哪种语言不支持正则表达式吧

```js
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    return new RegExp('^' + p + '$').test(s)
}
```