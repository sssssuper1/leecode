const soupServings = function(N) {
  if (N >= 5000) return 1 - 10**(-6)
  const n = Math.ceil(N / 25)
  const memo = {}
  const dp = (a, b) => {
    if (a <= 0 && b <= 0) {
      return 0.5
    } else if (a <= 0 && b > 0) {
      return 1
    } else if (a > 0 && b <= 0) {
      return 0
    } else {
      const key = `${a}-${b}`
      if (!memo[key]) {
        memo[key] = (dp(a - 4, b) + dp(a - 3, b - 1) + dp(a - 2, b - 2) + dp(a - 1, b - 3)) * 0.25
      }
      return memo[key]
    }
  }
  
  return dp(n, n)
}

console.log(soupServings(51))