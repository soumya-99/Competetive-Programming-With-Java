function subArraySum(arr: number[], sum: number): number[] {
    // let result: number[] = []
    // for (let i = 0; i < arr.length; i++) {
    //     let j = i + 1
    //     let sumOfSubArray = arr[i]
    //     while (j < arr.length) {
    //         sumOfSubArray += arr[j]
    //         if (sumOfSubArray === sum) {
    //             result.push(i)
    //             result.push(j)
    //             return result
    //         }
    //         j++
    //     }
    // }
    // return result

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr.slice(i, j + 1).reduce((a, b) => a + b) === sum) {
                return [i + 1, j + 1]
            }
        }
    }
    return []
}

console.log(subArraySum([1, 2, 3, 7, 5], 12))