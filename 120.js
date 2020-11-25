const minimumTotal = function (triangle) {
  const memo = new Array(triangle.length).fill(0)
  memo[0] = triangle[0][0]
  for (let i = 1; i < triangle.length; i++) {
    memo[triangle[i].length - 1] = memo[triangle[i].length - 2] + triangle[i][triangle[i].length - 1]
    for (let j = triangle[i].length - 2; j > 0; j--) {
      memo[j] = Math.min(memo[j], memo[j - 1]) + triangle[i][j]
    }
    memo[0] = memo[0] + triangle[i][0]
  }

  let min = Infinity
  for (let x = 0; x < memo.length; x++) {
    if (memo[x] < min) min = memo[x];
  }

  return min;
}

console.log(minimumTotal([
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3],
]))