function minSubArrayLen(nums: number[], target: number): number {
    let left = 0
    let right = 0
    let sum = 0
    let min = Infinity
    while (right < nums.length) {
        sum += nums[right]
        while (sum >= target) {
            min = Math.min(min, right - left + 1)
            sum -= nums[left]
            left++
        }
        right++
    }
    return min === Infinity ? 0 : min
}