// 归并

const sortList = function(head) {
  return sort(head).head;
}

function sort(head) {
  if (!head || !head.next) {
    return {
      head: head,
      tail: null,
    };
  }
  let result = { next: null };
  let l = result;
  let flag = head;
  let cur = head;

  while (cur.next) {
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
  const left = sort(result.next);
  flag.next = right.head;
  if (left.tail) {
    left.tail.next = flag;
  } else {
    l.next = flag;
  }

  return {
    head: left.head ? left.head : result.next,
    tail: right.tail ? right.tail : right.head ? right.head : flag, 
  };
}

const { linkedListGanerator, print } = require('./linkedList');

const input = linkedListGanerator([3,2,1]);

print(sortList(input));