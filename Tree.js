class TreeNode {
  constructor(value) {
    this.value = value
  }
  value = null
  left = null
  right = null
}

let root = new TreeNode(0)
console.log(root.value, root.left, root.right)

function preOrder(node) {
  if (!node) return
  console.log(node.value)
  preOrder(node.left)
  preOrder(node.right)
}

function inOrder(node) {
  if (!node) return
  inOrder(node.left)
  console.log(node.value)
  inOrder(node.right)
}

function postOrder(node) {
  if (!node) return
  postOrder(node.left)
  postOrder(node.right)
  console.log(node.value)
}