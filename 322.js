const coinChange = function(coins, amount) {
  const memo = { }
  const fn = (n) => {
    if (n === 0) {
      return 0
    } else {
      if (!memo[n]) {
        const results = []
        for (let c of coins) {
          let del = n - c
          if (del >= 0) {
            let next = fn(del)
            if (next >= 0) {
              results.push(next)
            }
          }
        }
  
        if (results.length > 0) {
          memo[n] = 1 + Math.min(...results)
        } else {
          memo[n] = -1
        }
      }

      return memo[n]
    }
  }

  return fn(amount)
}

console.log(coinChange([5], 11))