/*
21. 合并两个有序链表

将两个升序链表合并为一个新的 升序 链表并返回。
新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
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
var mergeTwoLists = function (l1, l2) {
  var head = new ListNode(-1);
  var currentNode = head;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      currentNode.next = new ListNode(l1.val);
      currentNode = currentNode.next;
      l1 = l1.next;
    } else {
      currentNode.next = new ListNode(l2.val);
      currentNode = currentNode.next;
      l2 = l2.next;
    }
  }
  // 还没用完的链表无需遍历直接连接即可
  if (l1) {
    currentNode.next = l1;
  } else if (l2) {
    currentNode.next = l2;
  }

  return head.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrToList(arr) {
  if (!arr.length) return null;
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

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
console.log(listDisplay(mergeTwoLists(arrToList([1, 2, 4]), arrToList([1, 3, 4]))));

console.log(listDisplay(mergeTwoLists(arrToList([1, 2, 3]), arrToList([100, 100, 100, 100, 1001]))));

console.log(listDisplay(mergeTwoLists(arrToList([1, 2, 3, 1000]), arrToList([100, 100, 100, 100, 1001]))));

console.log(listDisplay(mergeTwoLists(arrToList([]), arrToList([]))));

console.log(0);
