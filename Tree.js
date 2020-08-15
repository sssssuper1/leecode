class TreeNode {
  constructor(val) {
    this.val = val
  }
  val = null
  left = null
  right = null
}

function preOrder(node) {
  if (!node) return
  console.log(node.val)
  preOrder(node.left)
  preOrder(node.right)
}

function inOrder(node) {
  if (!node) return
  inOrder(node.left)
  console.log(node.val)
  inOrder(node.right)
}

function postOrder(node) {
  if (!node) return
  postOrder(node.left)
  postOrder(node.right)
  console.log(node.val)
}

function find(node, val) {
  if (!node) return null

  if (val < node.val) {
    return find(node.left, val)
  } else if (val > node.val) {
    return find(node.right, val)
  } else {
    return node
  }
}

function insert(node, val) {
  if (!node) return new TreeNode(val)

  if (val < node.val) {
    if (!node.left) {
      node.left = new TreeNode(val)
    } else {
      insert(node.left, val)
    }
  } else {
    if (!node.right) {
      node.right = new TreeNode(val)
    } else {
      insert(node.right, val)
    }
  }

  return node
}

function del(root, val) {
  let node = root
  let parent = null
  let dr = ''
  while (node) {
    if (val < node.val) {
      parent = node
      dr = 'left'
      node = node.left
    } else if (val > node.val) {
      parent = node
      dr = 'right'
      node = node.right
    } else {
      break
    }
  }

  if (!node.left && !node.right) {
    if (parent) {
      parent[dr] = null
    } else {
      return null
    }
  } else if (!node.left) {
    if (parent) {
      parent[dr] = node.right
    } else {
      return node.right
    }
  } else if (!node.left) {
    if (parent) {
      parent[dr] = node.left
    } else {
      return node.left
    }
  } else {
    let min = node.right
    let minParent = node
    while (min.left) {
      minParent = min
      min = min.left
    }

    node.val = min.val
    minParent.left = null
  }

  return root
}

module.exports = {
  insert,
  inOrder,
}

const root = insert(null, 5)
insert(root, 3)
insert(root, 6)
insert(root, 1)
insert(root, 4)
