class Matrix {
    private matrixString: string

    constructor(input: string) {
        this.matrixString = input
    }

    get rows(): number[][] {
        return this.getRowsMatrix()
    }

    get columns(): number[][] {
        return this.getColumnsMatrix()
    }

    private getRowsMatrix(): number[][] {
        return this.matrixString
            .split('\n')
            .map((row) => row.split(' ').map(Number))
    }

    private getColumnsMatrix(): number[][] {
        const columnsMatrix: number[][] = []

        for (let i = 0; i < this.rows.length; i++) {
            for (let j = 0; j < this.rows[i].length; j++) {
                if (!columnsMatrix[j]) {
                    columnsMatrix[j] = []
                }

                columnsMatrix[j][i] = this.rows[i][j]
            }
        }

        return columnsMatrix
    }
}

export default Matrix
