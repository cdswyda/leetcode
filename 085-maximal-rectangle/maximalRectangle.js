/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  var l1 = matrix.length;
  if (!l1) return 0;
  var l2 = matrix[0].length;
  var arr = new Array(l1);
  for (var i = 0; i < l1; i++) {
    var count = 0;
    arr[i] = new Array(l2).fill(0);
    for (var j = 0; j < l2; j++) {
      if (matrix[i][j] === "1") {
        count++;
      } else {
        count = 0;
      }
      arr[i][j] = count;
    }
  }
  var rect = 0;
  for (var i = 0; i < l1; i++) {
    for (var j = 0; j < l2; j++) {
      if (matrix[i][j] === "1") {
        var w = arr[i][j];
        var area = w;
        for (var k = i - 1; k >= 0; k--) {
          w = Math.min(w, arr[k][j]);
          area = Math.max(area, (i - k + 1) * w);
        }
        rect = Math.max(area, rect);
      }
    }
  }
  return rect;
};

function test(arr) {
  console.log(maximalRectangle(arr));
}

test([
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"]
]);
