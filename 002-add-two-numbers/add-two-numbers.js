/*给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
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
  var head;
  var prevNode = null;
  var carry = 0;

  do {
    var n1 = l1 ? l1.val : 0;
    var n2 = l2 ? l2.val : 0;
    var t = n1 + n2 + carry;
    if (t > 9) {
      //   t = t - 10;
      //   carry = 1;
      carry = (t / 10) >>> 0;
      t = t % 10;
    } else {
      carry = 0;
    }

    if (prevNode === null) {
      head = prevNode = new ListNode(t);
    } else {
      prevNode.next = new ListNode(t);
      prevNode = prevNode.next;
    }

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  } while (l1 || l2);

  // 补上最后的进位
  if (carry !== 0) {
    prevNode.next = new ListNode(carry);
  }

  return head;
};
