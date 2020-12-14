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

// [9, 9, 9, 9, 9, 9, 9]
// [9, 9, 9, 9];

console.log(
  listDisplay(
    addTwoNumbers(arrToList([9, 9, 9, 9, 9, 9, 9]), arrToList([9, 9, 9, 9]))
  )
);

console.log(0);
