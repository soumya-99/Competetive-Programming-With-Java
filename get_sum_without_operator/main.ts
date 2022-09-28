function getSum(a: number, b: number): number {
    while (b != 0) {
        let temp: number = (a & b) << 1
        a = a ^ b
        b = temp
    }
    return a
}

console.log(getSum(1, 2))

