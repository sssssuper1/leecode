const matrix = [
  [1, 3, 5, 9],
  [2, 1, 3, 4],
  [5, 2, 6, 7],
  [6, 8, 4, 3],
]

const col = matrix.length - 1
const row = matrix[0].length - 1

function trace() {
  let min = Infinity

  const f = (i, j, l) => {
    if (i === col && j === row) {
      if (l < min) min = l
      return
    }

    if (i < col) {
      f(i + 1, j, l + matrix[i + 1][j])
    }

    if (j < row) {
      f(i, j + 1, l + matrix[i][j + 1])
    }
  }

  f(0, 0, matrix[0][0])

  console.log(min)
}

function dp() {
  const memo = new Array(col + 1)
  memo[0] = new Array(row + 1)
  memo[0][0] = matrix[0][0]
  for (let i = 1; i <= col; i++) {
    memo[i] = new Array(row + 1)
    memo[i][0] = memo[i - 1][0] + matrix[i][0]
  }

  for (let j = 1; j <= row; j++) {
    memo[0][j] = memo[0][j - 1] + matrix[0][j]
  }

  for (let i = 1; i <= col; i++) {
    for (let j = 1; j <= row; j++) {
      memo[i][j] = Math.min(memo[i - 1][j], memo[i][j - 1]) + matrix[i][j]
    }
  }

  console.log(memo)
  console.log(memo[col][row])
}

function eq(i, j) {
  if (i === 0 && j === 0) {
    return matrix[0][0]
  }

  if (i === 0) {
    return matrix[0][j - 1] + matrix[i][j]
  }

  if (j === 0) {
    return matrix[i - 1][0] + matrix[i][j]
  }

  return Math.min(eq(i - 1, j), eq(i, j - 1)) + matrix[i][j]
}

console.log(eq(col, row))
