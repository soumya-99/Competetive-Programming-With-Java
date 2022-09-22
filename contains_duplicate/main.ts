function containsDuplicate(nums: number[]): boolean {
    const uniques = new Set([...nums])
    if (nums.length > uniques.size) return true
    return false
}

console.log(containsDuplicate([1, 3, 5, 2]))