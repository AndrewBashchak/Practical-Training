function processMatrixSumRows() {
    let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    let sumFirstRow = matrix[0].reduce((a, b) => a + b, 0)
    let sumLastRow = matrix[matrix.length - 1].reduce((a, b) => a + b, 0)

    matrix[0][matrix.length - 1] = sumFirstRow;
    matrix[matrix.length - 1][matrix[matrix.length - 1].length - 1] = sumLastRow;

    console.table(matrix)
}

processMatrixSumRows()
  