function mergeTwoLists(list1, list2) {
  const merged = new ListNode(); // Dummy node
  let current = merged;

  let p1 = list1;
  let p2 = list2;
  console.log(merged)
  while (p1 && p2) {
    if (p1.val <= p2.val) {
      current.next = p1;
      p1 = p1.next;
    } else {
      current.next = p2;
      p2 = p2.next;
    }
    current = current.next;
  }

  // Append remaining nodes
  current.next = p1 || p2;

  return merged.next; // Exclude the dummy node and return merged list
}

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}