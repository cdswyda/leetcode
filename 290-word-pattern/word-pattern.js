/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  var result = true;
  var arr = s.split(' ');
  if (pattern.length !== arr.length) return false;
  var p_s_map = {};
  var s_p_map = {};

  for (var i = 0, len = arr.length; i < len; i++) {
    var p = pattern[i];
    if (!p_s_map[p]) {
      p_s_map[p] = arr[i];
    } else if (p_s_map[p] !== arr[i]) {
      return false;
    }
    if (!s_p_map[arr[i]]) {
      s_p_map[arr[i]] = p;
    } else if (s_p_map[arr[i]] !== p) {
      return false;
    }
  }

  return result;
};
