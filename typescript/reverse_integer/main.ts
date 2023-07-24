function reverse(x: number): number {
    let max = Math.pow(2, 31) - 1
    let min = -Math.pow(2, 31)
    let result = 0
    if (x > max || x < min || x === 0) {
        return result
    }
    while (x != 0) {
        result = result * 10 + x % 10
        x = x / 10 | 0
    }
    if (result > max || result < min) {
        return 0
    }
    return result
}

console.log(reverse(-120))
