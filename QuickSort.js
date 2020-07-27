function quickSort(list, start = 0, end = list.length - 1) {
  if (end - start < 1) return
  let i = j = start
  let flag = list[end]

  while (i <= end) {
    if (list[i] <= flag) {
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

console.log(quickSort([8, 2, 1, 4, 0, 2, 9, 3, 18, -2, 0]))