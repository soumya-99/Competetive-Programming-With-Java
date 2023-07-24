
function removeDuplicates(nums: number[]): number[] {
    var set = new Set([...nums])

    return [...set]
    // return set.size
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
