// input: [[1, 2, 9], [4, 5, 6], [7, 8, 3]]
// output: [9, 8]

// 1 2 9 -> 9
// 4 5 6 -> 6
// 7 8 3 -> 8
// ^ ^ ^
// 7 8 9

function matrixMaxRowColumn(matrix: number[][]): number[] {
    let maxRowCombined: number[] = []
    let maxColumnCombined: number[] = []
    for (let i = 0; i < matrix.length; i++) {
        maxRowCombined.push(Math.max(...matrix[i]))
        maxColumnCombined.push(Math.max(...matrix.map((row) => row[i])))
    }
    console.log(maxRowCombined);
    console.log(maxColumnCombined);
    
    return maxRowCombined.filter((value) => maxColumnCombined.includes(value))
}

console.time('matrixMaxRowColumn')
// console.log(matrixMaxRowColumn([[1, 2, 9], [4, 5, 6], [7, 8, 3]]))
console.log(matrixMaxRowColumn([[1, 2, 9, 10], [4, 5, 6, 11], [7, 8, 3, 2]]))
console.timeEnd('matrixMaxRowColumn')
