import { Injectable } from '@angular/core';

@Injectable()
export class MatrixToolService {

    public initializeMatrix(rowsNumber, colsNumber, initialState) {
        const rows = [];

        for (let i = 0; i < rowsNumber; i++) {
            const cols = [];

            for (let j = 0; j < colsNumber; j++) {
                cols.push(initialState);
            }
            rows.push(cols);
        }

        return rows;
    }

    public transpose(matrix) {
        return matrix[0].map((col, i) => matrix.map(row => row[i]));
    }

    public rotate(matrix) {
        matrix = matrix.map(function(row) {
            return row.reverse();
        });
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < i; j++) {
                const temp = matrix[i][j];

                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }

        return matrix;
    }

    public cloneMatrix(matrix) {
        const newMatrix = [];

        for (let i = 0; i < matrix.length; i++) {
            newMatrix[i] = matrix[i].slice();
        }

        return newMatrix;
    }

    public areAllEquals(list) {
        let areEquals = true;
        let first;
        list.forEach((item) => {
            if(!first) {
                first = item;
            } else if(item !== first) {
                areEquals = false;
            }
        });

        return areEquals;
    }

    public checkRows(matrix, chipsToWin, skipState) {
        console.log('checkRows: ', matrix);
        let chipsInLine = 1;
        let previousChip;
        let playerWins = false;
        let i = 0;
        do {
            const currentRow = matrix[i];
            let j = 0;
            do {
                const currentChip = currentRow[j];

                if(previousChip && previousChip !== skipState && previousChip === currentChip) {

                    chipsInLine += 1;
                    if(chipsInLine === chipsToWin) {
                        playerWins = true;
                    }
                }
                previousChip = currentChip;
                j++;
            } while (j < currentRow.length);
            chipsInLine = 1;
            i++;
        } while (i < matrix.length);

        return playerWins;
    }

    public checkDiagonals(matrix, skipState, rowsNumber, chipsToWin) {
        let i = 0;
        let playerWins = false;

        do {
            const currentRow = matrix[i];
            let j = 0;
            do {
                let x = i;
                let y = j;
                let k = 0;
                let originalChip;
                const tempCoords = [];
                const diagonal = [];
                let nextChip;
                do {
                    originalChip = matrix[x][y];
                    if(originalChip !== skipState) {
                        diagonal.push(originalChip);
                        tempCoords.push({ x, y });
                        const { nextX, nextY } = this.getNext(x, y);

                        if(nextX < rowsNumber && nextY < rowsNumber) {
                            nextChip = matrix[nextX][nextY];
                        } else {
                            nextChip = undefined;
                        }
                    }
                    x++; y++; k++;
                } while (k < chipsToWin && nextChip === originalChip);
                console.log('DIAGONAL: ', diagonal);
                console.log('tempCoords: ', tempCoords);
                if( diagonal.length >= chipsToWin && this.areAllEquals(diagonal)) {
                    playerWins = true;
                }
                j++;
            } while ( (j < currentRow.length - chipsToWin ) && !playerWins);
            i++;
        } while ( (i < matrix.length - chipsToWin ) && !playerWins );

        return playerWins;
    }

    public getNext(i, j) {
        return { nextX: i + 1, nextY: j + 1 };
    }
}
