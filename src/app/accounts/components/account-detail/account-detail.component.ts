import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/core/services/account.service';
import { TransactionService } from 'src/app/core/services/transaction.service';
import { Account } from 'src/app/shared/models/account.model';
import { Transaction } from 'src/app/shared/models/transaction.model';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  account$!: Observable<Account>;
  transactions$!: Observable<Transaction[]>;

  constructor(private accountService: AccountService, 
    private route: ActivatedRoute,
    private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.initObservables();
  }

  private initObservables(): void{
    const accountId = +this.route.snapshot.params['id'];
    this.transactionService.loadTransactions(accountId);
    this.account$ = this.accountService.getAccountTypedById(accountId);
    this.transactions$ = this.transactionService.transaction$;
  }

}
