import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { IbanPipe } from './pipes/iban.pipe';
import { BorderDirective } from './directives/border.directive';

/*
 * The Shared Module contains features that are
 * used in multiple sub-modules.
*/

@NgModule({
  declarations: [
    IbanPipe,
    BorderDirective
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MaterialModule,
    IbanPipe,
    BorderDirective
  ]
})
export class SharedModule { }
