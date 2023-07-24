function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next;
}



var addTwoNumbers = function (l1, l2) {
  let arrayVal1 = linkedListToArray(l1)
  let arrayVal2 = linkedListToArray(l2)
  let val1 = Number(arrayVal1.reverse().join(''))
  let val2 = Number(arrayVal2.reverse().join(''))
  let sum = val1 + val2
  let revArr = Array.from(String(sum), Number).reverse();
  let dummyHead = new ListNode(-1);
  let currentNode = dummyHead;
  for (let i = 0; i < revArr.length; i++) {
    currentNode.next = new ListNode(revArr[i]);
    currentNode = currentNode.next;
  }

  return dummyHead.next;
}

let l1= new ListNode(5, new ListNode(6, new ListNode(4)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));



console.log(addTwoNumbers(l1,l2))

function linkedListToArray(list) {
  let res = [];
  let curr = list;
  while (curr) {  // while curr not null
    res.push(curr.val);
    curr = curr.next;
  }
  return res
}