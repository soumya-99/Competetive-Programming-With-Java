// input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// output: 15
/**
 * Gives the maximum sum from all the diagonal element's sum.
 * @param matrix Input N X N Squre Matrix
 * @returns Maximum Diagonal Elements Sum
 */
function maxDiagonalSum(matrix: number[][]): number {
    let matSize: number = matrix[0].length
    let max: number = 0
    for (let i = 0; i < matSize; i++) {
        for (let j = 0; j < matSize; j++) {
            let sum: number = 0
            let row: number = i
            let col: number = j
            while (row < matSize && col < matSize) {
                sum += matrix[row][col]
                row++
                col++
            }
            max = Math.max(max, sum)
        }
    }
    return max
}

// console.log(maxDiagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(maxDiagonalSum([[6, 4, 2], [1, 3, 8], [9, 6, 0]]))
