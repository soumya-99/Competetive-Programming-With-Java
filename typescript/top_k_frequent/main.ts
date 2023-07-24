// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Input: nums = [1], k = 1
// Output: [1]

function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>()
    for (const num of nums) {
        map.set(num, <number>map.get(num) + 1 || 1)
    }
    
    const arr = [...map.entries()].sort((a, b) => b[1] - a[1])
    return arr.slice(0, k).map((item) => item[0])
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
console.log(topKFrequent([1, 1, 1, 4, 3, 2, 3, 4, 3, 4, 2, 3, 5], 3))