/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  var map = {};
  for (var c of s) {
    if (!map[c]) {
      map[c] = 1;
    } else {
      map[c]++;
    }
  }

  var arr = [];
  var hsaAdd = new Array(26).fill(0);

  for (var i = 0, l = s.length; i < l; i++) {
    var c = s[i];
    var code = c.charCodeAt(0) - 97;
    if (!hsaAdd[code]) {
      // 栈中不为空 检查元素是否大于当前元素
      while (arr.length && arr[arr.length - 1] > c) {
        // 若已经放入的最后一个元素 后续还会出现 则已经加入的可以丢弃掉
        if (map[arr[arr.length - 1]] > 0) {
          hsaAdd[arr.pop().charCodeAt(0) - 97] = 0;
        } else {
          break;
        }
      }

      arr.push(c);
      hsaAdd[code] = 1;
    }
    map[c]--;
  }

  return arr.join("");
};

function test(s) {
  console.log(removeDuplicateLetters(s));
}

test("bcabc");
test("cbacdcbc");
