const isValidBST = function(root) {
  if (!root) return true

  const check = (node, max, min) => {
    if (node.left) {
      if (node.left.val <= min || node.left.val >= node.val) return false
      if (!check(node.left, node.val, min)) return false
    }

    if (node.right) {
      if (node.right.val <= node.val || node.right.val >= max) return false
      if (!check(node.right, max, node.val)) return false
    }

    return true
  }

  return check(root, Infinity, -Infinity)
}


const testData = {
  val: 3,
  left: {
    val: 1,
    left: {
      val: 0
    },
    right: {
      val: 2,
    },
  },
  right: {
    val: 5,
    left: {
      val: 4,
    },
    right: {
      val: 6
    }
  }
}

console.log(isValidBST(testData))