function reverseList(head) {
  let prev = null;
  let current = head;
  while (current !== null) {

    //  .next
    let x = current.next;
    current.next = prev;
    console.log(current.next)
    prev = current;
    console.log("prev",prev)
    current = x;
  }

  return prev;
}


const linkedList = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null,
      },
    },
  },
};

const head = [1,2,3,4,5]

console.log(reverseList(linkedList))
