class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function deleteMiddle(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null)
        return null
    let prev = new ListNode(0)
    let slow = head
    let fast = head

    while (fast !== null && fast.next !== null) {
        prev = slow
        slow = slow.next as ListNode
        fast = fast.next.next as ListNode
    }

    prev.next = slow.next
    return head
}

console.log(deleteMiddle(new ListNode(1, new ListNode(3, new ListNode(4, new ListNode(7, new ListNode(1, new ListNode(2, new ListNode(6)))))))))
