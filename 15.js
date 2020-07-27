const threeSum = function(nums) {
  if (nums.length < 3) return []
  const result = []
  const cache = {}
  quickSort(nums)
  if (nums[0] > 0 || nums[nums.length - 1] < 0) return []
  for (let i = 0; i < nums.length - 1; i++) {
    if (cache[nums[i]]) continue
    cache[nums[i]] = true
    let l = i + 1
    let r = nums.length - 1
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum === 0) {
        result.push([nums[i], nums[l], nums[r]])
        do {
          r--
        } while (r > l && nums[r] === nums[r + 1])
        do {
          l++
        } while (r > l && nums[l] === nums[l - 1])
      } else if (sum > 0) {
        do {
          r--
        } while (r > l && nums[r] === nums[r + 1])
      } else {
        do {
          l++
        } while (r > l && nums[l] === nums[l - 1])
      }
    }
  }

  return result
}

function quickSort(list, start = 0, end = list.length - 1) {
  if (end - start < 1) return
  let i = j = start
  let f = end

  while (i <= f) {
    if (list[i] <= list[f]) {
      if (i !== j) {
        [list[i], list[j]] = [list[j], list[i]]
      }
      j++
    }
    i++
  }

  quickSort(list, start, j - 2)
  quickSort(list, j, end)

  return list
}

const threeSum_back = function(nums) {
  if (nums.length < 3) return []
  let result = []
  const skip = {};
  let skipTwp = {}
  for (let i = 0; i < nums.length; i++) {
    if (skip[nums[i]]) continue
    const stash = {};
    const cache = {};
    for (let j = i + 1; j < nums.length; j++) {
      if (cache[nums[j]] || (skipTwp[nums[i]] && skip[nums[j]])) continue
      if (stash[nums[j]] !== undefined) {
        result.push([nums[i], stash[nums[j]], nums[j]])
        cache[nums[j]] = true
        cache[stash[nums[j]]] = true
      } else {
        let sum = nums[i] + nums[j]
        stash[-sum] = nums[j]
      }
    }
    skip[nums[i]] = true
    skipTwp = Object.assign(skipTwp, cache)
  }

  return result
}

// console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]))
console.log(threeSum([0,0,0,0]))