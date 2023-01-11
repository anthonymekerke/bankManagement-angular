import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferRoutingModule } from './transfer-routing.module';
import { TransferComponent } from './components/transfer/transfer.component';


@NgModule({
  declarations: [
    TransferComponent
  ],
  imports: [
    CommonModule,
    TransferRoutingModule
  ]
})
export class TransferModule { }
