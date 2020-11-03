const generateParenthesis = function(n) {
  const result = []

  const generator = (cur, left, right) => {
    if (left + right < n * 2) {
      if (left < n) generator(cur + '(', left + 1, right)

      if (right < left) generator(cur + ')', left, right + 1)
    } else {
      result.push(cur)
    }
  }

  generator('(', 1, 0)

  return result
}

console.log(generateParenthesis(1))