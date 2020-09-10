class Heap {
  constructor(param) {
    if (Array.isArray(param)) {
      this.heap = [NaN].concat(param)
      this.count = param.length
      for (let i = Math.floor(param.length / 2); i > 0; i--) {
        this.heapify(i)
      }
    } else {
      this.heap = new Array(capacity + 1)
      this.count = 0
    }
  }

  swap(i, j) {
    const tmp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = tmp
  }

  insert(value) {
    const heap = this.heap;
    if (this.count >= heap.length - 1) return;

    this.count++;
    heap[this.count] = value;

    let cur = this.count;
    let par = Math.floor(cur / 2);
    while (value > heap[par]) {
      this.swap(cur, par)
      cur = par;
      par = Math.floor(cur / 2);
    }
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

const target = [7, 3, 1, 9, 4, 0, 6, 2]
const h = new Heap(target)
console.log(h.heap)
const result = []
for (let i = target.length; i > 0; i--) {
  result.push(h.heap[1])
  h.deleteMax()
}

console.log(result)