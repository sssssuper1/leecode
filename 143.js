const reorderList = function(head) {
  if (!head || !head.next || !head.next.next) return head
  const left = head
  // 1. find middle
  let fast = head
  let slow = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  // 2. reverse
  const right = slow.next
  slow.next = null
  let cur = right.next
  let pre = right
  pre.next = null
  while (cur) {
    let tmp = cur.next
    cur.next = pre
    pre = cur
    cur = tmp
  }

  // 3. merge
  let lf = left
  let rf = pre
  const result = {}
  let sum = result;
  while (lf && rf) {
    sum.next = lf
    lf = lf.next
    sum = sum.next
    sum.next = rf
    rf = rf.next
    sum = sum.next
  }

  if (lf) {
    sum.next = lf
  } else if (rf) {
    sum.next = rf
  }

  return result.next
}

const { linkedListGanerator, print } = require('./linkedList')

print(reorderList(linkedListGanerator([1,2,3,4,5,6])))