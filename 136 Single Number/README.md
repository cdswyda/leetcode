# 136. Valid Parentheses

## Problem

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

**Note:**

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

**Example 1:**

```
Input: [2,2,1]
Output: 1
```

**Example 2:**

```
Input: [4,1,2,1,2]
Output: 4
```

## Solution

要求线性时间复杂度，还不能有额外内存空间，想了很久都没想到如何解决。看讨论居然是用了位运算中的 —— XOR

回忆其运算规则

| 输入1 | 输入2 | 结果  |
| :---: | :---: | :---: |
|   1   |   1   |   0   |
|   1   |   0   |   1   |
|   0   |   1   |   1   |
|   0   |   0   |   0   |

相同位置重复则得到0，不同则得到1，且此运算满足的交换律。

两个数字的相同（即题目中要求的重复）是和进制没有关系的，那么重复出现的数字，其转化为二进制之后每位也都是相同的。由于此运算又满足交换律，其结果和运算数字的位置没有关系。那么仅需对整个输入逐个进行 XOR 运算即可，所有的重复数字将会得到0，最终得到的结果将是那个仅出现过一次的元素。

```
input: [1 , 2 , 3 , 2 , 1];
        1 ^ 2 = 3
            3 ^ 3 = 0
                0 ^ 2 = 2
                    2 ^ 1 = 3
ouput: 3
```

换成二进制的展示会更直观一点：

```
input: [1 , 2 , 3 , 2 , 1];

// 从上到到下进行 XOR
// 根据运算规则 相同得0 不同得1
01
10
11
10
01
// 连续的运算中，实际就是得到了每一位上出现的次数为奇数次的二进制值 这个组起来就是那个没有重复过的数字
```

实现如下：

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0];
    let res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        res ^= nums[i];
    }
    return res;
};
```
