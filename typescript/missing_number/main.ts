function missingNumber(nums: number[]): number {
    let sum: number = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    let N = nums.length
    return N * (N + 1) / 2 - sum
}