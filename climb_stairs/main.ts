function climbStairs(n: number): number {
    if (n === 1) return 1
    if (n === 2) return 2
    return climbStairs(n - 1) + climbStairs(n - 2)
}

console.log(climbStairs(5)) // time limit exceeded
