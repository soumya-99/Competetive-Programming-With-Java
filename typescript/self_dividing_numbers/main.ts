
function selfDividingNumbers(left: number, right: number): number[] {
    let divNumbers: number[] = []
    for (let i = left; i <= right; i++) {
        let num: number = i
        while (num > 0) {
            let rem: number = num % 10
            if (rem === 0 || i % rem !== 0) break
            num = Math.floor(num / 10)
        }
        if (num === 0) divNumbers.push(i)
    }
    return divNumbers
}

console.log(selfDividingNumbers(1, 22))
