// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

function runningSum(nums: number[]): number[] {
    let result: number[] = []
    let sum: number = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        result.push(sum)
    }
    return result
}

console.log(runningSum([1, 2, 3, 4, 5]))
