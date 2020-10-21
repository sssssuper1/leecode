const weight = [2, 2, 4, 6, 3];
const capacify = 9;

// 回溯
function getMax1() {
  let max = -1;
  const memo = new Array(weight.length)
  const f = (i, w) => {
    if (w === capacify || i === weight.length) {
      if (w > max) max = w;
      return
    }

    if (!memo[i]) {
      memo[i] = new Array(capacify)
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

getMax1()