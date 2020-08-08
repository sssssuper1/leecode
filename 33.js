const search = function(nums, target) {
  if (nums.length === 0) {
    return -1
  } else if (nums.length === 1) {
    return nums[0] === target ? 0 : -1
  } else {
    if (nums[0] < nums[nums.length - 1]) {
      return binary(nums, target)
    } else {
      const maxIdx = findMax(nums)
      if (target > nums[0]) {
        return binary(nums, target, 0, maxIdx)
      } else if (target < nums[0]) {
        return binary(nums, target, maxIdx + 1)
      } else {
        return 0
      }
    }
  }
};

function findMax(nums, start = 0, end = nums.length - 1, max = nums[0]) {
  if (end - start < 2) return nums[end] > nums[start] ? end : start
  const mid = Math.ceil((start + end) / 2)

  if (nums[mid] > max) {
    return findMax(nums, mid, end)
  } else if (nums[mid] < max) {
    return findMax(nums, start, mid)
  } else {
    return mid
  }
}

function binary(nums, target, start = 0, end = nums.length - 1) {
  if (end - start <= 1) {
    if (target === nums[end]) {
      return end
    } else if (target === nums[start]) {
      return start
    } else {
      return -1
    }
  } else {
    const mid = Math.floor((start + end) / 2)
    if (nums[mid] > target) {
      return binary(nums, target, start, mid - 1)
    } else if (nums[mid] < target) {
      return binary(nums, target, mid + 1, end)
    } else {
      return mid
    }
  }
}

console.log(search([1,3], 0))