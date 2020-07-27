/**
 * 
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const addTwoNumbers = function(l1, l2) {
  const header = new ListNode()
  let cur = header
  let ten = 0
  while (l1 || l2 || ten > 0) {
    cur.next = new ListNode()
    cur = cur.next
    let l1v = 0, l2v = 0
    if (l1) {
      l1v = l1.val
      l1 = l1.next
    }

    if (l2) {
      l2v = l2.val
      l2 = l2.next
    }

    cur.val = l1v + l2v + ten
    if (cur.val > 9) {
      ten = 1
      cur.val = cur.val % 10
    } else {
      ten = 0
    }
  }

  return header.next
};