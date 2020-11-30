const rob_bk = function(nums) {
  if (nums.length === 1) return nums[0]

  const memo = {}

  const decide = (i, j, l) => {
    if (i === j) {
      return l[i]
    } else if (j - i === 1) {
      return Math.max(l[i], l[j])
    } else {
      const key = `${i}-${j}`
      if (memo[key]) {
        return memo[key]
      }
  
      memo[key] = Math.max(
        l[i] + decide(i + 2, j, l),
        l[j] + decide(i, j - 2, l),
        decide(i + 1, j - 1, l)
      )
      console.log(key)
      return memo[key]
    }
  }

  return Math.max(decide(0, nums.length - 2, nums), decide(1, nums.length - 1, nums))
}

const rob = function(nums) {
  if (nums.length === 1) return nums[0]
  const decide = (l, i, j) => {
    let pre = 0, cur = 0, tmp
    for (let x = i; x < j; x++) {
      tmp = cur
      cur = Math.max(pre + l[x], cur)
      pre = tmp
    }

    return cur
  }

  return Math.max(decide(nums, 0, nums.length - 1), decide(nums, 1, nums.length))
}

console.log(rob([1]))

