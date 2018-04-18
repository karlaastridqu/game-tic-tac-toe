import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChipModule } from './modules/chip/chip.module';
import { ModalModule } from './modules/shared/modal/modal.module';
import { HelloWorldModule } from './elements/hello-world/hello-world.module';
import { BoardModule } from './modules/board/board.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        NgbModule.forRoot(),
        ModalModule,
        HelloWorldModule,
        ModalModule,
        BrowserModule,
        BoardModule,
        ChipModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
