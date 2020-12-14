/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  var map = {};
  strs.forEach((str) => {
    var key = str.split("").sort().join("");
    if (map[key]) {
      map[key].push(str);
    } else {
      map[key] = [str];
    }
  });

  return Object.values(map);
};
