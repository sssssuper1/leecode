function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const generateTrees = function (n) {
  if (n < 1) return null;
  if (n == 1) return [1];

  const result = getTreeByCount(1, n)
  return result.map(t => traverse(t))
}

const getTreeByCount = (l, r) => {
  if (l > r) {
    return [null];
  } else if (l == r) {
    return [new TreeNode(l)]
  } else {
    const result = []
    for (let i = l; i <= r; i++) {
      const leftList = getTreeByCount(l, i - 1)
      const rightList = getTreeByCount(i + 1, r)
      for (let left of leftList) {
        for (let right of rightList) {
          result.push(new TreeNode(i, left, right));
        }
      }
    }
    return result;
  }
}

const traverse = (tree) => {
  const result = []
  const queue = [tree]
  while (queue.length > 0) {
    const cur = queue.shift()
    if (cur) {
      result.push(cur.val)
      if (cur.left || cur.right) {
        queue.push(cur.left)
        queue.push(cur.right)
      }
    } else {
      result.push(null)
    }
  }
  if (!result[result.length - 1]) {
    result.pop()
  }
  return result
}

console.log(generateTrees(3))
