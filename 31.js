const nextPermutation = function(nums) {
  if (nums.length < 2) return nums

  let i = nums.length - 2
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--
  }

  if (i >= 0) {
    let j = nums.length - 1
    while (j > i && nums[i] >= nums[j]) {
      j--
    }
    swap(nums, i, j)
  }
  reverse(nums, i + 1)

  return nums
}

function reverse(nums, start) {
  let i = start
  let j = nums.length - 1
  while (i < j) {
    swap(nums, i, j)
    i++
    j--
  }
}

function swap(nums, i, j) {
  let tmp = nums[j]
  nums[j] = nums[i]
  nums[i] = tmp
}

console.log(nextPermutation([1,3,6,5,2]))