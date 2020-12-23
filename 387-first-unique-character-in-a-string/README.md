---
date:  [2020-12-23 20:10:50]
---

# [387. 字符串中的第一个唯一字符](https://leetcode-cn.com/problems/first-unique-character-in-a-string/)

给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

示例：

```
s = "leetcode"
返回 0

s = "loveleetcode"
返回 2
``` 

提示：你可以假定该字符串只包含小写字母。

## 解决方案

遍历字符串使用 ，使用 哈希表 来统计每个字符的出现位置，一旦出现重复，其值标记为-1即可，最后从得到的哈希表中找到下标的最小值返回即可。

```js
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  var map = {};
  for (var i = 0, len = s.length; i < len; i++) {
    var c = s[i];
    if (map[c] === undefined) {
      map[c] = i;
    } else {
      map[c] = -1;
    }
  }
  var arr = [];
  Object.keys(map).forEach((c) => {
    if (map[c] !== -1) arr.push(map[c]);
  });
  return arr.length ? Math.min.apply(Math, arr) : -1;
};
```
