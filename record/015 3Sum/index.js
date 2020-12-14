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
