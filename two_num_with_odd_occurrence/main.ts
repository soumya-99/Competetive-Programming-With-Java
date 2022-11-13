function twoOddSum(arr: number[], n: number) {
    let xor2 = arr[0]
    for (let i = 1; i < n; i++) {
        xor2 = xor2 ^ arr[i]
        console.log("XOR2: ", xor2)
    }
    console.log("XOR2 out Loop: ", xor2)
    console.log("XOR2 - 1: ", (xor2 - 1))
    console.log("!(XOR2 - 1): ", ~(xor2 - 1))
    let setBitNo = xor2 & ~(xor2 - 1)
    console.log("Set Bit Number: ", setBitNo)
    let x = 0
    let y = 0
    for (let i = 0; i < n; i++) {
        if (arr[i] & setBitNo) {
            x = x ^ arr[i]
            console.log("x: ", x)
        } else {
            y = y ^ arr[i]
            console.log("y: ", y)
        }
    }
    return [x, y]
}

console.log(twoOddSum([4, 2, 4, 5, 2, 3, 3, 1], 8))