function mergeSort(list, i = 0, j = list.length - 1) {
  if (j - i > 1) {
    let mid = Math.floor((j + i) / 2)
    let list1 = mergeSort(list, i, mid)
    let list2 = mergeSort(list, mid + 1, j)

    return mergeList(list1, list2)
  } else if (j - i === 1) {
    if (list[i] > list[j]) {
      return [list[j], list[i]]
    } else {
      return [list[i], list[j]]
    }
  } else {
    return [list[i]]
  }
}

function mergeList(list1, list2) {
  const result = []
  let i = 0, j = 0
  while (i < list1.length && j < list2.length) {
    if (list1[i] <= list2[j]) {
      result.push(list1[i])
      i++
    } else {
      result.push(list2[j])
      j++
    }
  }

  while (i < list1.length) {
    result.push(list1[i])
    i++
  }

  while (j < list2.length) {
    result.push(list2[j])
    j++
  }

  return result
}

let testList = [8, 2, 1, 4, 0, 2, 9, 3, 18, -2, 0]
console.log(mergeSort(testList))