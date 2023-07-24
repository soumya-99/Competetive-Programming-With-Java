// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1


function isHappy(n: number): boolean {
    let set = new Set<number>()
    while (n !== 1) {
        let sum = 0
        while (n > 0) {
            sum += (n % 10) ** 2
            n = n / 10 | 0
        }
        if (set.has(sum)) {
            return false
        }
        set.add(sum)
        n = sum
    }
    return true
}

console.log(isHappy(19))
