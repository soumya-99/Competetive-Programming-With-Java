function multiply(num1: string, num2: string): string {
    if (num1 === "0" || num2 === "0") {
        return "0"
    }

    const result = new Array(num1.length + num1.length).fill(0)
    
    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num1.length - 1; j >= 0; j--) {
            const product = Number(num1[i]) * Number(num2[j])
            const sum = product + result[i + j + 1]
            result[i + j + 1] = sum % 10
            result[i + j] += Math.floor(sum / 10)
        }
    }
    return result.join("").replace(/^0+/, "")
}

console.log(multiply("995452958426445643345", "476243756437458436536"))
