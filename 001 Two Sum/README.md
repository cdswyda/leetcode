# 1 Two Sum

## Problem

Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have **exactly** one solution, and you may not use the same element twice.

**Example:**

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,

return [0, 1].

## 问题

给出一个整数数组，返回其中两个数字的下标，能够使得这两个数字相加和为目标值。

你必须假定每一种输入都有一个正确的解决方案， 你不能使用将同一个元素使用两次。

## 解决方案

最原始古老的应该就是一个二重循环了，相加的和符合，则返回两个下标即可。

但是这里可以只循环一次:

用一个 map 来存储， key 为数组中的数字， value 为数字的下标。

遍历数组，先判断map中目标值-当前值的所对应的 value 是否存在，已存在则已经找到。

否则在map中继续加入即可。

示例如下：

```js
/**
 * @param {number[]} nums 输入数组
 * @param {number} target 目标值
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    if (!nums) {
        return [];
    }
    // map存储 数组 value 作为 key , 下标作为值
    let map = {},
        curr;

    for (let i = 0, l = nums.length; i < l; ++i) {
        curr = nums[i];
        // 如果目标值减去当前值已经存在 则表示找到了
        if (map[target - curr] !== undefined) {
            return [map[target - curr], i];
        }
        // 否则将当前值也加入记录中
        map[curr] = i;
    }
    return [];
};
```

## 拓展

15 3Sum中需要求三个数的这个问题，因此这个进行了改造，能够输出所有的结果，且输出值直接输value而非下标

```js

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
