import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from './components/modal.component';

@NgModule({
    declarations: [
        ModalComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        FormsModule
    ],
    exports: [
        ModalComponent
    ]
})
export class ModalModule {}
