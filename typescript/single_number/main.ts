function singleNumber(nums: number[]): number {
    let result: number = 0
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i]
    }
    return result

    // let map = new Map<number, number>()
    // for (const num of nums) {
    //     map.set(num, <number>map.get(num) + 1 || 1)
    // }
    
    // for (const [key, value] of map.entries()) {
    //     if (value === 1) {
    //         return key
    //     }
    // }
    // return 0
}

console.log(singleNumber([0]))
