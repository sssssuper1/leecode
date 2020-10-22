const weight = [2, 2, 4, 6, 3];
const value = [3, 4, 8, 9, 6];
const capacify = 9;

// 回溯
function getMax1() {
  let max = -1;
  const memo = new Array(weight.length)
  memo.fill(new Array(capacify))
  const f = (i, w) => {
    if (w === capacify || i === weight.length) {
      if (w > max) max = w;
      return
    }

    if (memo[i][w]) return;
    memo[i][w] = true;

    f(i + 1, w)
    if (w + weight[i] <= capacify) {
      f(i + 1, w + weight[i])
    }
  }

  f(0, 0)

  console.log(max);
}

function getMaxValue1() {
  let max = -Infinity

  const f = (i, w, v) => {
    if (w === capacify || i === weight.length) {
      if (v > max) max = v
      return
    }

    f(i + 1, w, v)
    if (w + weight[i] <= capacify) {
      f(i + 1, w + weight[i], v + value[i])
    }
  }

  f(0, 0, 0)

  console.log(max)
}

// 动态规划
function getMax2() {
  const memo = new Array(capacify + 1)

  memo[0] = true
  if (weight[0] <= capacify) memo[weight[0]] = true;

  for (let i = 1; i < weight.length; i++) {
    for (let j = capacify - weight[i]; j >= 0; j--) {
      if (memo[j]) memo[j + weight[i]] = true
    }
  }

  for (let k = capacify; k >= 0; k--) {
    if (memo[k]) {
      console.log(k)
      break
    }
  }
}

function getMaxValue2() {
  const memo = new Array(capacify + 1)

  memo[0] = 0
  if (weight[0] <= capacify) memo[weight[0]] = value[0]

  for (let i = 1; i < weight.length; i++) {
    for (let j = capacify - weight[i]; j >= 0; j--) {
      if (memo[j] !== undefined) {
        const cur = j + weight[i]
        const tar = memo[j] + value[i]
        if (!memo[cur] || memo[cur] < tar) memo[cur] = tar
      }
    }
  }

  let max = -Infinity;

  for (let k = capacify; k >= 0; k--) {
    if (memo[k] > max) max = memo[k]
  }

  console.log(max)
}

getMaxValue2()
