class TreeNode {
  constructor(value) {
    this.value = value
  }
  value = null
  left = null
  right = null
}

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

function find(node, value) {
  if (!node) return null

  if (value < node.value) {
    return find(node.left, value)
  } else if (value > node.value) {
    return find(node.right, value)
  } else {
    return node
  }
}

function insert(node, value) {
  if (!node) return new TreeNode(value)

  if (value < node.value) {
    if (!node.left) {
      node.left = new TreeNode(value)
    } else {
      insert(node.left, value)
    }
  } else {
    if (!node.right) {
      node.right = new TreeNode(value)
    } else {
      insert(node.right, value)
    }
  }

  return node
}

function del(root, value) {
  let node = root
  let parent = null
  let dr = ''
  while (node) {
    if (value < node.value) {
      parent = node
      dr = 'left'
      node = node.left
    } else if (value > node.value) {
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

    node.value = min.value
    minParent.left = null
  }

  return root
}

const root = insert(null, 5)
insert(root, 3)
insert(root, 6)
insert(root, 1)
insert(root, 4)
