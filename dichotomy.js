// 查找第一个等于目标值的元素索引
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

// 查找第一个等于目标值的元素索引
function getLastTargetIndex(list, target, start = 0, end = list.length - 1) {
  if (end - start <= 1) {
    return list[end] === target ? end : list[start] === target ? start : -1
  }

  const mid = Math.floor((start + end) / 2)
  if (list[mid] > target) {
    return getLastTargetIndex(list, target, start, mid)
  } else {
    return getLastTargetIndex(list, target, mid, end)
  }
}

// 查找第一个大于等于目标值的元素索引
function getFirstLargeOrEqualThanTargetIndex(list, target, start = 0, end = list.length - 1) {
  if (target > list[end]) return -1
  if (end - start <= 1) {
    return list[start] >= target ? start : end
  }

  const mid = Math.floor((start + end) / 2)
  if (list[mid] >= target) {
    return getFirstLargeOrEqualThanTargetIndex(list, target, start, mid)
  } else {
    return getFirstLargeOrEqualThanTargetIndex(list, target, mid, end)
  }
}

// // 查找最后一个小于等于目标值的元素索引
function getLastLessOrEqualTargetIndex(list, target, start = 0, end = list.length - 1) {
  if (target < list[start]) return -1
  if (end - start <= 1) {
    return list[end] <= target ? end : start
  }

  const mid = Math.floor((start + end) / 2)
  if (list[mid] > target) {
    return getLastLessOrEqualTargetIndex(list, target, start, mid)
  } else {
    return getLastLessOrEqualTargetIndex(list, target, mid, end)
  }
}

console.log(getLastLessOrEqualTargetIndex([1,2,3,3,5,6,7,8], 0))