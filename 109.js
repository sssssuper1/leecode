const sortedListToBST = function(head) {
  const { root, left, right } = findMiddle(head)
  if (!root) return null
  root.left = sortedListToBST(left)
  root.right = sortedListToBST(right)

  return root
}

const findMiddle = function(head) {
  if (!head) {
    return {
      root: null,
    }
  }

  if (!head.next) {
    return {
      root: {
        val: head.val,
        left: null,
        right: null,
      }
    }
  }

  let fast = head
  let slow = head
  let left = head
  let preMid = { next: head }
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    preMid = preMid.next
  }

  preMid.next = null

  return {
    root: {
      val: slow.val
    },
    left,
    right: slow.next
  }
}

const { linkedListGanerator } = require('./linkedList')

sortedListToBST(linkedListGanerator([1,2,3,4,5]))