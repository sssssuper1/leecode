class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function linkedListGanerator(list) {
  const head = {}
  let cur = head
  list.forEach(v => {
    const node = new ListNode(v)
    cur.next = node
    cur = node
  });

  return head.next;
}

function print(head) {
  let str = '['
  while (head) {
    str = str + head.val + ' '
    head = head.next
  }
  str = str.slice(0, -1)
  str += ']'
  console.log(str)
}

function reverse(l) {
  let pre = null
  let cur = l
  let next = null
  while (cur) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  return pre
}

function reverse2(l) {
  if (!l.next) return l
  let tail = reverse2(l.next)
  l.next.next = l
  l.next = null
  return tail
}
let test1 = linkedListGanerator([1, 2, 3, 4, 5])


function hasLoop(l) {
  let fast = l.next
  let slow = l
  while (fast && fast !== slow) {
    if (fast.next) {
      fast = fast.next.next
    } else {
      break
    }

    slow = slow.next
  }

  return fast === slow
}
// let test2 = linkedListGanerator([1, 2, 3, 4, 5, 6, 7, 8, 9])
// console.log(hasLoop(test2))

function createLoop(l, index) {
  const head = l
  let knot = null
  let i = 1
  while (l.next) {
    if (i === index) {
      knot = l
    }
    l = l.next
    i++
  }

  l.next = knot

  return head
}
// createLoop(test2, 4)
// console.log(hasLoop(test2))


function merge(l1, l2) {
  const head =  new ListNode()
  let sentry = head
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      sentry.next = l1
      l1 = l1.next
    } else {
      sentry.next = l2
      l2 = l2.next
    }
    sentry = sentry.next
  }

  sentry.next = l1 ? l1 : l2

  return head.next
}
// let test3_1 = linkedListGanerator([1, 1, 3, 5, 7])
// let test3_2 = linkedListGanerator([1, 4, 6, 8])
// merge(test3_1, test3_2)


function deleteReciprocal(l, n) {
  const head = {
    next: l
  }

  let i = 1
  let slow = l

  while (i++ <= n) {
    l = l.next
  }

  if (!l) {
    return head.next.next
  }

  while (l.next) {
    slow = slow.next
    l = l.next
  }

  slow.next = slow.next.next

  return head.next
}
// let test4 = linkedListGanerator([1, 2, 3, 4, 5, 6, 7, 8, 9])
// deleteReciprocal(test4, 9)


function getMid(l) {
  let fast = l
  let slow = l
  while (fast.next) {
    fast = fast.next
    if (fast.next) {
      slow = slow.next
      fast = fast.next
    }
  }

  return slow
}
// let test5 = linkedListGanerator([1, 2, 3, 4, 5, 6, 7])
// getMid(test5)

module.exports = {
  linkedListGanerator,
  print,
}