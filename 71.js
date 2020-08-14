const simplifyPath = function(path) {
  path += '/'
  const stack = []
  let i = 0
  let cur = ''
  while (i < path.length) {
    if (path[i] === '/') {
      if (cur === '..') {
        stack.pop()
      } else if (cur !== '' && cur !== '.') {
        stack.push(cur)
      }
      cur = ''
    } else {
      cur += path[i]
    }
    i++
  }

  let result = ''
  if (stack.length === 0) {
    result = '/'
  } else {
    stack.forEach(s => {
      result = result + '/' + s
    })
  }
  
  return result
}

console.log(simplifyPath('/a//b////c/d//././/..'))