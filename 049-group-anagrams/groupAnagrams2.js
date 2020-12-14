/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  var map = {};
  strs.forEach((str) => {
    var key = new Array(26).fill(0);
    for (let c of str) {
      key[c.charCodeAt(0) - 97]++;
    }
    key = key.toString();
    if (map[key]) {
      map[key].push(str);
    } else {
      map[key] = [str];
    }
  });

  return Object.values(map);
};
