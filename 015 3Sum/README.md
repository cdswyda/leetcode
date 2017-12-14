# 15. 3Sum

## Problem

Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

```
// For example, given array S = [-1, 0, 1, 2, -1, -4],

// A solution set is:

[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

## Solution

直接三次循环来做，再处理重复，不仅效率低，去重也是个麻烦事。

考虑降级处理，在 **LeetCode** 中第一个问题不就是 **Two Sum** 吗，其要求返回数组中两个值的下标，使其和为目标值。

因此先对数组进行排序处理，然后依次取一个，用后面的元素计算 **2Sum**，然后遍历拼接即可。

我们只要对 **Two Sum** 的实现稍微进行改造即可用在这里，需要处理一个问题：在 **Two Sum** 只用一个结果即可，这里必须要返回所有的结果。

实现如下：

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (!nums) return [];
    if (nums.length < 3) return [];

    // 排序
    nums.sort((a, b) => a - b);

    let i,
        len = nums.length,
        result = [];

    for (i = 0; i < len - 2; ++i) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // 之后的数组计算2sum
        let two = twoSum(nums.slice(i + 1), 0 - nums[i]);

        two.forEach(item => {
            // result.push([nums[i], ...item]);
            result.push([nums[i]].concat(item));
        });
    }

    return result;
};

/**
 * @param {number[]} nums 处理数组 已经升序排列
 * @param {number} target 目标值
 * @return {number[]} 能构成目标值的所有值的集合
 */
var twoSum = function (nums, target) {

    let i = 0;
    let j = nums.length - 1;
    let sum = 0;
    let result = [];

    while (i < j) {
        sum = nums[i] + nums[j];

        if (sum === target) {
            // 相等则记录
            // 此处需要处理多个 不要直接返回
            result.push([nums[i], nums[j]]);

            // 处理可直接预期的重复
            while (i < j && nums[i] === nums[i + 1]) {
                i++;
            }
            while (i < j && nums[j] === nums[j - 1]) {
                j--;
            }

            // 比较下一轮
            i++;
            j--;
        } else if (sum > target) {
            // 大于目标值则像小的方向移动
            j--;
        } else {
            // 小于则
            i++;
        }
    }
    return result;
};
```
