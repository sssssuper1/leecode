const numTrees = function(n) {
  if (n <= 0) return 0
  return cal(n)
}

const cache = {}

const cal = function(n) {
  if (n <= 1) return 1
  if (cache[n]) return cache[n]
  let sum = 0
  let i = 0
  while (i < n) {
    sum += cal(i) * cal(n - i - 1)
    i++
  }

  cache[n] = sum

  return sum
}

console.log(numTrees(4))