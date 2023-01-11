import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';

@NgModule({
  declarations: [
    AccountListComponent,
    AccountDetailComponent,
    TransactionDetailComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule
  ]
})
export class AccountsModule { }
