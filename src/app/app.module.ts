import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChipModule } from './modules/chip/chip.module';
import { ModalModule } from './modules/shared/modal/modal.module';
import { HelloWorldModule } from './elements/hello-world/hello-world.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        NgbModule.forRoot(),
        ModalModule,
        HelloWorldModule,
        BrowserModule,
        ChipModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
