// formula
// 1 / Math.sqrt(5) * (((1 + Math.sqrt(5)) / 2) ** n - ((1 - Math.sqrt(5)) / 2) ** n)

function nthFibonacciNumber(n: number): number {
    return Math.round(1 / Math.sqrt(5) * (((1 + Math.sqrt(5)) / 2) ** n - ((1 - Math.sqrt(5)) / 2) ** n))
}

console.log(nthFibonacciNumber(8))