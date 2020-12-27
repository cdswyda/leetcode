/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  var l1 = s.length;
  var l2 = t.length;
  if (l1 !== l2) return false;
  var map = {};
  var map2 = {};
  var i = 0;
  while (i < l1) {
    var c1 = s[i];
    var c2 = t[i];
    if ((map[c1] && map[c1] !== c2) || (map2[c2] && map2[c2] !== c1)) {
      return false;
    }
    map[c1] = c2;
    map2[c2] = c1;
    i++;
  }
  return true;
};

function test(s, t) {
  console.log(isIsomorphic(s, t));
}

test("ab", "ca");
test("aa", "ab");
test("egg", "add");
test("foo", "bar");
test("paper", "title");
test("abcdef", "bcdefg");
