/**
 * Returns the maximum subarray sum using Kadane's Algorithm.
 * @param arr Given Array
 * @returns Maximum Subarray Sum
 */
function kadane(arr: number[]): number {
    let max: number = arr[0]
    let currSum: number = arr[0]
    for (let i = 0; i < arr.length; i++) {
        currSum = Math.max(arr[i], currSum + arr[i])
        max = Math.max(max, currSum)
    }
    return max
}

console.log(kadane([1, 2, 3, -2, 5]))
