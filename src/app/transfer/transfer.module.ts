import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferRoutingModule } from './transfer-routing.module';
import { TransferComponent } from './components/transfer/transfer.component';
import { TransactionFormService } from './services/transaction-form.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TransferComponent
  ],
  imports: [
    CommonModule,
    TransferRoutingModule,
    SharedModule
  ],
  providers: [
    TransactionFormService
  ]
})
export class TransferModule { }
