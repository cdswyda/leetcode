/**
 * @param {number[]} g 孩子胃口值数组
 * @param {number[]} s 饼干尺寸数组
 * @return {number} 可满足多少个孩子的胃口
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  var count = 0;
  var l1 = g.length, l2 = s.length;
  var i = 0, j = 0;
  while (i < l1 && j < l2) {
    if (g[i] <= s[j]) {
      // 满足了 分配给他 开始下一个
      count++;
      i++, j++;
    } else {
      j++; // 不满足 尝试下一块饼干够不够胃口
    }
  }
  return count;
};

function test(g, s) {
  console.log(findContentChildren(g, s));
}

test([1, 2, 3], [1, 1]);
test([1, 2], [1, 2, 3]);
test([10, 9, 8, 7], [5, 6, 7, 8])
