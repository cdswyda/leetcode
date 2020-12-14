/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var prev = nums[0];
  for (var i = 1; i < nums.length; i++) {
    if (prev === nums[i]) {
      nums.splice(i, 1);
      i--;
    } else {
      prev = nums[i];
    }
  }
  prev = null;
  return nums.length;
};
