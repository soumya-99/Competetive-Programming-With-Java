function matrixTranspose(matrix: number[][]): number[][] {
    // let result: number[][] = []
    // for (let i = 0; i < matrix.length; i++) {
    //     result.push([])
    //     for (let j = 0; j < matrix[i].length; j++) {
    //         result[i].push(matrix[j][i])
    //     }
    // }
    // return result
    return matrix[0].map((_, i) => matrix.map((row) => row[i]))
}

console.log(matrixTranspose([[1, 2, 3,], [4, 5, 6,], [7, 8, 9,]]))
// console.log([[1, 2, 3,], [4, 5, 6,], [7, 8, 9,]])