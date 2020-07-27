const mergeTwoLists = function(l1, l2) {
  const newHead = new ListNode()
  let cur = newHead

  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val <= l2.val) {
        cur.next = l1
        l1 = l1.next
      } else {
        cur.next = l2
        l2 = l2.next
      }
    } else if (l1) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }

    cur = cur.next
  }

  return newHead.next
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}