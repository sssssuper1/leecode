const reverseKGroup = function(head, k) {
  if (k < 2) return head
  let tack = null
  let fast = head
  let slow = pre = {
    next: head
  }
  let i = 1
  while (fast) {
    fast.pre = pre
    
    if (i % k === 0) {
      let stash = fast.next
      slow.next.next = fast.next
      slow.next = fast
      delete slow.pre

      let tmp = fast
      let j = 1
      while (j < k) {
        tmp.next = tmp.pre
        delete tmp.pre
        tmp = tmp.next
        j++
      }
      delete tmp.pre
      if (!tack) tack = fast
      slow = pre = tmp
      fast = stash
    } else {
      fast = fast.next
      pre = pre.next
    }

    i++
  }

  while (pre) {
    pre = pre.pre
    if (pre) {
      delete pre.next.pre
    }
  }

  if (!tack) tack = head
  return tack
};

const { linkedListGanerator } = require('./linkedList')

console.log(reverseKGroup(linkedListGanerator([1,2,3,4,5,6,7,8]), 3))