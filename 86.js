const partition = function(head, x) {
  let tmp = { next: null }
  let sec = tmp
  let start = { next: head }
  let prev = start
  let cur = head
  while (cur) {
    if (cur.val < x) {
      if (!prev.next) {
        prev.next = cur
      }
      tmp.next = null
      prev = prev.next
    } else {
      if (!tmp.next) {
        tmp.next = cur
      }
      tmp = tmp.next
      prev.next = null
    }
    cur = cur.next
  }

  prev.next = sec.next

  return start.next
}

const { linkedListGanerator, print } = require('./linkedList')
print(partition(linkedListGanerator([1,4,3,2,5,2]), 3))