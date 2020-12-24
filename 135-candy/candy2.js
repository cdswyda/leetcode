/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  var total = 1,
    up = 1,
    down = 0;
  for (var i = 1, len = ratings.length; i < len; i++) {
    if (ratings[i] > ratings[i - 1]) {
      if (down !== 0) up = 1;
      up++;
      down = 0;
      total += up;
    } else if (ratings[i] === ratings[i - 1]) {
      up = 1;
      down = 0;
      total += 1;
    } else {
      down++;
      if (up === down) {
        down++;
      }
      total += down;
    }
  }
  return total;
};

function test(arr) {
  console.log(candy(arr));
}

test([1, 0, 2]);
test([1, 2, 2]);
