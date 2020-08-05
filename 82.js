const deleteDuplicates = function(head) {
  if (!head || !head.next) return head
  let tack = start = { next: head }
  let i = head
  let j = head.next

  while (j) {
    if (i.val !== j.val) {
      if (i.next === j) {
        i = i.next
        start = start.next
      } else {
        start.next = j
        i = j
      }
    }

    j = j.next
  }

  if (i.next) {
    start.next = null
  }

  return tack.next
};

const { linkedListGanerator, print } = require('./linkedList')

const head = linkedListGanerator([1,1])
print(head)
const result = deleteDuplicates(head)
print(result)