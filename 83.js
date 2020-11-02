const deleteDuplicates = function(head) {
  const memo = head
  let cur = {
    next: head,
    val: NaN,
  }
  while (head) {
    if (head.val !== cur.val) {
      if (cur.next !== head) {
        cur.next = head
      }
      cur = cur.next
    }

    head = head.next
  }

  cur.next = null

  return memo
}

const { linkedListGanerator, print } = require('./linkedList')

const l = linkedListGanerator([1,2])
print(l)
print(deleteDuplicates(l))