const rotateRight = function(head, k) {
  if (!head || !head.next) return head
  if (k === 0) return head
  let fast = head
  let slow = head
  let i = 0
  while (fast.next) {
    fast = fast.next
    if (i < k) {
      i++
    } else {
      slow = slow.next
    }
  }

  if (i === k) {
    fast.next = head
    let result = slow.next
    slow.next = null
    return result
  } else {
    return rotateRight(head, k % (i + 1))
  }
};

const { linkedListGanerator } = require('./linkedList')

rotateRight(linkedListGanerator([1,2,3]), 4)