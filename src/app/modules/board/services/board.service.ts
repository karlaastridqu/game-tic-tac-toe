import { Injectable } from '@angular/core';

import { INITIAL_STATE } from '../constants';
import { MatrixToolService } from './matrix-tool.service';
import { IBoardConfig } from '../interfaces/board-config.interface';

@Injectable()
export class BoardService {

    private _matrix: string[][];
    private boardConfig: IBoardConfig;
    private turnIdx = 0;

    constructor(
        private matrixService: MatrixToolService
    ) {}

    public setBoardConfig(boardConfig) {
        this.boardConfig = boardConfig;
    }

    public initializeMatrix(rowsNumber, colsNumber) {
        this._matrix = this.matrixService.initializeMatrix(rowsNumber, colsNumber, INITIAL_STATE);
    }

    public setCell(i, j, playerChip: string) {
        this._matrix[i][j] = playerChip;
    }

    public isValidChipState(i, j, playerChip: string) {
        return this._matrix[i][j] == "-";
    }

    public getWinner() {
        console.log('Checking rows');
        let playerWins = this.matrixService.checkRows(this._matrix, this.boardConfig.chipsNumber, INITIAL_STATE);

        if(!playerWins) {
            const transposed = this.matrixService.transpose(this._matrix);
            console.log('Checking columns');
            playerWins = this.matrixService.checkRows(transposed, this.boardConfig.chipsNumber, INITIAL_STATE);
        }

        const rowsNumber = this.boardConfig.rowsNumber;
        const chipsToWin = this.boardConfig.chipsNumber;

        if(!playerWins) {
            console.log('Checking diagonal 1');
            playerWins = this.matrixService.checkDiagonals(this._matrix, INITIAL_STATE, rowsNumber, chipsToWin);
        }

        if(!playerWins) {
            console.log('Checking diagonal 2');
            const testMatrix = this.matrixService.cloneMatrix(this._matrix);
            console.log("cloned: ",testMatrix);
            const transposed = this.matrixService.rotate(testMatrix);
            console.log("rotated -> ",transposed);
            playerWins = this.matrixService.checkDiagonals(transposed, INITIAL_STATE, rowsNumber, chipsToWin);
        }

        if(playerWins) {
            console.log('new winner: ', this.turnIdx);
        }

        return (playerWins) ? this.turnIdx : undefined;
    }

    public getTurn() {
        return this.turnIdx;
    }

    public setTurn(playerIdx) {
        this.turnIdx = playerIdx;
    }

    public changeTurn() {
        this.setTurn((this.turnIdx + 1) % this.boardConfig.players.length);
    }

    public getMatrix() {
        return this._matrix;
    }
}
