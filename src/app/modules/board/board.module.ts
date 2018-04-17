import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChipModule } from '../chip/chip.module';
import { BoardComponent } from './components/board.component';

@NgModule({
    imports: [
        CommonModule,
        ChipModule
    ],
    declarations: [
        BoardComponent
    ]
})
export class BoardModule {}
