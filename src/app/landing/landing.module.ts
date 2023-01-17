import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LoginComponent } from './components/login/login.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { SharedModule } from '../shared/shared.module';
import { LoginFormService } from './services/login-form.service';

/*
 * feature modules (functionnalities in the same domain) that activate in the
 * default route. Contains routes that can be accessed without being logged in.
*/

@NgModule({
  declarations: [
    LoginComponent,
    DocumentationComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ],
  providers: [
    LoginFormService
  ]
})
export class LandingModule { }
