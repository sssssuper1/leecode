const divide = function(dividend, divisor) {
  let minus = dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0
  dividend = abs(dividend)
  divisor = abs(divisor)
  
  let result

  if (divisor === 1) {
    result = dividend
  } else {
    result = divise(dividend, divisor)
  }


  result = minus ? -result : result
  if (result > 2**31 - 1 || result < (-2)**31) return 2**31 - 1
  return result
};

function divise(d, r) {
  if (d < r) return 0
  let b = 1
  let s = r
  while (d > r) {
    if (r << 1 > 0) {
      r = r << 1
      b = b << 1
    } else {
      return b + divise(d - r, s)
    }
  }

  if (r > d) {
    return (b >> 1) + divise(d - (r >> 1), s)
  } else {
    return b
  }
}

function abs(num) {
  return num > 0 ? num : -num
}

console.log(divide(2147483647, 3))