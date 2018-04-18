import { Component, Input, Output, EventEmitter, HostListener, OnInit} from '@angular/core';

@Component({
    selector: 'app-chip',
    templateUrl: './chip.component.html',
    styleUrls: ['./chip.component.css']
})
export class ChipComponent implements OnInit {

    @Input() state: string;
    @Output('chipClick') click = new EventEmitter<String>();

    constructor() { }

    ngOnInit() {
    }

    @HostListener('click')
    clickHandler() {
        if(!this.state) {
            console.log('emitting click from chip!');
            this.click.emit('chip clicked!');
        }
    }
}
