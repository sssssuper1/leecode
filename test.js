function getTriangleThirdPoint(c1, c2, radius, offset) {
  const a = c2.radius + radius + offset;
  const b = c1.radius + radius + offset;
  const c = Math.sqrt((c2.x - c1.x)**2 + (c2.y - c1.y)**2);

  let angleAB = Math.PI * (1 - (c2.y > c1.y ? 1 : -1) / 2) - Math.atan((c2.x - c1.x) / (c2.y - c1.y));
  if (angleAB < 0) {
    angleAB += Math.PI * 2;
  }
  
  let angleAC = angleAB - Math.acos((b**2 + c**2 - a**2) / (2 * b * c));
  let x = c1.x + b * Math.cos(angleAC);
  let y = c1.y + b * Math.sin(angleAC);
  let polarR = Math.sqrt(x**2 + y**2)
  if (polarR < c1.polarR || polarR < c2.polarR) {
    angleAC = angleAB + Math.acos((b**2 + c**2 - a**2) / (2 * b * c));
    x = c1.x + b * Math.cos(angleAC);
    y = c1.y + b * Math.sin(angleAC);
  }
  return [x, y];
}

const c1 = {
  x: 12,
  y: 31,
  radius: 8,
  polarR: 33.7,
}

const c2 = {
  x: 29,
  y: 18,
  radius: 8.8,
  polarR: 34.4,
}

// console.log(getTriangleThirdPoint(c1, c2, 7.17, 4))

function move(l) {
  let i = 0
  let j = 0
  while (i < l.length) {
    if (l[i] === 0) {
      i++
    } else {
      if (i > j) {
        [l[i], l[j]] = [l[j], l[i]]
      }
      i++
      j++
    }
  }

  return l
}

// console.log(move([0,1,0,3,12]))

const mq = {}
const memo = {}

function on(action, cb) {
  const id = Symbol()
  const event = { cb, id }
  if (mq[action]) {
    mq[action].push(event)
  } else {
    mq[action] = [event]
  }

  memo[id] = action

  return id
}

function emit(action, ...args) {
  if (mq[action]) {
    mq[action].forEach(e => e.cb(...args))
  }
}

function off(id) {
  if (!memo[id]) return
  mq[memo[id]] = mq[memo[id]].filter(e => e.id !== id)
}
