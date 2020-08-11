const searchRange = function(nums, target) {
  let left = getFirstTargetIndex(nums, target)
  let right  = getLastTargetIndex(nums, target)

  return [left, right]
}

function getFirstTargetIndex(list, target, start = 0, end = list.length - 1) {
  if (end - start <= 1) {
    return list[start] === target ? start : list[end] === target ? end : -1
  }

  const mid = Math.floor((start + end) / 2)
  if (list[mid] >= target) {
    return getFirstTargetIndex(list, target, start, mid)
  } else {
    return getFirstTargetIndex(list, target, mid, end)
  }
}

function getLastTargetIndex(list, target, start = 0, end = list.length - 1) {
  if (end - start <= 1) {
    return list[end] === target ? end : list[start] === target ? start : -1
  }

  const mid = Math.ceil((start + end) / 2)
  if (list[mid] > target) {
    return getLastTargetIndex(list, target, start, mid)
  } else {
    return getLastTargetIndex(list, target, mid, end)
  }
}

console.log(searchRange([5,7,7,8,8,10], 6))