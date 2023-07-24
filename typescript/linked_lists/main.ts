class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// let list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
let list = new ListNode()

function addNode(head: ListNode | null, val: number): ListNode | null {
    let curr = head
    if (curr === null) {
        return new ListNode(val)
    }
    while (curr.next) {
        curr = curr.next
    }
    curr.next = new ListNode(val)
    return head
}

function reverseList(head: ListNode | null): ListNode | null {
    let prev = new ListNode()
    let curr = head
    while (curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}

function printList(head: ListNode | null): void {
    let curr = head
    while (curr) {
        console.log(curr.val)
        curr = curr.next
    }
}

addNode(list, 58)
addNode(list, 76)
addNode(list, 16)

console.log(list)