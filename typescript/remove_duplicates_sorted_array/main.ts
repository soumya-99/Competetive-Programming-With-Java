function removeDuplicates(nums: number[]): number {
    let sortedArray = nums.sort((a, b) => a - b)
    let set = new Set([...sortedArray])

    return set.size
}

console.log(removeDuplicates([1, 1, 2]))
