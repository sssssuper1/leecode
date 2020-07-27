/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let i = 0
  let tmp = {
    next: head
  }
  let cur = tmp
  let target = tmp

  while (cur) {
    cur = cur.next
    if (i++ > n) {
      target = target.next
    }
  }

  target.next = target.next.next

  return tmp.next
};

removeNthFromEnd(new ListNode(1), 1)

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var removeNthFromEnd_fool = function(head, n) {
  const nodeList = []
  let cur = head
  while (cur) {
    nodeList.push(cur)
    cur = cur.next
  }

  if (n === nodeList.length) {
    const newHead = head.next
    head.next = null
    return newHead
  } else {
    const index = nodeList.length - n
    nodeList[index - 1].next = nodeList[index].next
    return head
  }
};