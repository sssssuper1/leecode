const sortList = function(head) {
  return sort(head).head;
}

function sort(head, end = null) {
  if (!head || !head.next || (head === end) || (end && end.next === head)) return {
    head: head,
    tail: null,
  };
  let result = { next: null };
  let l = result;
  let flag = head;
  let cur = head;

  while (cur.next && cur.next !== end) {
    if (cur.next.val < flag.val) {
      let tmp = cur.next;
      cur.next = tmp.next;
      tmp.next = null;
      l.next = tmp;
      l = l.next;
    } else {
      cur = cur.next;
    }
  }

  const right = sort(flag.next);
  const left = sort(result.next, flag);
  if (left.tail) {
    left.tail.next = right.head;
  } else {
    result.next = right.head;
  }

  return {
    head: result.next,
    tail: right ? right.tail : null, 
  };
}

const { linkedListGanerator, print } = require('./linkedList');

const input = linkedListGanerator([-1,5,3,4,0]);

print(sortList(input));