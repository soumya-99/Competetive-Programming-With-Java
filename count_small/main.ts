// O(n^2) -> time limit exceeded

// function countSmaller(nums: number[]): number[] {
//     let count: number = 0
//     let result: number[] = []
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] > nums[j]) {
//                 count++
//             }
//         }
//         result.push(count)
//         count = 0
//     }
//     return result
// }

function countSmaller(nums: number[]): number[] {
    let result: number[] = []
    let sorted: number[] = []
    for (let i = nums.length - 1; i >= 0; i--) {
        let index = findIndex(sorted, nums[i])
        result.push(index)
        sorted.splice(index, 0, nums[i])
    }
    return result.reverse()
}

function findIndex(sorted: number[], target: number): number {
    let left = 0
    let right = sorted.length
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (sorted[mid] >= target) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
}

console.log(countSmaller([12, 1, 2, 3, 0, 11, 4]))
