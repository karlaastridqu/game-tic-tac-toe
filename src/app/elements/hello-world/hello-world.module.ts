import { NgModule } from '@angular/core';

import { HelloWorldComponent } from './components/hello-world.component';

@NgModule({
    exports: [
        HelloWorldComponent
    ],
    entryComponents: [
        HelloWorldComponent
    ],
    declarations: [
        HelloWorldComponent
    ]
})
export class HelloWorldModule {}
