/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function (N) {
  var arr = (N + "").split("");
  let i = 1; // 记录输入的第几位不符合单调递增
  while (i < arr.length && arr[i - 1] <= arr[i]) {
    i++;
  }
  if (i < arr.length) {
    while (i > 0 && arr[i - 1] > arr[i]) {
      // 从不符合的位置往前开始递减 确保前面都符合 单调递增 更新下标
      arr[i - 1] -= 1;
      i--;
    }
    i++;// 递减位置之后的元素全部变成9即可 前面递减保障了小于输入 替换为9可保障最大
    for (; i < arr.length; i++) {
      arr[i] = 9;
    }
  }
  return parseInt(arr.join(""), 10);
};


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
test(12375);
test(77616);
test(777616726);
test(Math.pow(10, 9));
test(Math.pow(10, 9) - 1);
