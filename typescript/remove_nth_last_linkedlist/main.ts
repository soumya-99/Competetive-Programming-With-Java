class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//     let curr = head
//     let length = 0
//     while (curr) {
//         length++
//         curr = curr.next
//     }
//     let index = length - n
//     if (index === 0) {
//         return head?.next
//     }
//     curr = head
//     while (curr) {
//         if (index === 1) {
//             curr.next = curr.next?.next
//             break
//         }
//         index--
//         curr = curr.next
//     }
//     return head
// }

// console.log(removeNthFromEnd(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))), 2))
