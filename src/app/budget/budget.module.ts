import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetComponent } from './components/budget/budget.component';
import { SharedModule } from '../shared/shared.module';
import { BudgetRoutingModule } from './budget-routing.module';



@NgModule({
  declarations: [
    BudgetComponent
  ],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    SharedModule
  ]
})
export class BudgetModule { }
