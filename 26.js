const removeDuplicates = function(nums) {
  if (nums.length < 2) return nums.length
  let i = 0;
  let j = 0;
  while (i < nums.length) {
    if (nums[i] === nums[j]) {
      i++
    } else {
      if (i - j > 1) {
        j++
        let tmp = nums[j]
        nums[j] = nums[i]
        nums[i] = tmp
      } else {
        j++
      }
      i++
    }
  }

  return j + 1
}

console.log(removeDuplicates([0,0,1,1,2,2,3,3,4,4,5,5]))