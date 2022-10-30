// Tree (root)
// Node (value, leftChild, rightChild)
// insert(value)
// find(value): boolean

// var current = root
// current = current.leftChild

class TreeNode {
    val: number
    leftChild: TreeNode | null
    rightChild: TreeNode | null
    constructor(val?: number, leftChild?: TreeNode | null, rightChild?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.leftChild = (leftChild === undefined ? null : leftChild)
        this.rightChild = (rightChild === undefined ? null : rightChild)
    }

    private root = new TreeNode()

//     insert(value: number): void {
//     if (root === null) {
//         root = new TreeNode(value)
//         return
//     }
// }
}



