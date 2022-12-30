function isValidSudoku(board: string[][]): boolean {
    for (let i = 0; i < 9; i++) {
        let row = new Set();
        let col = new Set();
        let cube = new Set();
        for (let j = 0; j < 9; j++) {
            let rowVal = board[i][j];
            let colVal = board[j][i];
            let cubeRow = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            let cubeCol = 3 * (i % 3) + (j % 3);
            let cubeVal = board[cubeRow][cubeCol];
            if (rowVal !== '.' && row.has(rowVal)) return false;
            if (colVal !== '.' && col.has(colVal)) return false;
            if (cubeVal !== '.' && cube.has(cubeVal)) return false;
            row.add(rowVal);
            col.add(colVal);
            cube.add(cubeVal);
        }
    }
    return true;
}