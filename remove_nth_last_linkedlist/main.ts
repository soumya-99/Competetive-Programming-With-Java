class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let node: ListNode = new ListNode(2)
    node.next = null
    console.log(node)
  
    return node
}

console.log(removeNthFromEnd([1,2,3,4,5], 2))
