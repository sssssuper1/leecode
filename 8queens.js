const result = [];

function cal8queens(row) {
  if (row === 8) {
    printQueens(result);
    return;
  }

  for (let col = 0; col < 8; col++) {
    if (isOk(row, col)) {
      result[row] = col;
      cal8queens(row + 1);
    }
  }
}

function isOk(row, col) {
  let leftUp = col - 1, rightUp = col + 1;
  for (let i = row - 1; i >= 0; i--) {
    if (result[i] === col) return false;
    if (leftUp >= 0 && result[i] === leftUp) return false;
    if (rightUp < 8 && result[i] === rightUp) return false;
    leftUp--;
    rightUp++;
  }
  return true;
}

function printQueens(list) {
  let all = ''
  for (let row = 0; row < result.length; row++) {
    let str = '';
    for (let col = 0; col < 8; col++) {
      if (list[row] === col) {
        str += 'Q ';
      } else {
        str += '* ';
      }
    }
    all += str + '\r\n';
  }
  console.log(all);
}

cal8queens(0);