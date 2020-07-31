// 给出一个区间的集合，请合并所有重叠的区间。
const merge = function(intervals) {
  if (intervals.length < 2) return intervals

  intervals = quickSort(intervals)
  
  let result = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    if (result[result.length - 1][1] >= intervals[i][0]) {
      result[result.length - 1] = [result[result.length - 1][0], Math.max(intervals[i][1], result[result.length - 1][1])]
    } else {
      result.push(intervals[i])
    }
  }
  return result
};

function quickSort(list, start = 0, end = list.length - 1) {
  if (end - start < 1) return
  let i = j = start
  let flag = list[end]

  while (i <= end) {
    if (list[i][0] <= flag[0]) {
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

console.log(merge([[7,8],[1,3],[15,18],[2,6],[8,10]]))