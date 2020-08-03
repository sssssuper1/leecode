// 计数排序
const sortColors = function(nums) {
  const tmp = [...nums]
  const count = [0, 0, 0]
  nums.forEach(n => {
    count[n] += 1
  })

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i-1]
  }

  for (let j = tmp.length; j--;) {
    nums[--count[tmp[j]]] = tmp[j]
  }

  return nums
}

console.log(sortColors([2,0,2,1,1,0]))