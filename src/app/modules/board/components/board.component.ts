import { Component, Input, OnChanges } from '@angular/core';

import { BoardService } from '../services/board.service';
import { IBoardConfig } from '../interfaces/board-config.interface';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnChanges {
    @Input() boardConfig: IBoardConfig;

    rowsNumber: number;
    chipsNumber: number;
    players: string[];
    winner: string;
    turnIdx = 0;
    playerChipTypes = ['x', 'o'];

    constructor(private service: BoardService) {}

    ngOnChanges() {
        console.log('change > calculating matrix with: ', this.boardConfig);

        this.service.setBoardConfig(this.boardConfig);
        this.rowsNumber = this.boardConfig.rowsNumber;
        this.chipsNumber = this.boardConfig.chipsNumber;
        this.players = this.boardConfig.players;

        this.initializeMatrix(this.rowsNumber, this.rowsNumber);
        this.service.setTurn(0);
    }

    private initializeMatrix(rowsNumber, colsNumber) {
        console.log('calculating', this.rowsNumber);
        this.service.initializeMatrix(rowsNumber, colsNumber);
        console.log('this._matrix > ', this.service.getMatrix());
    }

    public setCell(i, j) {
        const playerChip = this.playerChipTypes[this.service.getTurn()];
        this.service.setCell(i, j, playerChip);
        this.winner = this.getWinner();

        if (this.winner) {
            // TODO: forward message to feedback component: Player X won!
            console.log('NEW WINNER: ', this.winner);
        } else {
            this.changeTurn();
        }
    }

    public getWinner() {
        console.log('trying to get winner');
        const winner = this.service.getWinner();

        console.log('board.componet > getWinner: ', winner);
        return !isNaN(winner) && this.players[winner];
    }

    public changeTurn() {
        this.service.changeTurn();
    }

    public getMatrix() {
        return this.service.getMatrix();
    }
}
