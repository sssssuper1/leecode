const keyboard = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
}

const letterCombinations = function(digits) {
  if (!digits) return []

  const result = []
  dic(digits, 0, '', result)
  return result
}

const dic = (digits, i, sum, result) => {
  if (i >= digits.length) {
    result.push(sum)
    return
  }

  const cur = digits[i]
  if (!keyboard[cur]) return
  
  keyboard[cur].forEach(s => dic(digits, i + 1, sum + s, result))
}

console.log(letterCombinations('23'))