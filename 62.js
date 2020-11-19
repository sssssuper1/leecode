const uniquePaths_ab = function(m, n) {
  let result = 0
  const go = (row, col) => {
    if (row === m && col === n) {
      result++
    }

    if (row < m) {
      go(row + 1, col)
    }

    if (col < n) {
      go(row, col + 1)
    }
  }

  go(1, 1)

  return result
}

const cache = {}

const uniquePaths = function(m, n) {
  if (m === 1 || n === 1) return 1

  if (cache[`${m}-${n}`]) {
    return cache[`${m}-${n}`]
  } else if (cache[`${n}-${m}`]) {
    return cache[`${n}-${m}`]
  } else {
    cache[`${m}-${n}`] = uniquePaths(m - 1, n) + uniquePaths(m, n - 1)
    return cache[`${m}-${n}`]
  }
}

console.log(uniquePaths(19, 13))