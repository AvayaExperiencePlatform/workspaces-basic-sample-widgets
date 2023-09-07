import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';
import { CallControlComponent } from './call-control/call-control.component';

@NgModule({
  declarations: [
    AppComponent,
    CallControlComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents :  [
    CallControlComponent
  ],
  providers: []
})

export class AppModule {
  constructor(private injector: Injector) {
      const componentElement = createCustomElement(CallControlComponent, { injector });
      customElements.define('sample-call-control', componentElement);
  }
  
  ngDoBootstrap() {}
  }
