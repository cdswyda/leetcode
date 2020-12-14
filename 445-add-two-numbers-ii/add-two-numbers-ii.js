/*445. 两数相加 II
给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

你可以假设除了数字 0 之外，这两个数字都不会以零开头。

进阶：

如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。

示例：

输入：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 8 -> 0 -> 7
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 构造三个栈分别存储两个链表值和结果值
  var arr1 = [];
  var arr2 = [];
  var arr = [];

  while (l1) {
    arr1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    arr2.push(l2.val);
    l2 = l2.next;
  }
  // 长度补齐
  var delta = arr1.length - arr2.length;
  if (delta > 0) {
    for (var i = 0; i < delta; i++) arr2.unshift(0);
  } else if (delta < 0) {
    delta = -delta;
    for (var i = 0; i < delta; i++) arr1.unshift(0);
  }

  var carry = 0;
  do {
    var n1 = arr1.pop();
    var n2 = arr2.pop();
    var t = n1 + n2 + carry;

    if (t > 9) {
      carry = (t / 10) >>> 0;
      t = t % 10;
    } else {
      carry = 0;
    }
    arr.push(t);
  } while (arr1.length);

  if (carry !== 0) {
    arr.push(carry);
  }
  // 出栈还原为链表
  var head = new ListNode(arr.pop());
  var node = head;
  while (arr.length) {
    node.next = new ListNode(arr.pop());
    node = node.next;
  }
  return head;
};

// test
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrToList(arr) {
  var head = new ListNode(arr[0]);

  var current = head;
  for (var i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

function listDisplay(list) {
  var arr = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }
  return arr;
}

// var l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// var l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

// console.log(addTwoNumbers(arrToList([2, 4, 3]), arrToList([5, 6, 4])));

console.log(listDisplay(addTwoNumbers(arrToList([7, 2, 4, 3]), arrToList([5, 6, 4]))));

console.log(listDisplay(addTwoNumbers(arrToList([9,9,9,9,9,9,9,9,9,9]), arrToList([1]))));

console.log(0);
