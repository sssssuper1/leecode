const reverseBetween = function(head, m, n) {
  if (m === n) return head
  const start = {
    next: head,
  }
  let pre = start
  let cur = head
  let after = null
  let memo = null
  let left = null
  let count = 1

  while (count < n) {
    if (count === m) {
      left = cur
      memo = pre
      pre = cur
      cur = cur.next
      after = cur.next
    } else if (count > m) {
      cur.next = pre
      pre = cur
      cur = after
      after = cur.next
    } else {
      pre = cur
      cur = cur.next
    }
    count++
  }

  cur.next = pre
  memo.next = cur
  left.next = after

  return start.next
}

const { linkedListGanerator, print } = require('./linkedList')

const l = linkedListGanerator([1,2])
print(l)
print(reverseBetween(l, 1, 2))
