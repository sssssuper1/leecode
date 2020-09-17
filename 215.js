const findKthLargest = function (nums, k) {
  const heap = new Heap(nums)
  for (let i = k - 1; i--;) {
    heap.deleteMax()
  }

  return heap.heap[1]
}

class Heap {
  constructor(param) {
    this.heap = [NaN].concat(param)
    this.count = param.length
    for (let i = Math.floor(param.length / 2); i > 0; i--) {
      this.heapify(i)
    }
  }

  swap(i, j) {
    const tmp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = tmp
  }

  deleteMax() {
    if (this.count === 0) return;

    this.heap[1] = this.heap[this.count]
    this.count--;
    this.heapify(1);
  }

  heapify(i) {
    const heap = this.heap;
    const n = heap[i];
    while (true) {
      let maxP = i
      if (i * 2 <= this.count && n < heap[i * 2]) {
        maxP = i * 2;
      }

      if (i * 2 + 1 <= this.count && heap[maxP] < heap[i * 2 + 1]) {
        maxP = i * 2 + 1;
      }

      if (i === maxP) {
        break
      }

      this.swap(i, maxP)
      i = maxP
    }
  }
}

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 3))