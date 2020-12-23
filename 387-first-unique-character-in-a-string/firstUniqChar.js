/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  var map = {};
  for (var i = 0, len = s.length; i < len; i++) {
    var c = s[i];
    if (map[c] === undefined) {
      map[c] = i;
    } else {
      map[c] = -1;
    }
  }
  var arr = [];
  Object.keys(map).forEach((c) => {
    if (map[c] !== -1) arr.push(map[c]);
  });
  return arr.length ? Math.min.apply(Math, arr) : -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("llllll"));
