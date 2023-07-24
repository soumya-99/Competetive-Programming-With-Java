function numberOfSteps(num: number): number {
    let count: number = 0
    if (num === 0) return num
    while (num != 0) {
        if (num % 2 === 0) {
            num /= 2
            count++
        } else {
            num--
            count++
        }
    }
    return count
}

console.log(numberOfSteps(14))
