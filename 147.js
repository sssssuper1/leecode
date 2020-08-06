// 链表插入排序

const insertionSortList = function(head) {
  if (!head || !head.next) return head

  let i = head.next
  while (i) {
    if (i.val < head.val) {
      let tmp = head
      head.next = i.next
      while (head.pre && head.pre.val > i.val) {
        head = head.pre
      }

      if (head.pre) {
        i.next = head
        let g = head.pre
        head.pre = i
        g.next = i
        i.pre = g
      } else {
        i.next = head
        head.pre = i
      }

      head = tmp
      i = tmp.next
    } else {
      i.pre = head
      head = head.next
      i = i.next
    }
  }

  while (head.pre) {
    head = head.pre
    delete head.next.pre
  }

  return head
}

const { linkedListGanerator, print } = require('./linkedList')

const test = linkedListGanerator([-1,5,3,4,0])
print(test)
const result = insertionSortList(test)
print(result)