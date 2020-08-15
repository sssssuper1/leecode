const inorderTraversal = function(root) {
  let result = []
  if (!root) return result
  let stack = [root]
  
  pushLeft(stack)
  while (stack.length > 0) {
    let cur = stack[stack.length - 1]
    result.push(cur.val)
    stack.pop()
    if (cur.right) {
      stack.push(cur.right)
      pushLeft(stack)
    }
  }
  
  return result
}

function pushLeft(stack) {
  let i = stack.length - 1
  while (true) {
    if (stack[i].left) {
      stack.push(stack[i].left)
      i++
    } else {
      break
    }
  }
}

const { insert, inOrder } = require('./Tree')
const root = insert(null, 5)
insert(root, 3)
insert(root, 6)
insert(root, 1)
insert(root, 4)

inOrder(root)
console.log(inorderTraversal(root))