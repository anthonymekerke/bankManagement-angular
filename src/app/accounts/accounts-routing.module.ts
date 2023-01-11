import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';

const routes: Routes = [
  { path: '', component: AccountListComponent },
  { path: ':id', component: AccountDetailComponent },
  { path: ':account_id/transactions/:transaction_id', component: TransactionDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
