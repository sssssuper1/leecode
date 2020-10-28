const longestPalindrome = function(s) {
  if (!s) return ''

  if (s.length === 1) return s

  let max = s[0]

  let i = 0.5

  while (i < s.length - 0.5) {
    let l = i, r = i
    if (Number.isInteger(i)) {
      l = i - 1
      r = i + 1
    } else {
      l = Math.floor(i)
      r = Math.ceil(i)
    }

    while (l >= 0 && r < s.length) {
      if (s[l] === s[r]) {
        if (r - l + 1 > max.length) {
          max = s.slice(l, r + 1)
        }
        l--
        r++
      } else {
        break
      }
    }

    i += 0.5
  }

  return max
}

console.log(longestPalindrome('aba'))