import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { AccountService } from 'src/app/core/services/account.service';
import { TransactionService } from 'src/app/core/services/transaction.service';
import { Account } from 'src/app/shared/models/account.model';
import { TransactionFormService } from '../../services/transaction-form.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  accounts$!: Observable<Account[]>;

  transactionForm!: FormGroup;
  extras = false;
  
  constructor(private transactionFormService: TransactionFormService,
    private accountService: AccountService,
    private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.initObservables();
    this.transactionForm = this.transactionFormService.transactionForm();
  }

  onSubmitForm(){
    this.transactionService.postTransaction({
      amount: this.transactionForm.value.amount,
      valueDate: this.transactionForm.value.valueDate,
      account: this.transactionForm.value.account
    }).pipe(
      tap(saved => {
        if(saved) {
          this.resetForm()
          this.accountService.loadAccounts(true)
        }
        else {console.error('Echec de l\'enregistrement')}
      })
    ).subscribe();
  }

  private initObservables(){
    this.accountService.loadAccounts();
    this.accounts$ = this.accountService.accounts$;
  }

  private resetForm(){
    this.transactionForm.reset();
    this.extras = false;
  }

}
