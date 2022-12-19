import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AccountListComponent } from './components/account-list/account-list.component';

@NgModule({
  declarations: [
    AccountListComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule
  ]
})
export class AccountsModule { }
