const bulbSwitch = function(n) {
  if (n <= 0) {
    return 0
  } else {
    let i = 0
    do {
      i++
      n = n - 2*i - 1
    } while(n > 0)

    return i
  }
}

// 求平方根

console.log(bulbSwitch(16))