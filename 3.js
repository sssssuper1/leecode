const lengthOfLongestSubstring = function(s) {
  const cache = new Map()
  let max = 0
  let cur = 0
  let i = 0
  let last = 0
  while (i < s.length) {
    const flag = cache.get(s[i])
    if (flag > -1) {
      cache.set(s[i], i)
      clearCache(cache, s, last, flag)
      last = flag + 1
      cur = i - flag
    } else {
      cache.set(s[i], i)
      cur++
      max = Math.max(max, cur)
    }
    i++
  }

  return max
}

function clearCache(cache ,s, i, j) {
  while (i < j) {
    cache.set(s[i], -1)
    i++
  }
}

console.log(lengthOfLongestSubstring('dvdf'))