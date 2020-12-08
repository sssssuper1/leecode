const copyRandomList = function(head) {
  const result = copyBase(head)
  let cur = head
  while (cur) {
    if (cur.random) {
      cur.newNode.random = cur.random.newNode
    } else {
      cur.newNode.random = null
    }
    cur = cur.next
  }
  return result
}

function copyBase(head) {
  if (!head) return null

  head.newNode = {
    val: head.val,
    next: copyBase(head.next)
  }

  return head.newNode
}


const n5 = {
  val: 1,
  next: null,
  random: null,
}

const n4 = {
  val: 10,
  next: n5,
  random: null,
}

const n3 = {
  val: 3,
  next: n4,
  random: null,
}

const n2 = {
  val: 2,
  next: n3,
  random: null,
}

const n1 = {
  val: 1,
  next: n2,
  random: null,
}

n5.random = n1
n4.random = n3
n3.random = n5
n2.random = n1

console.log(copyRandomList(n1))