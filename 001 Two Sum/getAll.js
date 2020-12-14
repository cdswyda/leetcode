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
