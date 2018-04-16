import { NgModule } from '@angular/core';

import { HelloWorldComponent } from './components/hello-world.component';

@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  exports: [
    HelloWorldComponent
  ]
})
export class HelloWorldModule { }
