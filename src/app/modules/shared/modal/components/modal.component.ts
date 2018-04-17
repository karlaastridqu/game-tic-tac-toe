import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit, ViewEncapsulation, ViewChild, EventEmitter, Output } from '@angular/core';

import { DEFAULT_SIZE } from '../../../board/constants';
import { IModalResponse } from '../interfaces/board-config.interface';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
    private players = [];
    private modalReference: any;

    @Input() private playerName = 'Player 1';
    @Input() private rowsNumber = DEFAULT_SIZE;
    @Input() private chipsNumber = DEFAULT_SIZE;
    @Output() messageEvent = new EventEmitter<IModalResponse>();
    @ViewChild('content') private content;

    constructor(private modalService: NgbModal) {}

    ngOnInit() {
        setTimeout(() => {
            this.openVerticallyCentered(this.content);
        })
    }

    addPlayer(newPlayer) {
        console.log('adding ', newPlayer);
        this.players.push(newPlayer);
        this.playerName = '';
    }

    close() {
        this.modalReference.close();
        this.sendBoardConfiguration();
    }

    openVerticallyCentered(content) {
        const options: NgbModalOptions = {
            centered: true,
            backdrop: 'static',
            keyboard: false
        };

        this.modalReference = this.modalService.open(content, options);
    }

    sendBoardConfiguration() {
        this.messageEvent.emit({
            action: 'set-board-config',
            fields: [{
                key: 'players',
                value: this.players
            }, {
                key: 'rowsNumber',
                value: this.rowsNumber
            }, {
                key: 'chipsNumber',
                value: this.chipsNumber
            }]
        });
    }
}
