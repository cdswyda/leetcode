# [49. 字母异位词分组](https://leetcode-cn.com/problems/group-anagrams/)

给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

示例:

```
输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```
说明：

- 所有输入均为小写字母。
- 不考虑答案输出的顺序。

## 解决方案

实际上就是将字母组成相同的字符串分到相同的组内即可。如何判断两个单词组成字母相同呢，只需排序即可。 如 `eat`, `tea` 正序排列后均为 `aet` ，就可以将其分到一组内。

假设字符串长度为 `m` 则排序时间负责度为 $O\left(m\log m\right)$，因此总体时间复杂度为  $O\left(nm\log m\right)$

代码：

```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  var map = {};
  strs.forEach((str) => {
    var key = str.split("").sort().join("");
    if (map[key]) {
      map[key].push(str);
    } else {
      map[key] = [str];
    }
  });

  return Object.values(map);
};

```

如字符串长度均比较长，在排序上的开销就比较大了，此处限定了仅仅还有小写字母可以变相利用长度为26的数组来记录字符串信息，若数组每个位置都相同，则此两字符串互为字母异位词。如 `abc` `cba` 对应的数组信息都是 `[1,1,1,...]` 。

因此可以将上一种实现中的判断字符串标识的key实现做修改：

```js
var key = str.split("").sort().join("");
```

改为

```js
var key = new Array(26).fill(0);
for (let c of str) {
  key[c.charCodeAt(0) - 97]++;
}
key = key.toString();
```

即可。

<!-- 此时时间复杂度可变为 $O\left ( n \left ( m + 26 \right) \right)$ -->
