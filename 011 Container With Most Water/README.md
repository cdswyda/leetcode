# 11. Container With Most Water

## Problem

Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

## Solution

起初的想法直接就是遍历两次进行计算，可是提交时发现 "Time Limit Exceeded" ， 查阅讨论，发现有人说只需要 **O(n)** 的时间复杂度，可见只用一次遍历即可。

观察到有重要的两点：1、非负数 2、整数

这就好办了，相邻两点，较高的构成的面积必然较大。因为X轴上的差值必定是1，如果一个点较高，则最少高1，面积已经得到弥补，因此直接一次遍历即可：

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let area = 0;
    if (!height || height.length < 2) return 0;

    let i = 0,
        j = height.length - 1;
    while (i < j) {
        area = Math.max(area, (j - i) * Math.min(height[i], height[j]));
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return area;
};
```
