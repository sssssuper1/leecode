const { linkedListGanerator } = require('./linkedList')

const swapPairs = function(head) {
  if (!head || !head.next) return head

  const tack = head.next
  let couple = false
  let last = {
    next: head
  }
  let horn = {
    next: last
  }
  while (head) {
    if (couple) {
      let tail = head.next
      last.next = tail
      head.next = last
      horn.next = head
      head = head.next
    } else {
      last = last.next
    }

    head = head.next
    horn = horn.next
    couple = !couple
  }

  return tack
};

console.log(swapPairs(linkedListGanerator([1,2,3,4,5])))