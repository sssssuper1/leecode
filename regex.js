function match(str, regx, i = 0, j = 0) {
  if (i >= str.length && j >= regx.length) {
    return true;
  }

  if (i >= str.length) {
    if ((regx[j] === '*' || regx[j] === '?') && j === regx.length - 1) {
      return true;
    } else {
      return false;
    }
  }

  if (j >= regx.length) {
    return false;
  }

  if (str[i] === regx[j]) {
    return match(str, regx, i + 1, j + 1);
  } else if (regx[j] === '*') {
    return match(str, regx, i + 1, j);
  } else if (regx[j] === '?') {
    return match(str, regx, i, j + 1);
  } else if (j < regx.length && regx[j + 1] === '?') {
    return match(str, regx, i + 1, j);
  } else {
    return false;
  }
}

console.log(match('abc', '*d'));
