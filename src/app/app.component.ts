import { Component } from '@angular/core';

import { IBoardConfig } from './modules/board/interfaces/board-config.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Tic tac toe game!';
    boardConfig: IBoardConfig | {} = {};

    receiveMessage($event) {
        this.forwardMessage($event);
    }

    forwardMessage(msg) {
        if(msg.action === 'set-board-config') {
            const newBoardConfig = {};

            msg.fields.forEach((field) => {
                newBoardConfig[field.key] = field.value;
            });
            this.boardConfig = newBoardConfig;
            console.log('this.boardConfig -> ', this.boardConfig);
        }
    }
}
