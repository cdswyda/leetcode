/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function (N) {
  if (N === 0) return 0;
  if (N < 10) return N;
  var n = N;
  while (n) {
    if (isIncreasingDigits(n)) return n;
    n--;
  }
  return 0;
};

function isIncreasingDigits(num) {
  if (num < 10) return true;
  var strs = num + "";
  var prev = strs[0];
  for (var i = 1, len = strs.length; i < len; i++) {
    if (prev > strs[i]) {
      return false;
    } else {
      prev = strs[i];
    }
  }
  return true;
}

// test
function test(input) {
  var t = +new Date();
  var r = monotoneIncreasingDigits(input);
  t = +new Date() - t;
  console.log(input, r, t);
}

test(10);
test(1234);
test(299);
test(1000);
test(777616726);
test(Math.pow(10, 9));
test(Math.pow(10, 9) - 1);
