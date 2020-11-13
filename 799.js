const champagneTower = function(poured, query_row, query_glass) {
  if (poured === 0) return 0
  const memo = new Array(100)
  memo[0] = new Array(1)
  memo[0][0] = poured
  for (let row = 0; row <= query_row; row++) {
    memo[row + 1] = new Array(row + 2).fill(0)
    for (let col = 0; col <= row; col++) {
      if (memo[row][col] > 1) {
        let next = (memo[row][col] - 1) / 2
        memo[row][col] = 1
        memo[row + 1][col] += next
        memo[row + 1][col + 1] += next
      }
    }
  }

  return memo[query_row][query_glass]
}


console.log(champagneTower(100000009,33,17))
