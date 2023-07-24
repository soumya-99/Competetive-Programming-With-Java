function subtractProductAndSum(n: number) {
    let product: number = 1
    let sum: number = 0
    while (n > 0) {
        let rem = n % 10
        product *= rem
        sum += rem
        n = Math.floor(n / 10)
    }
    return product - sum
}

console.log(subtractProductAndSum(28)) // 16 - 10 = 6
