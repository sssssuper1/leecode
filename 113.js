const pathSum = function(root, sum) {
  if (!root) return []
  const result = []
  const getSum = (node, acc, path) => {
    const currrentPath = path.concat([node.val])
    if (!node.left && !node.right) {
      if (node.val + acc === sum) {
        result.push(currrentPath)
      }  
    } else {
      if (node.left) {
        getSum(node.left, acc + node.val, currrentPath)
      }

      if (node.right) {
        getSum(node.right, acc + node.val, currrentPath)
      }
    }
  }
  getSum(root, 0, [])
  return result
}

const test = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7
      },
      right: {
        val: 2
      },
    }
  },
  right: {
    val: 8,
    left: {
      val: 13,
    },
    right: {
      val: 4,
      left: {
        val: 5
      },
      right: {
        val: 1
      }
    }
  }
}

console.log(pathSum(test, 22))