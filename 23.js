function ListNode(val) {
  this.val = val;
  this.next = null;
}

function linkedListGanerator(list) {
  const head = {}
  let cur = head
  list.forEach(v => {
    const node = new ListNode(v)
    cur.next = node
    cur = node
  });

  return head.next;
}

/**
  [
    1->4->5,
    1->3->4,
    2->6
  ]

  1->1->2->3->4->4->5->6
 */

var mergeKLists = function(lists) {
  if (lists.length === 0) return null
  const head = {
    next: null
  }
  let cur = head
  lists = lists.filter(l => l)
  quickSortDesc(lists, 0, lists.length - 1)

  while (lists.length > 0) {
    cur.next = lists[lists.length - 1]
    lists[lists.length - 1] = lists[lists.length - 1].next
    if (!lists[lists.length - 1]) {
      lists.pop()
    } else {
      reOrder(lists)
    }
    cur = cur.next
  }

  return head.next
};

let l1 = linkedListGanerator([1, 4, 5])
let l2 = linkedListGanerator([1, 3, 4])
let l3 = linkedListGanerator([2, 6])

let testList = [l1, l2, l3]

function quickSortDesc(l, start, end) {
  if (start >= end) return
  let i = start
  let j = start
  let flag = end

  while (i <= end) {
    if (l[i].val >= l[flag].val) {
      if (i !== j) {
        let tmp = l[i]
        l[i] = l[j]
        l[j] = tmp
      }
      j++
    }
    i++
  }

  quickSortDesc(l, start, j - 2)
  quickSortDesc(l, j, end)
}

function reOrder(l) {
  if (l.length < 2) return
  let tail = l[l.length - 1]
  let i = l.length - 2
  while (i >= 0) {
    if (l[i].val < tail.val) {
      l[i + 1] = l[i]
      i--
    } else {
      l[i + 1] = tail
      break
    }
  }

  if (l[0].val < tail.val) {
    l[0] = tail
  }
}

console.log(mergeKLists(testList))
