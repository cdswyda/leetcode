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
