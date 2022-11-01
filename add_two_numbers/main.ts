// function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carry = 0): ListNode | null {
//     if (l1 || l2) {
//       const next1 = getNextNode(l1)
//       const next2 = getNextNode(l2)
//       const sum = getNodeValue(l1) + getNodeValue(l2) + carry
//       const nextCarry = sum >= 10 ? 1 : 0

//       return new ListNode(sum % 10, addTwoNumbers(next1, next2, nextCarry))
//     } else if (carry) { return new ListNode(1) }

//     return null
//   }

//   function getNodeValue(node: ListNode | null): number {
//     return node && node.val ? node.val : 0
//   }

//   function getNextNode(node: ListNode | null): ListNode | null {
//     return node && node.next ? node.next : null
//   }




class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let head = new ListNode(0)
    let curr = head
    let carry = 0
    while (l1 || l2 || carry) {
        let sum = 0
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        sum += carry
        carry = Math.floor(sum / 10)
        curr.next = new ListNode(sum % 10)
        curr = curr.next
    }
    return head.next
}

console.log(
    addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3))),
                  new ListNode(5, new ListNode(6, new ListNode(4))))
)
