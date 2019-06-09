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
