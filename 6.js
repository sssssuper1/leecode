const convert = function(s, numRows) {
  if (numRows < 2) return s
  if (s.length <= numRows) return s
  let result = ''
  let j = 0

  while (j < s.length) {
    result += s[j]
    j += (numRows - 1) * 2
  }

  j = 1
  let i = 2
  while (i < numRows) {
    let tmpN = numRows - i
    let isRev = true
    while (j < s.length) {
      result += s[j]
      j += (isRev ? tmpN : (i - 1)) * 2
      isRev = !isRev
    }
    j = i
    i++
  }

  j = numRows - 1
  while (j < s.length) {
    result += s[j]
    j += (numRows - 1) * 2
  }

  return result
}

console.log(convert('LEETCODEISHIRING', 4))