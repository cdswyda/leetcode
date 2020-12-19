/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  var n = matrix.length;
  var t = 0;
  // 矩阵 转置运算
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      t = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = t;
    }
  }
  // 再水平镜像
  var len = (n / 2) >> 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < len; j++) {
      t = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = t;
    }
  }
};

function test(arr) {
  rotate(arr);
  console.log(arr);
}

test([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
