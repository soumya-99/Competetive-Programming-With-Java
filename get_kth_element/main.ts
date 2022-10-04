function getKthFromEnd(nums: number[], k: number): number {
    return nums[(nums.length - k - 1)]
}

console.log(getKthFromEnd([1, 2, 3, 4, 5], 2))
