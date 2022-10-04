class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

let list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null))))

function addNode(node: ListNode, val: number) {
    let newNode = new ListNode(val, null)
    let current = node
    while (current.next !== null) {
        current = current.next
    }
    current.next = newNode
}

function addFirst(node: ListNode, val: number) {
    let newNode = new ListNode(val, node)
    return newNode
}

function printList(node: ListNode | null) {
    let current = node
    while (current !== null) {
        console.log(current.val)
        current = current.next
    }
}

addFirst(list, 55)
addNode(list, 6)
printList(list)
// console.log(node)
