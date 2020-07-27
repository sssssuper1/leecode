var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length >= nums2.length) {
    return getMiddle(nums1, 0, nums1.length - 1, nums2, 0, nums2.length - 1)
  } else {
    return getMiddle(nums2, 0, nums2.length - 1, nums1, 0, nums1.length - 1)
  }
};

function getMiddle(long, i1, j1, short, i2, j2) {
  let lm = getMidNumber(long, i1, j1)
  let sm = getMidNumber(short, i2, j2)
  if (Number.isNaN(sm) || lm === sm) {
    return lm
  }

  if (j2 === i2) {
    if (j1 === j2) {
      return (lm + sm) / 2
    }
    let offsetIndex = (j1 + i1) / 2
    if (lm > sm) {
      if (Number.isInteger(offsetIndex)) {
        offsetIndex = offsetIndex - 1
        if (long[offsetIndex] > sm) {
          return (long[offsetIndex] + long[offsetIndex + 1]) / 2
        } else {
          return (sm + lm) / 2
        }
      } else {
        offsetIndex = Math.floor(offsetIndex)
        if (long[offsetIndex] > sm) {
          return long[offsetIndex]
        } else {
          return sm
        }
      }
    } else {
      if (Number.isInteger(offsetIndex)) {
        offsetIndex = offsetIndex + 1
        if (long[offsetIndex] > sm) {
          return (sm + lm) / 2
        } else {
          return (long[offsetIndex] + long[offsetIndex - 1]) / 2
        }
      } else {
        offsetIndex = Math.ceil(offsetIndex)
        if (long[offsetIndex] > sm) {
          return sm
        } else {
          return long[offsetIndex]
        }
      }
    }
  }

  if (j2 - i2 === 1) {
    let maxMid = (j1 + i1) / 2
    if (lm >= short[i2] && lm <= short[j2]) {
      if (Number.isInteger(maxMid)) {
        return lm
      } else {
        return (Math.max(long[Math.floor(maxMid)], short[i2]) + Math.min(long[Math.ceil(maxMid)], short[j2])) / 2
      }
    } else if (lm > short[j2]) {
      if (Number.isInteger(maxMid)) {
        return Math.max(long[maxMid - 1], short[j2])
      } else {
        if (j1 - i1 === 1) {
          return (Math.max(long[i1], short[i2]) + short[j2]) / 2
        } else {
          if (short[i2] >= long[Math.floor(maxMid)] && short[j2] <= long[Math.ceil(maxMid)]) {
            return sm
          } else if (short[j2] > long[Math.floor(maxMid)] || short[j2] > long[Math.floor(maxMid - 1)]) {
            return (long[Math.floor(maxMid)] + short[j2]) / 2
          } else {
            return (long[Math.floor(maxMid)] + long[Math.floor(maxMid) - 1]) / 2
          }
        }
      }
    } else {
      if (Number.isInteger(maxMid)) {
        return Math.min(long[maxMid + 1], short[i2])
      } else {
        if (j1 - i1 === 1) {
          return (Math.min(long[j1], short[j2]) + short[i2]) / 2
        } else {
          if (short[i2] >= long[Math.floor(maxMid)] && short[j2] <= long[Math.ceil(maxMid)]) {
            return sm
          } else if (short[i2] < long[Math.ceil(maxMid)] || short[i2] < long[Math.ceil(maxMid) + 1]) {
            return (long[Math.ceil(maxMid)] + short[i2]) / 2
          } else {
            return (long[Math.ceil(maxMid)] + long[Math.ceil(maxMid) + 1]) / 2
          }
        }
      }
    }
  } else {
    let minOffset = Math.floor((j2 - i2) / 2)

    if (lm > sm) {
      j1 -= minOffset
      i2 += minOffset
    } else {
      i1 += minOffset
      j2 -= minOffset
    }

    return getMiddle(long, i1, j1, short, i2, j2)
  }
}

function getMidNumber(list, i, j) {
  if (list.length === 0) return NaN
  if (list.length === 1) return list[0]
  let midIndex = (j + i) / 2
  if (Number.isInteger(midIndex)) {
    return list[midIndex]
  } else {
    return (list[Math.floor(midIndex)] + list[Math.ceil(midIndex)]) / 2
  }
}

console.log(findMedianSortedArrays([1,2,3,8], [4,5,6,7]))