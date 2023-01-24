import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { IbanPipe } from './pipes/iban.pipe';
import { BorderDirective } from './directives/border.directive';
import { TransactionPipe } from './pipes/transaction.pipe';
import { AccountTypePipe } from './pipes/account-type.pipe';
import { TransactionTypePipe } from './pipes/transaction-type.pipe';

/*
 * The Shared Module contains features that are
 * used in multiple sub-modules.
*/

@NgModule({
  declarations: [
    IbanPipe,
    TransactionPipe,
    AccountTypePipe,
    TransactionTypePipe,
    BorderDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    IbanPipe,
    TransactionPipe,
    AccountTypePipe,
    TransactionTypePipe,
    BorderDirective
  ]
})
export class SharedModule { }
