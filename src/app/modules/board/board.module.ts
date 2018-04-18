import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChipModule } from '../chip/chip.module';
import { BoardComponent } from './components/board.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BoardService } from './services/board.service';
import { MatrixToolService } from './services/matrix-tool.service';

@NgModule({
    imports: [
        NgbModule,
        CommonModule,
        ChipModule
    ],
    declarations: [
        BoardComponent
    ],
    providers: [
        BoardService,
        MatrixToolService
    ],
    exports: [
        BoardComponent
    ]
})
export class BoardModule {}
