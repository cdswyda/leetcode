/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  var result = [];
  if (!root) return [];
  if (!root.left && !root.right) return [[root.val]];

  var levelNodeArr = [root];
  var isOdd = true;

  while (levelNodeArr.length) {
    var arr = [];
    for (var i = 0, len = levelNodeArr.length; i < len; i++) {
      var node = levelNodeArr.shift();
      if (isOdd) {
        arr.push(node.val);
      } else {
        arr.unshift(node.val);
      }

      // 构造下一层
      if (node.left !== null) {
        levelNodeArr.push(node.left);
      }
      if (node.right !== null) {
        levelNodeArr.push(node.right);
      }
    }

    isOdd = !isOdd;
    result.push(arr);
  }
  return result;
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  var result = [];
  if (!root) return [];
  if (!root.left && !root.right) return [[root.val]];

  var levelNodeArr = [root];
  var isOdd = true;

  while (levelNodeArr.length) {
    var arr = [];
    for (var i = 0, len = levelNodeArr.length; i < len; i++) {
      var node = levelNodeArr.shift();
      if (isOdd) {
        arr.push(node.val);
      } else {
        arr.unshift(node.val);
      }

      // 构造下一层
      if (node.left !== null) {
        levelNodeArr.push(node.left);
      }
      if (node.right !== null) {
        levelNodeArr.push(node.right);
      }
    }

    isOdd = !isOdd;
    result.push(arr);
  }
  return result;
};

// test

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
function test(root) {
  console.log(JSON.stringify(zigzagLevelOrder(root), 0, 2));
}
var root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
test(root);
