import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { httpInterceptorProvider } from './interceptors';

/*
 * The Core Module contains shared singleton services and
 * App-level module features (ex: toolbar)
*/

@NgModule({
  declarations: [ //list components define in the current module
    HeaderComponent
  ],
  imports: [ // list external modules that are imported 
    CommonModule,
    SharedModule,
    RouterModule, //each module should import RouterModule instead of importing it once in Shared module
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [ //list declared modules that should be used elsewhere in the application
    HeaderComponent
  ],
  providers:[
    httpInterceptorProvider
  ]
})
export class CoreModule { }
