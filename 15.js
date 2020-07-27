

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

console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]))