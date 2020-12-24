/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  var left = [1];

  for (var i = 1, l = ratings.length; i < l; i++) {
    if (ratings[i] > ratings[i - 1]) {
      left[i] = left[i - 1] + 1;
    } else {
      left[i] = 1;
    }
  }

  var right = 1,
    total = left[left.length - 1];
  for (var i = ratings.length - 2; i > -1; i--) {
    if (ratings[i] > ratings[i + 1]) {
      right++;
    } else {
      right = 1;
    }
    total += Math.max(right, left[i]);
  }
  return total;
};

function test(arr) {
  console.log(candy(arr));
}

test([1, 0, 2]);
test([1, 2, 2]);
