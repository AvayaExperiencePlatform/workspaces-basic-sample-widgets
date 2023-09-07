import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  entryComponents :  [
    HelloWorldComponent
 ]
})

export class AppModule {

  constructor(private injector: Injector) {
      const componentElement = createCustomElement(HelloWorldComponent, { injector });
      customElements.define('angular-hello-world', componentElement);
    }
    ngDoBootstrap() {} 
  }